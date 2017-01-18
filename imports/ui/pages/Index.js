import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Row, Col, Button } from 'react-bootstrap';
import JirasList from '../containers/JirasList.js';
import IndexJumbo from '../containers/IndexJumbo.js';
/*const Index = () => (
  <div className="Index">
    
  </div>
);*/

const Index = () => (
  <div className="homepageContainer">
    <IndexJumbo />
  	<div className="Jiras">
      <Row>
        <Col xs={ 12 }>
          <div className="page-header clearfix">
            <h4 className="pull-left">JIRAS assinged to you</h4>
          </div>
          <JirasList />
        </Col>
      </Row>
    </div>
  </div>
)

export default Index;
