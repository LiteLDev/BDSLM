#include "pch.h"
#include <thread>

int pluginInit() {
    LL::registerPlugin("BDSLM", "Satellite Map for Bedrock Dedicated Server", LL::Version(0, 3, 0), {
            { "Author", "PA733" }
        }
    );
    std::ios::sync_with_stdio(false);
    int a = 0;
    std::thread apiServerThread(startApiServer);
    apiServerThread.detach();
    startUnmined();
    stopNginx();
    startNginx();
	return 0;
}