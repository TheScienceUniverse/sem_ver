function if_valid (property, value) {
	if ("task" == property) {
		return ["generate"] .includes (value);
	}

	return (value != undefined && value != null);
}

function re_format_request_inputs (request_inputs) {
	return {
		"task" : request_inputs .get ("task")
		, "user" : request_inputs .get ("user")
		, "repo" : request_inputs .get ("repo")
		, "path" : request_inputs .get ("path")
		, "branch" : request_inputs .get ("branch")
	}
}

function validate_request_inputs (req_obj) {
	if (req_obj .size > 0) {
		return false;
	}

	let decision = false;

	decision = if_valid ("task", req_obj .task)
		&& if_valid ("username", req_obj .username)
		&& if_valid ("account", req_obj .account)
		&& if_valid ("repository", req_obj .repository)
		&& if_valid ("branch", req_obj .branch);

	return decision;
}

function clear_data_buffer () {
	raw_data = "";
}

function itemize_commit_list (raw_data) {
	return JSON .parse (raw_data);
}

function parse_commit_list (commit_list) {
	var message_list = [];

	class Commit {
		constructor (type = "", scope = "", gist = "") {
			this .type = type;
			this .scope = scope;
			this .gist = gist;
		}
	}

	for (var i = 0; i < commit_list.length; i++) {
		let message_header = commit_list [i] .message .split ('\n') [0];

		let commit = new Commit ();

		if (message_header .includes (':')) {
			commit .type = message_header .split (':') [0] .split (' ') [0] .toLowerCase ();
			commit .scope = message_header .split (':') [0] .split (' ') [1] ?.slice (1, -1);
			commit .gist = message_header .split (':') [1] .substring (1);
		} else if ("initial commit" == message_header .toLowerCase()) {
			commit .type = "init";
			commit .scope = "N/A";
			commit .gist = message_header;
		} else {
			commit .type = "any";
			commit .scope = "N/A";
			commit .gist = message_header;
		}

		message_list .push (commit);
	}

	return message_list;
}


module. exports = { if_valid, re_format_request_inputs, validate_request_inputs, clear_data_buffer, itemize_commit_list, parse_commit_list };