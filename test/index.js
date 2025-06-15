const request = require ("../src/models/request");
const semver = require ("sem_ver");


let obj = {
	"task" : "generate"
	, "username" : "SayanShankhari"
	, "account" : "TheScienceUniverse"
	, "repository" : "DSA"
	, "branch" : "master"
};

let req_obj = request .create_new_request ();
Object.assign (req_obj, obj);
console .log (req_obj);

async function test (req_obj) {
	let version = await semver .gen_sem_ver (req_obj);
	console .log ("Version:", version);
}

test (req_obj);