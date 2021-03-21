
let textP = document.querySelector("#tap")

textP.innerText = "Escape 120 is an interactive horror text adventure game played in the terminal.\n A mysterious disease has turned everyone around you in to undead canibals.\n You come across a dead soldier and through his walkie talkie you discover a cure is possible. \nWith a bit of guidence from Sergeant Pheonix you must make your way through 3 floors\n finding important items and avoiding being bitten."

let snowP = document.querySelector("#smp")

snowP.innerText = "Snowman is a simple word guessing game. A word is randomly chosen from the\n games extensive dictionary and it's up to you to guess the letters.\n You get 10 wrong guesses before you lose and the word is revealed. The game\n lets you know the letters you've guessed so far and how many wrong\n guesses you have left."


let factP = document.querySelector("#fact")
let factB = document.querySelector("#newF")

let factA = ["I have a chinchilla named Nube.", "I am Dominican/Guatemalan American.", "I am a first generation American.", "Baking and cooking are one of my favorite ways to destress.", "I love spicy food!", "I am a foodie and an adventurous eater.", "My hair has been just about every color of the rainbow.", "I love any type of horror or psychological thriller show/movie/anime.", "Stephen King is my favorite author.", "I listen to a very wide range of music, from Metalcore to Melodic Dubstep.", "I can eat Japanese or Korean food for every meal.", "I don't drink alcohol.", "My boyfriend is in a industrial hardcore band called Null. (He's also a FS Dev.)", "I've played over 200 hrs of Animal Crossing: New Horizons"]

factB.addEventListener("click" , e => {
    e.preventDefault()
    factP.textContent = " "
    let ranNum = Math.floor(Math.random() * 14)
    factP.textContent = factA[ranNum]
})