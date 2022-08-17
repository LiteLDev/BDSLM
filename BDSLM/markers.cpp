#include "pch.h"

#include <Nlohmann/json.hpp>
#include "ScheduleAPI.h"
#include "Player.h"
#include "Command.h"

#include <mutex>
#include <shared_mutex>

std::shared_mutex markersReadMutex;

nlohmann::json playerMarkers = nlohmann::json::array();
std::string getPlayerMarkers() {
	std::string markersDump;
	std::shared_lock lock{ markersReadMutex };
	markersDump = playerMarkers.dump(4);
	lock.unlock();
	return playerMarkers.dump(4);
}

// To-Do: |
// 修改此处代码逻辑，使其效率更高
// 
// SEH_Exception
void updateMarkers() {
	std::unique_lock lock{ markersReadMutex };
	playerMarkers = nlohmann::json::array();
	for (Player* player : Command::serverLevel->getAllPlayers()) {
		nlohmann::json playerMarker = {};
		Vec3 playerPos = player->getPos();
		playerMarker["x"] = playerPos.x;
		playerMarker["z"] = playerPos.z;
		playerMarker["image"] = "steve.png";
		playerMarker["imageAnchor"] = nlohmann::json::array();
		playerMarker["imageAnchor"][0] = 0.5;
		playerMarker["imageAnchor"][1] = 1;
		playerMarker["imageScale"] = 1;
		playerMarker["text"] = player->getNameTag();
		playerMarker["textColor"] = "red";
		playerMarker["offsetX"] = 0;
		playerMarker["offsetY"] = 20;
		playerMarker["font"] = "bold 20px Calibri,sans serif";
		playerMarkers.push_back(playerMarker);
	}
	lock.unlock();
}

void markersInit() {
	Schedule::repeat(updateMarkers, 20);
}