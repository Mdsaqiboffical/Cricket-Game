let newArray = ["1 RUN", "2 RUN", "3 RUN", "BOUNDARY 4 RUN", "BOUNDARY 6 RUN", "OOOPS! YOU OUT😑", "CONGRATULATIONS YOU WIN🥳"]
let randomNumber = Math.random();
let num1 = Math.floor(randomNumber * 7)
alert(newArray[num1])