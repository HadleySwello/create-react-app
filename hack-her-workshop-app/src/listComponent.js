import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { Col, Container } from 'react-bootstrap';

class ListComponent extends Component {
  static propTypes = {
    listData: PropTypes.array.isRequired,
  };

  state = {};

  generateListBody = () => {
    return this.props.listData.map((book, index) => {
      return <li key={index}>{book}</li>;
    });
  };

  render() {
    return (
      <div className="List-Component">
        <Container>
          <Col md={4}></Col>
          <Col>
            <h3>Books I've Read</h3>
            <ul className="bookList">{this.generateListBody()}</ul>
          </Col>
          <Col md={4}></Col>
        </Container>
      </div>
    );
  }
}

export default ListComponent;
