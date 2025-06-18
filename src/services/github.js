const request = require ("../models/request");
const gh_query = require ("../models/gh_query");
const github = require ("../api/github");


async function get_git_data (req_obj) {
	let query = gh_query .create_github_query (req_obj);
	let received = false;

	var page_no = 1;
	var path = query .path;

	// 100 records per page; increase page count if required
	const MAX_PAGE_COUNT = 10;

	raw_data = "";
	commit_list = [];

	do {
		received = false;
		query .path = path + page_no++;

		await github .fetch (query)
			.then ((value) => {
				received = (value .length > 5);
				raw_data += ", " + value .toString() .slice (1, -1);

				let list = (filter_data (value));
				commit_list .push (...list);
			})
			.catch ((error) => {
				console .log (error);
			})
			.finally (() => {
				console .log ("Fetched Page: ", page_no - 1);
			});
	} while (
		received
		&& MAX_PAGE_COUNT > page_no
	);

	raw_data = "[" + raw_data + "]";
}

function filter_data (data) {
	if (data .length < 6) {
		return [];
	}

	let list = JSON .parse (data) .map ((c) => {
		return {
			"hash" : c .sha
			, "message" : c.commit.message
		}
	});

	return list;
}


module. exports = { get_git_data }