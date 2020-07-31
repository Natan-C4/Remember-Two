import React, {useState , useEffect} from 'react';
import Board from './components/board/board'
import initCards from './init'
function App() {

  const resizeBoard = () => {
    setSize(Math.min(
      document.documentElement.clientHeight,
      document.documentElement.clientWidth
    ))
  }
  const[cards,setCards] = useState([])
  const [flipped , setFlipped] = useState([])
  const [size ,setSize] = useState(400)
  const [solved, setSolved] = useState([])
  const [disabled , setDisabled] = useState(false)


  useEffect(() => {
    resizeBoard()
    setCards(initCards())
  },[])
  
  useEffect(() => {
    const resizeListener = window.addEventListener('resize' , resizeBoard)

    return () => window.removeEventListener('resize', resizeListener)
  })

  const handleClick = (id) => {
    setDisabled(true)
    if(flipped.length === 0){
      setFlipped([id])
      setDisabled(false)
    }
    else{
      if (sameCardClick(id)) {
    setDisabled(false);
    return;
}
      if(sameCardClick(flipped,id)) return
      setFlipped([flipped[0],id])
      if(isMatch(id)){
        setSolved([...solved,flipped[0],id])
        resetCards()
      }else{
        setTimeout(resetCards, 1000)
      }
    }
    
  }

  

  const resetCards = () => {
    setFlipped([])
    setDisabled(false)
  }

  
  const sameCardClick = (id) => flipped.includes(id)

  const isMatch = (id) => {
  const clickedCard = cards.find(card => card.id == id )
  const flippedCard = cards.find(card => flipped[0] == card.id )
  return flippedCard.type == clickedCard.type
  }
  return (

    <Board
      size={size}
      cards={cards}
      flipped={flipped}
      handleClick={handleClick}
      disabled={disabled}
      solved={solved}
      />

  );
}

export default App;
