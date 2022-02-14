// dllmain.cpp : 定义 DLL 应用程序的入口点。
#include "pch.h"

BOOL APIENTRY DllMain(HMODULE hModule,
    DWORD  ul_reason_for_call,
    LPVOID lpReserved
)
{
    switch (ul_reason_for_call)
    {
    case DLL_PROCESS_ATTACH:
        LL::registerPlugin("BDSLM", "Satellite Map for Bedrock Dedicated Server", LL::Version(0, 1, 0), {
                { "Author", "PA733" }
            }
        );
        std::ios::sync_with_stdio(false);
        startUnmined();
        stopNginx();
        startNginx();
        break;
    case DLL_THREAD_ATTACH:
    case DLL_THREAD_DETACH:
    case DLL_PROCESS_DETACH:
        break;
    }
    return TRUE;
}

extern "C" {
    _declspec(dllexport) void onPostInit() {
        
    }
}

THook(void, "?leaveGameSync@ServerInstance@@QEAAXXZ", void* a) {
    stopNginx();
    original(a);
}