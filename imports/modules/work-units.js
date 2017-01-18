/* eslint-disable no-undef */

import { browserHistory } from 'react-router';
import { Bert } from 'meteor/themeteorchef:bert';
import { startWorkUnit } from '../api/workUnits/methods.js';
import moment from 'moment';
let component;

export const handleWorkStart = () => {
  const date = new Date();
  const workUnit = {
    userId: Meteor.user().username,
    startTime: date

  };

  
  startWorkUnit.call(workUnit, (error, response) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      Bert.alert('You have started work at <strong>' + workUnit.startTime.toLocaleTimeString() + '</strong>', 'success');
    }
  });
};
/*
const validate = () => {
  $(component.documentEditorForm).validate({
    rules: {
      title: {
        required: true,
      },
      body: {
        required: true,
      },
    },
    messages: {
      title: {
        required: 'Need a title in here, Seuss.',
      },
      body: {
        required: 'This thneeds a body, please.',
      },
    },
    submitHandler() { handleUpsert(); },
  });
};
*/

