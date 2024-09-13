const min = 1;
const max = 100;
const randome = Math.floor(Math.random() * ( max - min)) + min;

while (true){
    
    let numberRandome = prompt('Enter random number from 1 to 100 :');
        numberRandome = Number(numberRandome);

   if (numberRandome <= 0 || numberRandome >= 101){

      alert ('error! Pleas, enter random number from 1 to 100');

   } else if (randome > numberRandome){

      alert ('this number is greater than yours');

   } else if (randome < numberRandome){

      alert ('this number is less than yours');

   } else if(randome === numberRandome){

      alert ('You are win!');
      
      break;

   } 
}