import React from 'react';
import { browserHistory } from 'react-router';
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap';

const handleNav = (_id) => {
  browserHistory.push(`/jiras/${_id}`);
}

const JirasList = ({ jiras }) => (
  jiras.length > 0 ? <ListGroup className="JirasList">
    {jiras.map(({ _id, fields }) => (
      <ListGroupItem key={ _id } onClick={ () => handleNav(_id) }>
        { fields.summary }
      </ListGroupItem>
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">You have no jiras in this sprint, relax.</Alert>
);

JirasList.propTypes = {
  jiras: React.PropTypes.array,
};

export default JirasList;
