const fishImages = [

"image/fish1.png",
"image/fish2.png",
"image/fish3.png",
"image/fish4.png",
"image/fish5.png",
"image/fish6.png",
"image/fish7.png",
"image/fish8.png",
"image/fish9.png",
"image/fish10.png",
"image/fish11.png",
"image/fish12.png"

]

const backImage = "image/back.png"

let cards = [...fishImages, ...fishImages]

cards.sort(() => Math.random() - 0.5)

const board = document.getElementById("game-board")

let firstCard = null
let secondCard = null
let lockBoard = false

cards.forEach(src => {

const card = document.createElement("div")
card.classList.add("card")

card.innerHTML = `

<div class="card-inner">

<div class="card-front">
<img src="${src}">
</div>

<div class="card-back">
<img src="${backImage}">
</div>

</div>

`

card.addEventListener("click", () => flipCard(card, src))

board.appendChild(card)

})

function flipCard(card, src){

if(lockBoard) return
if(card.classList.contains("flipped")) return

card.classList.add("flipped")

if(!firstCard){

firstCard = {card, src}
return

}

secondCard = {card, src}

checkMatch()

}

function checkMatch(){

if(firstCard.src === secondCard.src){

firstCard = null
secondCard = null

}else{

lockBoard = true

setTimeout(()=>{

firstCard.card.classList.remove("flipped")
secondCard.card.classList.remove("flipped")

firstCard = null
secondCard = null

lockBoard = false

},1000)

}


}
