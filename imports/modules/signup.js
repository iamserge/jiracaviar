/* eslint-disable no-undef */

import { browserHistory } from 'react-router';
import { Accounts } from 'meteor/accounts-base';
import { Bert } from 'meteor/themeteorchef:bert';
//import { getJiraUser } from '../api/jiras/methods.js'
import './validation.js';

let component;

const getUserData = () => ({
  username: document.querySelector('[name="jiraUsername"]').value,
  password: document.querySelector('[name="password"]').value
});

const signup = () => {
  const user = getUserData();
  /*getJiraUser.call(user.username, (error, response) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      alert(response);
    }
  });*/
  Accounts.createUser(user, (error) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      browserHistory.push('/');
      Bert.alert('Welcome!', 'success');
    }
  });
};

const validate = () => {
  $(component.signupForm).validate({
    rules: {
     
      jiraUsername: {
        required: true
      },
      password: {
        required: true,
        minlength: 6,
      },
    },
    messages: {

      jiraUsername: {
        required: 'Need jira username'
      },
      password: {
        required: 'Need a password here.',
        minlength: 'Use at least six characters, please.',
      },
    },
    submitHandler() { signup(); },
  });
};

export default function handleSignup(options) {
  component = options.component;
  validate();
}
