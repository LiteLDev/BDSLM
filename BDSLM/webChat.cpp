#include "pch.h"
#include "conf.h"
#include "webChat.h"

#define MSG_STORE_TIME 600 // 10 min

WebChatService webChatService;

void WebChatService::init() {
	Event::PlayerChatEvent::subscribe([this](const Event::PlayerChatEvent& ev) {
		time_t ts = time(NULL);
		WebChatMessage msg{
			WebChatMessage::Type::OutGoing,
			current_id_, 
			config.webChatOutboundPrefix,
			ev.mPlayer->getRealName(),
			ev.mMessage,
			ts
		};
		try {
			auto str = nlohmann::json(msg).dump();
		}
		catch (const std::exception& e) {
			return true;
		}
		// Clear old messages
		while (!msg_list_.empty() && ts - msg_list_.front().utctime >= MSG_STORE_TIME) {
			msg_list_.erase(msg_list_.begin());
		}
		msg_list_.push_back(msg);
		current_id_ += 1;
		return true;
	});
}

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