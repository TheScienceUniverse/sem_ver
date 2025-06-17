const semver = require ("@sayan_shankhari/sem_ver");


let req_obj = semver .create_new_request (
	task = "generate"
	, username = "SayanShankhari"
	, account = "TheScienceUniverse"
	, repository = "DSA"
	, branch = "master"
);

console .log (req_obj);

async function test (req_obj) {
	let version = await semver .gen_sem_ver (req_obj);
	console .log ("Version:", version);
}

test (req_obj);