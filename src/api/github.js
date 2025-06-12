const https = require ("node:https");


function fetch (query) {
	const promise = new Promise ((resolve, reject) => {
		https .get (query, (response) => {
			let data = "";

			if (response .statusCode == 200) {
				data = "";
				chunk = "";
			}

			response .on ("data", (chunk) => {
				data += chunk .toString();
			});

			response .on ("end", () => {
				resolve (data);
			});
		}) .on ("error", (error) => {
			reject ("Error:", error);
		}) .end ();
	});

	return promise;
}


module .exports = { fetch };