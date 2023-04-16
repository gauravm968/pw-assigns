// Random number generator with delay and progress indication

function randomNumWithDelay(second){
    let miliSecond = second * 1000;
    let timeLeft = second;

    //progress message
    let countInterval = setInterval(() => {
        console.log(`Generating random number in ${timeLeft} second interval.`);
        timeLeft--;
    },1000);

    setTimeout(() =>{
        clearInterval(countInterval);
        let randomNumber = Math.floor(Math.random()*100)+1;
        console.log(`Random number generated : ${randomNumber}`);
    },miliSecond);
}

randomNumWithDelay(3);