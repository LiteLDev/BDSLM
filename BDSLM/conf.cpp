#include "conf.h"
#include "pch.h"
#include <filesystem>

#pragma warning(push)
#pragma warning(disable: 4996)
#pragma warning(disable: 4251)
#pragma warning(disable: 4275)
#include <yaml-cpp/yaml.h>

#define CONFIG_PATH "./plugins/BDSLM/config.yaml"

Config config;

void to_yaml(YAML::Node& node, const Config& cfg) {
    node["webServer"]["port"] = cfg.webServerPort;
    node["apiServer"]["port"] = cfg.apiServerPort;
    node["webChat"]["enabled"] = cfg.enableWebChat;
    node["webChat"]["outbound"]["prefix"] = cfg.webChatOutboundPrefix;
}

void from_yaml(const YAML::Node& node, Config& cfg) {
    if (node["webServer"].IsDefined() && node["webServer"]["port"].IsDefined()) {
        cfg.webServerPort = node["webServer"]["port"].as<uint16_t>();
    }
    if (node["apiServer"].IsDefined() && node["apiServer"]["port"].IsDefined()) {
        cfg.apiServerPort = node["apiServer"]["port"].as<uint16_t>();
    }
    if (node["webChat"].IsDefined()) {
        if (node["webChat"]["enable"].IsDefined()) {
            cfg.enableWebChat = node["webChat"]["enable"].as<bool>();
        }
        if (node["webChat"]["outbound"].IsDefined()) {
            if (node["webChat"]["outbound"]["prefix"].IsDefined()) {
                cfg.webChatOutboundPrefix = node["webChat"]["outbound"]["prefix"].as<std::string>();
            }
        }
    }
}

void Config::load() {
    try {
        if (!std::filesystem::exists(CONFIG_PATH)) {
            this->save();
            return;
        }
        YAML::Node conf = YAML::LoadFile("./plugins/BDSLM/config.yaml");
        from_yaml(conf, config);
        YAML::Node node;
        to_yaml(node, config);
		if (conf != node) {
            Message::logger("Your config is outdated! Auto-completing...");
            this->save();
        }
    }
    catch (const std::exception& e) {
        Message::logger("Failed to load config: %s", e.what());
        Message::logger("Using the default config");
    }
}

void Config::save() {
    try {
        std::fstream file(CONFIG_PATH, std::ios::out);
        YAML::Node node;
        to_yaml(node, config);
        file << node;
    }
    catch (const std::exception& e) {
        Message::logger("Failed to save(create) config!");
    }
}
