function create_github_query (req_obj) {
	return {
		"hostname" : "api.github.com"
		, "path" : "/repos/" + req_obj .account + "/" + req_obj .repository + "/commits?branch=" + req_obj .branch + "&per_page=100&page="
		, "method": 'GET'
		, "headers" : {
			"authority": "api.github.com"
			, "accept": "application/vnd.github+json"
			, "accept-language": "en-US,en;q=0.9"
			, "Authorization": "Bearer " + process .env .GITHUB_ACCESS_TOKEN
			, "User-Agent" : req_obj .username
			, "Content-Type" : "application/json"
			, "sec-fetch-mode": "cors"
			, "sec-fetch-site": "cross-site"
			, "sec-ch-ua": '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"'
			, "sec-fetch-dest": "empty"
			, 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
			, 'x-github-api-version': '2022-11-28'
		} //'Mozilla/5.0'
	};
}


module .exports = { create_github_query }