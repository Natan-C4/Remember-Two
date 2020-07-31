function shuffle(arr) {
    const _arr = arr.slice(0)
    for(let i = 0 ; i < arr.length - 1; i++){
        let randomIndex = Math.floor(Math.random() * (i + 1))
        let temp = _arr[i]
        _arr[i] = _arr[randomIndex]
        _arr[randomIndex]  = temp
    }
    return _arr
}

export default function initCards() {
   let id = 0
   const cards = ['pingvin.jpg','nyancat.jpg','dices.jpeg', 'music.jpg','silver.jpeg',
'smile.jpeg','space.jpeg','google.png'].reduce((acc , type) => {
    acc.push({
        id: id++,
        type
    })
    acc.push({
        id: id++,
        type
    })
    return acc
},[])
return shuffle(cards)
}




