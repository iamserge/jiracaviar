import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import { Sprints } from '../../api/jiras/jiras.js';
import WorkUnits from '../../api/workUnits/workUnits.js';
import IndexJumbo from '../components/IndexJumbo.js';
import Loading from '../components/Loading.js';
import { _ } from 'meteor/underscore';



const composer = (params, onData) => {
    if (typeof  Meteor.user() != 'undefined' && Meteor.user() != null) {
        const sprintSubscription = Meteor.subscribe('sprints');
        const userSubscription = Meteor.subscribe("userData");
        
        if (sprintSubscription.ready() && userSubscription.ready()) {
            const workUnitsSubscription = Meteor.subscribe('workUnits.view', Meteor.users.findOne(Meteor.userId()).activeWorkUnit);
            if (workUnitsSubscription.ready()) {
              const sprints = Sprints.find().fetch();
              console.log(WorkUnits.findOne().startTime);
              const messages = {
                  username: Meteor.user().username,
                  activeSprint: _.filter(Sprints.find().fetch()[0], (sprint) => {return sprint.state == 'ACTIVE'})[0].name,
                  workStartTime: WorkUnits.findOne().startTime
              }
              
              onData(null, { messages });
            }
            
        }
    }
};

export default composeWithTracker(composer, Loading)(IndexJumbo);
