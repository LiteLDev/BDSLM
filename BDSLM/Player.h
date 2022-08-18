//
// Created by Qiuzhizhe on 2022/7/28.
//

#ifndef BACKUPHELPER_PLAYER_H
#define BACKUPHELPER_PLAYER_H

#include <vector>
#include <string>
#include <THook/mod.h>

struct NetworkIdentifier {
    uint64_t getHash();
};

struct Vec3 {
    float x;
    float y;
    float z;
};
//enum CommandPermissionLevel : char {
//    Any = 0,
//    GameMasters = 1,
//    Admin = 2,
//    HostPlayer = 3,
//    Console = 4,
//    Internal = 5,
//};

//enum CommandPermissionLevel:char {
//    Any = 0x0,
//    GameMasters = 0x1,
//    Admin = 0x2,
//    Host = 0x3,
//    Owner = 0x4,
//    Internal = 0x5,
//};

class Player {
public:
    std::string getNameTag();
    Vec3 getPos();
    NetworkIdentifier *getClientID();
    //CommandPermissionLevel getCommandPermissionLevel();

};

#endif //BACKUPHELPER_PLAYER_H
