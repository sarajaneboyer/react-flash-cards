import React from 'react';
import { Table, Button, } from 'semantic-ui-react';
import Card from './Card';

const Cards = props => (
  <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Front of Card</Table.HeaderCell>
        <Table.HeaderCell>Back of Card</Table.HeaderCell>
        <Table.HeaderCell>Delete or Edit Card</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {props.cards.map(card => (
          <Card key={card.id} {...card} />
        ))
      };
    </Table.Body>
  </Table>
);

export default Cards;