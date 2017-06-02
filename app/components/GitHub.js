var React = require('react');
var IssuesList = require('IssuesList');

var GitHub = React.createClass({
	render: function() {
		return (
			<IssuesList />
		);
	}
});

module.exports = GitHub;