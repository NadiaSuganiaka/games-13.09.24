const number = prompt ('Enter number:');
let i;
i = 1;

while (i <= number){
    if(i % 3 === 0){

        alert ('Fizz');

    }else if(i % 5 === 0){

        alert ('Buzz');
        
    }else{

        alert (i);
        
    }
    
    i++;

}