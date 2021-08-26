const setWords = [
    "My name is Syed Muhemin ALi and iam a Mern Stack Developer",
    "Hove you are having fun this is a simple game",
    "If you want the source code then you go to the my github profile",
    "Check My Application Here!"
]
let msg = document.getElementById("msg");
let typeWords = document.getElementById("mywords");
let btn = document.getElementById('btn');
let starttime, endtime;

playGame = () => {
    let randomNumber = Math.floor(Math.random() * setWords.length);
    msg.innerText = setWords[randomNumber];
    let date = new Date();
    starttime = date.getTime();
    btn.innerText = "Done";
}

const endPlay = () => {
    let date = new Date();
    endtime = date.getTime();
    let totaltime = ((endtime - starttime) / 1000);
    console.log(totaltime);

    let totalString = typeWords.value;
    let wordCount = wordCounter(totalString);
    let speed = Math.round((wordCount / totaltime) * 60);
    let finalMsg = `You type total at ${speed} Words per minutes`;

    finalMsg += compareWords(msg.innerText, totalString)
    msg.innerText = finalMsg;
    msg.style.color = 'blue';
    msg.style.fontStyle = 'italic';
}

const compareWords = (str1, str2) => {
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let count = 0;

    words1.forEach(function (item, index) {
        if (item == words2[index]) {
            count++;
        }
    })

    let errorWords = (words1.length - count);
    return (`${count} correct out of ${words1.length} words and the total number of error are ${errorWords} .`)
}

const wordCounter = (str) => {
    let response = str.split(" ").length;
    console.log(response);
    return response;
}

btn.addEventListener('click', function () {
    console.log(this);
    if (this.innerText == 'Start') {
        typeWords.disabled = false;
        playGame()
    } else if (this.innerText == "Done") {
        typeWords.disabled = true;
        btn.innerText = 'Start'
        endPlay()
    }
})