function rockGame(user){
    let number = Math.random()
    number = number * 100;
    let ai;
    // console.log(user)
    
    if(number<33){
        ai="rock"
    }
    else if(number>33 && number<66){
        ai="paper"
    }
    else{
        ai="scissor"
    }

    if(user=="paper" && ai=="paper"){
        alert("Computer has choosen " +ai +"  Game drawn")
    }
    else if(user=="paper" && ai=="scissor"){
        alert("Computer has choosen " +ai +" Computer won")
    }
    else if(user=="paper" && ai=="rock"){
        alert("Computer has choosen " +ai +" You won")
    }

    if(user=="rock" && ai=="rock"){
        alert("Computer has choosen " +ai +" Game drawn")
    }
    else if(user=="rock" && ai=="paper"){
        alert("Computer has choosen " +ai +" Computer won")
    }
    else if(user=="rock" && ai=="scissor"){
        alert("Computer has choosen " +ai +" You won")
    }

    if(user=="scissor" && ai=="scissor"){
        alert("Computer has choosen " +ai +" Game drawn")
    }
    else if(user=="scissor" && ai=="rock"){
        alert("Computer has choosen " +ai +" Computer won")
    }
    else if(user=="scissor" && ai=="paper"){
        alert("Computer has choosen " +ai +" You won")
    }


}