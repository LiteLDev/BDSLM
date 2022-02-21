#include "pch.h"
#include <Nlohmann/json.hpp>
#include <MC/Level.hpp>
#include <MC/Player.hpp>

nlohmann::json playerMarkers = nlohmann::json::array();

int MmarkersInit() {

}

std::string getPlayerMarkers() {
	// To-Do: |
	// 修改此处代码逻辑，使其效率更高
	// 
	// SEH_Exception
	playerMarkers = nlohmann::json::array();
	for (Player* player : Level::getAllPlayers()) {
		nlohmann::json playerMarker = {};
		Vec3 playerPos = player->getPos();
		playerMarker["x"] = playerPos.x;
		playerMarker["z"] = playerPos.z;
		playerMarker["image"] = "steve.png";
		playerMarker["imageAnchor"] = nlohmann::json::array();
		playerMarker["imageAnchor"][0] = 0.5;
		playerMarker["imageAnchor"][1] = 1;
		playerMarker["imageScale"] = 1;
		playerMarker["text"] = player->getName();
		playerMarker["textColor"] = "red";
		playerMarker["offsetX"] = 0;
		playerMarker["offsetY"] = 20;
		playerMarker["font"] = "bold 20px Calibri,sans serif";
		playerMarkers.push_back(playerMarker);
	}
	return playerMarkers.dump(4);
}

void updatePlayerPos() {
}