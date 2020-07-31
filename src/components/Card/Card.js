import React from 'react'
import './style.css'
function Card({handleClick, solved, id , disabled, type,  flipped, height, width}) {
    return (
        <div
        className={`flip-container ${flipped ? 'flipped' : ''}`}
        style={{width , height}}
        onClick={() => disabled ? null : handleClick(id)}
        >
            <div 
            className='flipper'>
                <img 
                style={{
                    height,width
                }}
                className={flipped ? 'front' : 'back'}
                src={flipped || solved ? `./imgs/${type}` : `/imgs/back.jpeg`}
                />
                

            </div>
            
        </div>
    )
}

export default Card
