#include "pch.h"
#include <httplib/httplib.h>
#include "conf.h"

int startApiServer() {
	httplib::Server svr;

	svr.Get("/api/info", [](const httplib::Request&, httplib::Response& res) {
		res.set_content("BDSLM v0.3.2", "text/plain");
	});

	svr.Get("/api/getPlayerMarkers", [](const httplib::Request&, httplib::Response& res) {
		res.set_content(getPlayerMarkers(), "application/json");
	});

	svr.Post("/api/chat/fetch", [](const httplib::Request& req, httplib::Response& res) {
		
	});

	svr.listen("0.0.0.0", config.apiServerPort);
	return 0;
}