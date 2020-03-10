import React, { Component } from 'react';
import './App.css';
import { Container, Header, } from "semantic-ui-react"; 
import Cards from './Cards';

class App extends Component {
  state = { 
    cards: [
      { id: 1, front: "Front 1", back: "Back 1", showingBack: false, },
      { id: 2, front: "Front 2", back: "Back 2", showingBack: false, },
      { id: 3, front: "Front 3", back: "Back 3", showingBack: false, },
    ],
  };

  render() {
    return (
      <Container>
        <Header as="h1">Flash Cards</Header>
        <br />
        <Cards cards={this.state.cards} />
        <br />
        {/* card form */}
      </Container>
    );
  }
}

export default App;