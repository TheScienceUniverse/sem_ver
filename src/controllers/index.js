const helper = require ("../utils");
const github = require ("../services/github");
const semver = require ("../services/semver");


global .raw_data = "";
global .commit_list = [];

async function handle_request (request_inputs) {
	let response = {};

	if (request_inputs .size == 0) {
		response ["status"] = 200;
		response ["type"] = "text/html";
		response ["data"] = `<body>
			<h2>Please use the following paramerets after default URL</h2>
			<h3>?task={generate}&user={Your GitHub Username}&repo={Repository Name}&branch={Branch Name}</h3>
		</body>`;
		return response;
	}

	if (!helper .validate_request_inputs (request_inputs)) {
		response ["status"] = 400;
		response ["type"] = "text/html";
		response ["data"] = `Invalid Request!
		<body>
			<h2>Please use the following paramerets after default URL</h2>
			<h3>?task={generate}&user={Your GitHub Username}&repo={Repository Name}&branch={Branch Name}</h3>
		</body>`;

		return response;
	}

	response ["status"] = 200;
	response ["type"] = "text/html";
	response ["data"] = "NO";

	// Need to send the following block to process_request function
	helper .clear_data_buffer ();	// USELESS for quick-refresh

	await github .get_git_data (request_inputs);
	commit_list = commit_list .reverse();

	parsed_commit_list = helper. parse_commit_list (commit_list);
	// console .log (parsed_commit_list);

	let sem_ver = semver .calculate_semantic_version (parsed_commit_list);

	response ["data"] = sem_ver.major
		+ "." + sem_ver.minor
		+ "." + sem_ver.patch
		+ "." + sem_ver.revision;

	return response;
}


module .exports = { handle_request };