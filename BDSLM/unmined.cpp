#include "pch.h"
#include "shell.h"
#include <LoggerAPI.h>
#include <ScheduleAPI.h>

std::string& trim(std::string& s)
{
	if (s.empty())
	{
		return s;
	}
	//s.erase(0, s.find_first_not_of(" "));
	s.erase(s.find_last_not_of(" ") + 1);
	return s;
}

std::string getLevelName() {
	std::ifstream properties("server.properties");
	string line;
	while (std::getline(properties, line)) {// 将server.properties文件中的每一行字符读入到string line中
		if (line.find("level-name") != string::npos) {// 查找level-name项
			string levelName = line.substr(line.find("=") + 1);
			return trim(levelName);
		}
	}
	return "";
}

Shell shell;
bool errorMode = false;
int startUnmined() {
	string levelName = getLevelName();
	if (levelName == "") {
		Logger logger("BDSLM");
		logger.warn << L"无法从server.properties中读取level-name项。使用默认值 level。" << logger.endl;
		levelName = "level";
	}
	bool status = true;
	status = shell.RunProcess(".\\plugins\\BDSLM\\unmined\\unmined-cli.exe web render --world=\"./worlds/" + levelName + "\" --output=\"./plugins/BDSLM/unmined-web/\" --imageformat=webp -c --zoomin=-2 --zoomout=4");
	Schedule::repeat([]() {
		string line;
		shell.GetOutput(1, line);
		/*if (line.find("Elapsed time total") != string::npos) {
			Logger logger;
			logger.info << "地图生成完毕！" << logger.endl;
		}
		else if (line.find("exception") != string::npos) {
			Logger logger;
			logger.error << "地图生成失败：" << logger.endl;
			errorMode = true;
		}
		else {

		}
		if (errorMode) {
			std::cout << line;
		}*/
	}, 40);
	return status;
}