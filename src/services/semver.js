//const vrsn = require ("../models/version.js");

function calculate_semantic_version (commit_list) {
	let sem_ver = {
		"major" : 0
		, "minor" : 0
		, "patch" : 0
		, "revision" : 0
	};

	//let sem_ver = vrsn .create_new_version ();

	for (let i = 0; i < commit_list .length; i++) {
		let commit = commit_list [i];

		switch (commit .type) {
			case "rel":
				sem_ver .major ++;
				sem_ver .minor = 0;
				sem_ver .patch = 0;
				sem_ver .revision = 0;
				break;
			case "feat":
				sem_ver .minor ++;
				sem_ver .patch = 0;
				sem_ver .revision = 0;
				break;
			case "fix":
			case "docs":
				sem_ver .patch ++;
				sem_ver .revision = 0;
				break;
			case "Initial commit":
				sem_ver .major = 0;
				sem_ver .minor = 1;
				sem_ver .patch = 0;
				sem_ver .revision = 0;
				break;
			case "chore":
			case "misc":
				sem_ver .revision ++;
				break;
			default:
				sem_ver .revision ++;
				break;
		}
	}

	return sem_ver;
}


module. exports = { calculate_semantic_version }