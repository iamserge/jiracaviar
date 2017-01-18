import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import WorkUnits from '../workUnits';

Meteor.publish('workUnits.list', () => WorkUnits.find());

Meteor.publish('workUnits.view', (_id) => {
  check(_id, String);
  return WorkUnits.find(_id);
});

Meteor.publish("userData", function () {
    return Meteor.users.find({_id: this.userId})
});