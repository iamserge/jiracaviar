import React from 'react';
import { ListGroup, ListGroupItem, Alert, Jumbotron, Button} from 'react-bootstrap';
import { handleWorkStart } from '../../modules/work-units.js';

const renderWorkButtons = (workStartTime) => {
  console.log(workStartTime.length);
  if (workStartTime) {

  } else {
    return <Button bsStyle="primary" bsSize="large" onClick= { handleWorkStart } >Start work</Button>;
  }
}

const IndexJumbo = ({ messages }) => (
    <Jumbotron className="text-center">
        <h2 style ={ { fontWeight: '200' } }>Hello, { messages.username }</h2>
        <p style={ { fontSize: '26px', marginBottom: '10px', fontWeight: 'bold' } }> { messages.activeSprint } </p>
        <p> is current active sprint </p>
        { renderWorkButtons (messages.workStartTime )}
        
    </Jumbotron>
);


export default IndexJumbo;
