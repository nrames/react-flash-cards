import React from 'react';

class CardForm extends React.Component {
  state = { name: '', nextId: 1 }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, nextId } = this.state;
    const card = { name, id: nextId }
    this.setState({ name: '', nextId: nextId + 1 });
    this.props.addCard(card);
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }

  render() {
    const { name } = this.state;

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={name} onChange={this.handleChange} />
        </form>
      </div>  
    )
  }
}

export default CardForm;