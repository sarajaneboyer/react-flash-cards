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

  getId = () => {
    return Math.floor((1 + Math.random()) * 10000);
  };

  addCard = (cardData) => {
    let card = { id: this.getId(), ...cardData, };
    this.setState({ cards: [card, ...this.state.cards], });
  };


  deleteCard = (id) => {
    console.log('delete clicked');
    const cards = this.state.cards.filter( card => {
      if (card.id !== id)
        return card
    });
    this.setState({ cards: [...cards], });
  };

  render() {
    return (
      <Container style={{ paddingTop: "25px" }}>
        <Header as="h1">Flash Cards</Header>
        <br />
        <CardForm addCard={this.addCard} deleteCard={this.deleteCard} />
        <br />
        <Cards cards={this.state.cards} />
      </Container>
    )
  }
}

export default App;