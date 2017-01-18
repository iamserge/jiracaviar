import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import { Jiras } from '../../api/jiras/jiras.js';
import JirasList from '../components/JirasList.js';
import Loading from '../components/Loading.js';



const composer = (params, onData) => {
  if (typeof  Meteor.user() != 'undefined' && Meteor.user() != null) {
	  const subscription = Meteor.subscribe('userJiras', Meteor.user().username);
	  console.log(subscription.ready());
	  if (subscription.ready()) {
	  	
	    const jiras = Jiras.find().fetch();
	    console.log(jiras);
	    onData(null, { jiras });
	  }
	}
};

export default composeWithTracker(composer, Loading)(JirasList);
