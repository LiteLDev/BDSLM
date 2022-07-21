#include "pch.h"

#pragma warning(push)
#pragma warning(disable: 4996)
#pragma warning(disable: 4251)
#pragma warning(disable: 4275)
#include <yaml-cpp/yaml.h>

unsigned short int port;
unsigned short int apiPort;

bool confExist() {
    std::ifstream conf("./plugins/BDSLM/config.yaml");
    if (!conf) return false;
    else return true;
}

void generateConf() {
    Logger logger("BDSLM");
    logger.info << " 未检测到配置文件，生成中……" << logger.endl;
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
        Logger logger("BDSLM");
        logger.warn << "配置文件无法读取：" << e.what() << logger.endl;
        logger.warn << "尝试使用默认值……" << logger.endl;
        port = 5000;
        apiPort = 5001;
    }
}
