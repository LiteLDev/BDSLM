#include "pch.h"
#include <httplib/httplib.h>


int startApiServer() {
	httplib::Server svr;

	svr.Get("/api/info", [](const httplib::Request&, httplib::Response& res) {
		res.set_content("BDSLM v0.3", "text/plain");
		});

	svr.Get("/api/getPlayerMarkers", [](const httplib::Request&, httplib::Response& res) {
		res.set_content(getPlayerMarkers(), "application/json");
		});

	svr.listen("0.0.0.0", 5001);
	return 0;
}