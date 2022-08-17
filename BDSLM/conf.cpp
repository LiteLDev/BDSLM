#include "pch.h"

#pragma warning(push)
#pragma warning(disable: 4996)
#pragma warning(disable: 4251)
#pragma warning(disable: 4275)
#include <yaml-cpp/yaml.h>
#include <Message.h>

unsigned short int port;
unsigned short int apiPort;

bool confExist() {
    std::ifstream conf("./plugins/BDSLM/config.yaml");
    if (!conf) return false;
    else return true;
}

void generateConf() {
    //Logger logger("BDSLM");
    Message::logger(" 未检测到配置文件，生成中……");
    YAML::Node conf = YAML::Load("");
    conf["webServer"]["port"] = 5000;
    conf["apiServer"]["port"] = 5001;
    std::ofstream confOut("./plugins/BDSLM/config.yaml", std::fstream::out);
    confOut << conf;
    confOut.close();
}

void parseConfFile() {
    if (!confExist()) generateConf();
    YAML::Node conf;
    try {
        conf = YAML::LoadFile("./plugins/BDSLM/config.yaml");
        port = conf["webServer"]["port"].as<unsigned short int>();
        apiPort = conf["apiServer"]["port"].as<unsigned short int>();
    }
    catch (std::exception e ) {
        //Logger logger("BDSLM");
        Message::logger("配置文件无法读取：", e.what());
        Message::logger("尝试使用默认值……");
        port = 5000;
        apiPort = 5001;
    }
}
