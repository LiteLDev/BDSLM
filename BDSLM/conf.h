#pragma once
#include "pch.h"

class Config {
	
public:

	// Please write default values below
	uint16_t webServerPort = 5000;
	uint16_t apiServerPort = 5001;
	bool enableWebChat = true;
	std::string webChatOutboundPrefix = "<span style=\"color: cyan;\">[SERVER]</span>";

	void load();
	void save();
	
};
extern Config config;
