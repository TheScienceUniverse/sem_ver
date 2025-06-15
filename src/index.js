const router = require ("./routes/");
const request = require ("./models/request");


async function gen_sem_ver (req_obj) {
	let response = await router .get (req_obj);
	console .log (response);
	return response .data ?? "N/A";
}


module .exports = { gen_sem_ver }