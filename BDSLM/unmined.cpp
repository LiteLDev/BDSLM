// 本文件内定义的函数主要负责unmined相关操作（启动、监控）
#include "pch.h"
#include "shell.h"
#include "ScheduleAPI.h"
#include "Command.h"
#include "THook/SymHook.h"

#include <algorithm>
#include <Message.h>

std::wstring str2wstr(const std::string& str, UINT codePage) {
	auto len = MultiByteToWideChar(codePage, 0, str.c_str(), -1, nullptr, 0);
	auto* buffer = new wchar_t[len + 1];
	MultiByteToWideChar(codePage, 0, str.c_str(), -1, buffer, len + 1);
	buffer[len] = L'\0';

	wstring result = wstring(buffer);
	delete[] buffer;
	return result;
}

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
	// 在server.properties中查找地图名称
	while (std::getline(properties, line)) {
		if (line.find("level-name") != string::npos) {
			string levelName = line.substr(line.find("=") + 1);
			return trim(levelName);
		}
	}
	return "";
}

Shell shell;
bool errorMode = false;
bool needResumeMap = false;
int startUnmined() {
	//Logger logger("BDSLM");
	Message::logger("启动地图渲染进程……");
	string levelName = getLevelName();
	if (levelName == "") {
		Message::logger("无法从server.properties中读取level-name项。使用默认值 level。");
		levelName = "level";
	}
	bool status = true;
	status = shell.RunProcess(str2wstr(".\\plugins\\BDSLM\\unmined\\unmined-cli.exe web render --world=\"./worlds/" + levelName + "\" --output=\"./plugins/BDSLM/unmined-web/\" --imageformat=webp -c --zoomin=-2 --zoomout=4", CP_UTF8));
	Schedule::repeat([]() {
		string line;
		shell.GetOutput(1, line);
		if (line.find("Elapsed time total") != string::npos) {
			//Logger logger("BDSLM");
			Message::logger("地图生成完毕！");
			if (needResumeMap) {
				Command::runcmd("save resume");
			}
		}
		else if (line.find("exception") != string::npos) {
			//Logger logger("BDSLM");
			if (needResumeMap) {
				Message::logger("地图生成失败：");
				errorMode = true;
			}
			else {
				Message::logger("地图生成失败");
				//logger.warn << "由于您安装了不兼容的插件，为了避免不必要的反馈，我们将不会输出错误日志。" << logger.endl;
			}
		}
		// To-Do: 在此处读入unmined的进度并在控制台显示（天哪我到底开了多少坑啊）
		else {

		}
		if (errorMode) {
			std::cout << line;
		}
	}, 40);
	return status;
}


ScheduleTask checkIfDataSaved;

//Server start
using namespace SymHook;
THook(void*, MSSYM_B1QE17sendServerStartedB1AE28ServerCommunicationInterfaceB2AAA7QEAAXXZ,
	void* _this) {
	original(_this);

	Message::logger("正在挂起地图，将在挂起后启动渲染");
	Command::runcmd("save hold");
	needResumeMap = true;
}
void preStartUnmined() {
	//Event::ServerStartedEvent::subscribe([](const Event::ServerStartedEvent& ev) {
		//Logger logger("BDSLM");
		//LL::Plugin* backupHelperPlugin = LL::getPlugin("BackupHelper");
		//// 查找是否有BackupHelper
		//if (backupHelperPlugin != nullptr) {
		//	std::string backupHelperPluginVersion = backupHelperPlugin->version.toString();
		//	backupHelperPluginVersion.erase(std::remove(backupHelperPluginVersion.begin(), backupHelperPluginVersion.end(), '.'), backupHelperPluginVersion.end());
		//	if (std::stoi(backupHelperPluginVersion) < 207) {
		//		//logger.warn << "检测到不兼容的插件：BackupHelper，将尝试不挂起地图生成图像，请勿反馈由此造成的任何问题。" << logger.endl;
		//		//logger.info << "在新版本BackupHelper（版本号大于等于2.0.7）中，我们已经解决了冲突问题，请更新您的BackupHelper" << logger.endl;
		//		startUnmined();
		//		return true;
		//	}
		//}
		//Message::logger("正在挂起地图，将在挂起后启动渲染");
		//Command::runcmd("save hold");
		//needResumeMap = true;
		//return true;
		//});
	checkIfDataSaved = Schedule::repeat([&]() {
		// 检查地图是否已被挂起
		if (Command::runcmd("save query")) {
			checkIfDataSaved.cancel();
			startUnmined();
		}
		}, 40);
}
