import React, { Component } from 'react';
import List from './List';
import './App.css';

class App extends Component {
  state = { flashCards: [
    {id: 1, front: 'JavaScript extension to write XML/HTML', back: 'JSX' },
    {id: 2, front: 'JavaScript library created by Jordan Walke', back: 'React' },
    {id: 3, front: 'performs a DIFF agains the DOM', back: 'Virtual DOM' },
    {id: 4, front: 'Front 4', back: 'Back 4' },
    {id: 5, front: 'Front 5', back: 'Back 5' },
    {id: 6, front: 'Front 6', back: 'Back 6' }
  ] }

  deleteFlashCard = (id) => {
    const flashCards = this.state.flashCards.filter(anything => anything.id !== id)
    this.setState({ flashCards });
  }

  render() {
    return (
      <div>
        <h2>Flash Cards</h2>
        <List
        flashCards={this.state.flashCards}
        deleteCard={this.deleteFlashCard}
        />
      </div>
    );
  }
}

export default App;
