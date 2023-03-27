// Code your solutions in this file
//const array = ["Guadalupe", "Ollie", "Aki"]

/*function writeCards(array){
    let newArray = []

    for (let i = 0; i < array.length; i++ ){
    newArray.push(`Thank you, ${array[i]}, for the wonderful surprise gift!,`)}
    return newArray

}writeCards(["Guadalupe", "Ollie", "Aki"])/*
/*const writeCards = (arr,event) => {
    const messages = []
    for(let i = 0; i < arr.length;i++) {
        
           const greetingMessage = `Thank you, ${arr[i]}, for the wonderful ${event} gift!`
           messages.push(greetingMessage)
           return messages
    }
   

}
writeCards(["Charlie", "Samip", "Ali"], "birthday")*/


   

function writeCards( namesArray, event ) {
    let thankYouCards = []
    for ( let i = 0; i < namesArray.length; i++ ) {
      thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
    }
  return thankYouCards
  }



  function countDown(b){let i = 0 
    while (b >= i){
        console.log(i)
        i++
    }
    return b

  }
  
