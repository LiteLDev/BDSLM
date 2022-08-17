//
// Created by Qiuzhizhe on 2022/7/29.
//
#include "Command.h"
#include "THook/mod.h"
#include "THook/SymHook.h"
#include <sstream>
#include <filesystem>

namespace Command {
    void Level::forEachPlayer(const std::function<void(Player*)>& todo) {
        //!硬编码
        auto begin = (uint64_t*)*((uint64_t*)
            this + 0xB);
        auto end = (uint64_t*)*((uint64_t*)
            this + 0xc);
        while (begin != end) {
            auto* player = (Player*)(*begin);
            if (player)todo(player);
            ++begin;
        }
    }

    std::vector<Player*> Level::getAllPlayers() {
        try {
            std::vector<Player*> player_list;
            Command::serverLevel->forEachPlayer([&player_list](Player* sp) {
                Player* player = sp;
                player_list.push_back(player);
                return true;
                });
            return player_list;
        }
        catch (...) {
            return {};
        }
    }

    static VA cmdQueue = 0;
    using namespace SymHook;
    //获取命令队列
    THook(VA,
        MSSYM_MD5_3b8fb7204bf8294ee636ba7272eec000,
        VA _this
    ) {
        cmdQueue = original(_this);
        return cmdQueue;
    }

    //执行原版指令
    bool runcmd(const std::string& command) {
        if (cmdQueue != 0) {
            SYM_CALL(bool(*) (VA, std::string),
                MSSYM_MD5_b5c9e566146b3136e6fb37f0c080d91e,
                cmdQueue,
                command
            );
            return true;
        }
        return false;
    }

    void setLevel(Level* level) {
        serverLevel = level;
    }

    //THook(void, MSSYM_B1QA4tickB1AE11ServerLevelB2AAA7UEAAXXZ,
    //    Command::Level* _this)
    //{
    //    if (!Command::serverLevel) {
    //        setLevel(_this);
    //    }
    //    return original(_this);
    //}
}