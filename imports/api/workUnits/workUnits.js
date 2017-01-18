import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

const WorkUnits = new Mongo.Collection('WorkUnits');
export default WorkUnits;

WorkUnits.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

WorkUnits.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

WorkUnits.schema = new SimpleSchema({
  userId: {
    type: String,
    label: 'Id of the user',
  },

  startTime: {
    type: Date,
    label: 'Time when works have started',
  },
  finishTime: {
    type: Date,
    label: 'Date when work have finished ',
    optional: true
  },
});

WorkUnits.attachSchema(WorkUnits.schema);


