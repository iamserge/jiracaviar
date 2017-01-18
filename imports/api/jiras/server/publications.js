import JiraApi from 'jira-client';
import { _ } from 'meteor/underscore';
import { Random } from 'meteor/random';

const jira = new JiraApi({
  protocol: 'https',
  host: 'jira.salmon.com',
  username: 'sradkevics',
  password: 'Monday07',
  apiVersion: '2',
  strictSSL: true
});


Meteor.publish('userJiras', function(username) {
    const self = this;
    check(username, String);

    jira.searchJira('resolution = Unresolved AND Sprint = 109 AND assignee in (' + username + ') order by updated DESC')
    	.then(jiras => {
		  	_.each(jiras.issues, jira => {
          //console.log(jira);
    
		  		self.added('jiras', Random.id(), jira);
          //console.log(jira);
		  	});
		  	self.ready();
		});
});


Meteor.publish('sprints', function() {
    const self = this;
    const a = 'e';
    const sprintQuery = {
      pathname: 'sprintquery/19',
      query: 'includeFutureSprints=true&includeHistoricSprints=false'
    }
    jira.listSprints(19)
      .then(sprints => {
        _.each(sprints, sprint => {
          self.added('sprints', Random.id(), sprint);
        });
        self.ready();
    });
});

