let arr=['snake','water','gun'];
        alert("you are playing snake water and gun game,")
        let round=1;
        let userGuesses=0;
        let computerGuesses=0;
        while(round<=3) {         
          let userInput=prompt("enter your guess");
            let computerInput=arr[Math.floor(Math.random()*3)];
            if((userInput=='snake' && computerInput=='water') || (userInput=='gun' && computerInput=='snake') || (userInput=='water' && computerInput=='gun')){
                userGuesses++;
            }
            else{
                computerGuesses++;
            }
            round++;
        }

        if(computerGuesses>userGuesses)
        {
            alert("Ohh no You lose the computer scores more than you");
        }
        else{
            alert("yeh thats my boy tu hi jeetega pata hi tha mujhe");
        }
          
        