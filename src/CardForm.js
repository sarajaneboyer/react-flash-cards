import React from 'react';
import { Form, } from 'semantic-ui-react';

class CardForm extends React.Component{
  state = { front: '', back: '', };

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log('submit clicked')
    this.props.addCard(this.state);
    this.setState( {front: '', back: '', });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, });
  };


  render() {
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            label="Front"
            name="front"
            value={this.state.front}
            onChange={this.handleChange}
            />

          <Form.Input
            label="Back"
            name="back"
            value={this.state.back}
            onChange={this.handleChange}
            />
            <Form.Button color="green">Submit New Card</Form.Button>
        </Form.Group>
      </Form>
    )
  };
};


export default CardForm;