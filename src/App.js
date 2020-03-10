import React, { Component } from 'react';
import './App.css';
import { Container, Header, } from "semantic-ui-react"; 
import Cards from './Cards';
import CardForm from './CardForm';

class App extends Component {
  state = { 
    cards: [
      { id: 1, front: "Front 1", back: "Back 1", },
      { id: 2, front: "Front 2", back: "Back 2", },
      { id: 3, front: "Front 3", back: "Back 3", },
    ],
  };

  render() {
    return (
      <Container style={{ paddingTop: "25px" }}>
        <Header as="h1">Flash Cards</Header>
        <br />
        <CardForm />
        <br />
        <Cards cards={this.state.cards} />
      </Container>
    );
  }
}

export default App;