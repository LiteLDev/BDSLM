//
// Created by Qiuzhizhe on 2022/7/30.
//

#ifndef BACKUPHELPER_MESSAGE_H
#define BACKUPHELPER_MESSAGE_H
//#include "Player.h"
//#include "mod.h"
#include <string>


namespace Message {

    //void mcbe_sendMessage(const std::string &s, Player *player);

    template<typename ... Args>
    std::string format(const std::string &format, Args ... args) {
        int size = snprintf(nullptr, 0, format.c_str(), args ...) + 1; // Extra space for '\0'
        if (size <= 0)
            return "";
        std::unique_ptr<char[]> buf(new char[size]);
        snprintf(buf.get(), size, format.c_str(), args ...);
        return std::string(buf.get(), buf.get() + size - 1); // We don't want the '\0' inside
    }

    //template<typename ...Args>
    //void gamePrintf(Player *player, const std::string &prefix, const std::string &fmt, Args ...args) {
    //    const std::string message = prefix + format(fmt, args...);
    //    mcbe_sendMessage(message, player);
    //}

    //template<typename ... Args>
    //void warning(Player *player, const std::string &format, Args ... args) {
    //    gamePrintf(player, "§6", format, args...);
    //}

    //template<typename ... Args>
    //void error(Player *player, const std::string &format, Args ... args) {
    //    gamePrintf(player, "§c", format, args...);
    //}

    //template<typename ... Args>
    //void info(Player *player, const std::string &format, Args ... args) {
    //    gamePrintf(player, "", format, args...);
    //}

    template<typename ... Args>
    void logger(const std::string &msg, Args ... args){
        const std::string pluginName = "[BDSLM] ";
        const std::string newMsg = pluginName + format(msg, args ...)+"\n";
        printf(newMsg.c_str());
    }

};


#endif //BACKUPHELPER_MESSAGE_H
