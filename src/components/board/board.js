import React from 'react'
import Card from '../Card/Card'
import './style.css'
function Board({disabled,solved, size , cards,flipped,handleClick}) {
    return (
        <div className='board'>
            {
                cards.map(card => (
                <Card 
                    key={card.id}
                    id={card.id}
                    type={card.type}
                    width={size/4.5}
                    height={size/4.5}
                    flipped={flipped.includes(card.id)}
                    handleClick = {handleClick}
                    disabled={disabled || solved.includes(card.id) }
                    solved={solved.includes(card.id)}

                />))
            }
            
        </div>
    )
}

export default Board
