#include "pch.h"
#include <thread>
#include "conf.h"
#include "webChat.h"

int pluginInit() {
    std::ios::sync_with_stdio(false);
    config.load();
    if (config.enableWebChat) {
        webChatService.init();
    }
    markersInit();
    std::thread apiServerThread(startApiServer);
    apiServerThread.detach();
    preStartUnmined();
    stopNginx();
    startNginx();
    return 0;
}