class Request {
	constructor (task = "", username = "", account = "", repository = "", branch = "") {
		this .task = task;
		this .username = username;
		this .account = account;
		this .repository = repository;
		this .branch = branch;
	}
}

function create_new_request (task = "", username = "", account = "", repository = "", branch = "") {
	return new Request (task, username, account, repository, branch);
}

module .exports = { create_new_request }