//creates an app which picks a random domino for the user

//javaScript to beable to PICK any domino element


//anything sort of array-like into an array, use array.from() to convert into an array
//NodeList -> array.from() -> array

function getRandomNumber (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let dominoList = document.querySelectorAll(".domino-list > li")
console.log(dominoList)

let firstIndex = 0
let lastIndex = dominoList.length -1

//random number between firstIndex and lastIndex
let randomIndex = getRandomNumber(firstIndex, lastIndex)
let randomDominoElement = dominoList[randomIndex]
console.log(randomDominoElement)

randomDominoElement.classList.add("selected")