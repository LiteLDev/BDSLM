#include "pch.h"
#include "conf.h"
#include "webChat.h"
#include "Nlohmann/json.hpp"
#include <httplib/httplib.h>


int startApiServer() {
	httplib::Server svr;

	svr.Get("/api/info", [](const httplib::Request&, httplib::Response& res) {
		res.set_content("BDSLM v0.3.2", "text/plain");
		});

	svr.Get("/api/getPlayerMarkers", [](const httplib::Request&, httplib::Response& res) {
		res.set_content(getPlayerMarkers(), "application/json");
		});

    if (config.enableWebChat) {
        svr.Get("/api/chat/fetch", [](const httplib::Request& req, httplib::Response& res) {

            if (req.params.contains("start")) {
                auto range = req.params.equal_range("start");
                int id = std::stoi(range.first->second);
                nlohmann::json j(webChatService.getMessages(id));
                res.set_content(j.dump(), "application/json");
                return;
            }
            nlohmann::json j(webChatService.msg_list_);
            res.set_content(j.dump(), "application/json");
            });
    }

	svr.listen("0.0.0.0", config.apiServerPort);
	return 0;
}