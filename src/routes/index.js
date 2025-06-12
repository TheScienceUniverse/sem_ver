const controller = require ("../controllers/");

async function get (req_obj = Request) {
	let response = {};

	switch (req_obj .task) {
		case "generate":
			response = await controller .handle_request (req_obj);
			break;
		default:
			response ["status"] = 501;
			response ["type"] = "text/html";
			response ["data"] = "Page Not Found";
			break;
	}

	return response;
}

module .exports = { get }