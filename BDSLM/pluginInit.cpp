#include "pch.h"
#include <thread>
#include "conf.h"

int pluginInit() {
    std::ios::sync_with_stdio(false);
    config.load();
    markersInit();
    std::thread apiServerThread(startApiServer);
    apiServerThread.detach();
    preStartUnmined();
    stopNginx();
    startNginx();
    return 0;
}