import React from 'react';
import FlashCard from './FlashCard';

const displayFlashCards = (cards, deleteCard) => {
  return cards.map(card => { 
    return <FlashCard card={card} deleteCard={deleteCard} />
  })
}

const List = (props) => {
  return(
    <div>
      { displayFlashCards(props.flashCards, props.deleteCard) }
    </div>
  )
}

export default List;
