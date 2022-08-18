#include "conf.h"
#include "webChat.h"
#include "THook/mod.h"
#include "THook/SymHook.h"
#include "Player.h"
#include "Command.h"

#define MSG_STORE_TIME 600 // 10 min

WebChatService webChatService;

//WebChatService::init()
using namespace SymHook;
THook(void, MSSYM_B1QA6handleB1AE20ServerNetworkHandlerB2AAE26UEAAXAEBVNetworkIdentifierB2AAE14AEBVTextPacketB3AAAA1Z,
	void* _this, NetworkIdentifier* id, void* text) {

	original(_this, id, text);
	if (config.enableWebChat) {
		//找到发送命令的玩家
		Player* source = nullptr;
		Command::serverLevel->forEachPlayer([&id, &source](Player* player) {
			if (player->getClientID()->getHash() == id->getHash()) {

				source = player;
				return;
			}
			});
		//找不到就直接返回
		if (!source) {
			//original(_this, id, text);
			return;
		}

		//! 这是一处强制转换
		std::string mMessage = *reinterpret_cast<std::string*>((char*)text + 80);

		time_t ts = time(NULL);
		WebChatMessage msg{
			WebChatMessage::Type::OutGoing,
			webChatService.current_id_,
			config.webChatOutboundPrefix,
			source->getNameTag(),
			mMessage,
			ts
		};
		auto str = nlohmann::json(msg).dump();
		// Clear old messages
		while (!webChatService.msg_list_.empty() && ts - webChatService.msg_list_.front().utctime >= MSG_STORE_TIME) {
			webChatService.msg_list_.erase(webChatService.msg_list_.begin());
		}
		webChatService.msg_list_.push_back(msg);
		webChatService.current_id_ += 1;
	}
	return;
	
}

//void WebChatService::init() {
//	Event::PlayerChatEvent::subscribe([this](const Event::PlayerChatEvent& ev) {
//		time_t ts = time(NULL);
//		WebChatMessage msg{
//			WebChatMessage::Type::OutGoing,
//			current_id_, 
//			config.webChatOutboundPrefix,
//			ev.mPlayer->getRealName(),
//			ev.mMessage,
//			ts
//		};
//		auto str = nlohmann::json(msg).dump();
//		// Clear old messages
//		while (!msg_list_.empty() && ts - msg_list_.front().utctime >= MSG_STORE_TIME) {
//			msg_list_.erase(msg_list_.begin());
//		}
//		msg_list_.push_back(msg);
//		current_id_ += 1;
//		return true;
//	});
//}

std::vector<WebChatMessage> WebChatService::getMessages(int startid) {
	if (startid == 0) {
		return msg_list_;
	}
	std::vector<WebChatMessage> result;
	for (auto it = msg_list_.begin(); it != msg_list_.end(); ++it) {
		if (it->id == startid) {
			result = std::vector<WebChatMessage>(it, msg_list_.end());
		}
	}
	return result;
}