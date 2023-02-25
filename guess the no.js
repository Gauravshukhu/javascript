
let a = Math.floor(((Math.random()*100)))
    let input = prompt('Guess the number')
  
            while(a !== input){
                if(a == input){
                    break;
                } 
                else if(input>a){
                    alert("You have guessed greater number")
                    input = prompt('Guess the number')
                }
                else{
                   alert("You have guessed lower number")
                   input = prompt('Guess the number')
                }
           
                
            }
            alert("Guessed Number is correct")