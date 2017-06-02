var axios = require('axios');

var GitHubListIssues = {
	getIssuesFromUserRepo: function() {
		return axios.get('https://api.github.com/repos/gabrielhsp/consulta-api-issues/issues')
	}
};

module.exports = GitHubListIssues;