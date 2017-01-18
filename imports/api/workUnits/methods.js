import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import WorkUnits from './workUnits';


export const startWorkUnit = new ValidatedMethod({
  name: 'workUnit.start',
  validate: new SimpleSchema({
    userId: { type: String},
    startTime: { type: Date}
  }).validator(),
  run(document) {
    const documentId = WorkUnits.insert(document);
    Meteor.users.update(Meteor.userId(), {$set: {activeWorkUnit: documentId}});
    return documentId;
  },
});
/*
export const removeDocument = new ValidatedMethod({
  name: 'documents.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Documents.remove(_id);
  },
});
*/