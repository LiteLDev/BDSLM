#pragma once
#include "pch.h"
#include <random>
#include <EventAPI.h>
#include <MC/Player.hpp>
#include <httplib/httplib.h>
#pragma warning(disable: 4996)

struct WebChatMessage {
	enum Type {
		None,
		OutGoing,
		//InComing,
	};
	Type type = Type::None;
	int id = -1;
	std::string prefix;
	std::string name;
	std::string content;
	time_t utctime;
};

inline void to_json(nlohmann::json& j, const WebChatMessage& msg) {
	tm* t = gmtime(&msg.utctime);
	j = {
		{"id", msg.id},
		{"prefix", msg.prefix},
		{"name", msg.name},
		{"time", {t->tm_year + 1900, t->tm_mon + 1, t->tm_mday, t->tm_hour, t->tm_min, t->tm_sec}},
		{"content", msg.content}
	};
}

class WebChatService {

	int current_id_ = 0;

public:

	std::vector<WebChatMessage> msg_list_;

	WebChatService() = default;

	void init();
	std::vector<WebChatMessage> getMessages(int startid = 0);

};
extern WebChatService webChatService;