import React from 'react';
import { Table, Button, } from 'semantic-ui-react';


const Card = ({ id, front, back, showingBack, }) => {
  return (
    <Table.Row key={`card-${id}`}>
      <Table.Cell>{front}</Table.Cell>
      <Table.Cell>{back}</Table.Cell>
      <Table.Cell>
        <Button color="red">Delete</Button>
        <Button color="blue">Edit</Button>
      </Table.Cell>
    </Table.Row>
  );
};



export default Card;