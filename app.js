let userNum = document.querySelector("input");
let button = document.querySelector("button");
let userChance = document.querySelector('.userChance')
let generateNumBetween_1_2 = Math.ceil(Math.random() * 20);
let alertMessage = document.querySelector(".msg");
let numRightGuess= document.querySelector('.guesss')
let htmlBody=document.querySelector('.main')
let gameOver=document.querySelector('.game')
let chance= 0
console.log(generateNumBetween_1_2);

button.addEventListener("click", () => {
 

  if (userNum.value == generateNumBetween_1_2) {
    alertMessage.textContent = "your guess is correct";
    numRightGuess.style.fontSize='25px'
    numRightGuess.innerHTML= `${userNum.value}-${generateNumBetween_1_2}`
    
    
}
   else if (userNum.value > generateNumBetween_1_2){
    alertMessage.textContent = "your guess is big";
    chance++    
    // console.log(chance);
    if(chance>5){
     htmlBody.innerHTML=''
     gameOver.style.display='block'     
    }else{
    userChance.innerHTML = chance
}
}
    else if (userNum.value < generateNumBetween_1_2){
    alertMessage.textContent = "your guess is small";
    chance++
    if(chance>5){
        htmlBody.innerHTML=''
        gameOver.style.display='block'     
       }else{
       userChance.innerHTML=chance
   }
}

});
