#include "pch.h"

inline bool exists_ngxPidFile(const std::string& path) {
    std::fstream ngxPidStream;
    ngxPidStream.open(path, std::ios::in);
    if (ngxPidStream) {
        return true;
    }
    else {
        return false;
    }
}

int startNginx() {
    char cWindowsDirectory[MAX_PATH];
    LPTSTR cWinDir = new TCHAR[MAX_PATH];
    GetCurrentDirectory(MAX_PATH, cWinDir);
    char* sConLin = (char*)"./plugins/BDSLM/nginx/nginx.exe -p ./plugins/BDSLM/nginx/";

    STARTUPINFOA si;
    PROCESS_INFORMATION pi;

    ZeroMemory(&si, sizeof(si));
    ZeroMemory(&pi, sizeof(pi));
    if (CreateProcessA(
        NULL,
        sConLin,
        NULL,
        NULL,
        false, 
        0,
        NULL,
        NULL,
        &si,
        &pi
    ))
    {
        CloseHandle(pi.hProcess);
        CloseHandle(pi.hThread);
    }
    else {
        Logger logger;
        logger.error << "failed to create process" << logger.endl;
    }
}

int stopNginx() {
    if (exists_ngxPidFile("./plugins/BDSLM/nginx/logs/nginx.pid")) {
        char cWindowsDirectory[MAX_PATH];
        LPTSTR cWinDir = new TCHAR[MAX_PATH];
        GetCurrentDirectory(MAX_PATH, cWinDir);
        char* sConLin = (char*)"./plugins/BDSLM/nginx/nginx.exe -p ./plugins/BDSLM/nginx/ -s quit";

        STARTUPINFOA si;
        PROCESS_INFORMATION pi;

        ZeroMemory(&si, sizeof(si));
        ZeroMemory(&pi, sizeof(pi));
        if (CreateProcessA(
            NULL,
            sConLin,
            NULL,
            NULL,
            false,
            0,
            NULL,
            NULL,
            &si,
            &pi
        ))
        {
            WaitForSingleObject(pi.hProcess, 2000);
            CloseHandle(pi.hProcess);
            CloseHandle(pi.hThread);
        }
        else {
            Logger logger;
            logger.error << "failed to create process" << logger.endl;
        }
    }
}