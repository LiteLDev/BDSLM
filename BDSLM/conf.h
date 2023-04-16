#pragma once
#include "pch.h"

class Config {
	
public:

	// Please write default values below
	uint16_t webServerPort = 5000;
	uint16_t apiServerPort = 5001;
	bool enableWebChat = false;
	std::string webChatOutboundPrefix = "<span style=\"color: cyan;\">[SERVER]</span>";
	int16_t zoomIn = -2;
	int16_t zoomOut = 4;
	
	void load();
	void save();
	
};
extern Config config;
