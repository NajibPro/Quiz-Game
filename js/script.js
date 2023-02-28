let arrQ = [
    'what is the biggest country in the world: \r',
    '1. Russia\r',
    '2. USA\r',
    '3. India\r',
    '1',
    'what is the country that have the biggest population in Africa: \r',
    '1. Algeria\r',
    '2. Nigeria\r',
    '3. Democratique Republic of the Congo\r',
    '2',
    'what is the color that has all the colors inside it: \r',
    '1. blue\r',
    '2. green\r',
    '3. black\r',
    '3',
    'what is the best month to plant: \r',
    '1. Mars\r',
    '2. April\r',
    '3. June\r',
    '1',
    'how many soura is in the Quran:\r',
    '1. 150\r',
    '2. 114\r',
    '3. 97\r',
    '2',
    'What is the capital of Austrilia: \r',
    '1.Canberra\r',
    '2.Sydney\r',
    '3.Melbourne\r',
    '1',
    'which one of this countries are not in the Europien Union: \r',
    '1. Suidine\r',
    '2. Poland\r',
    '3. Norway\r',
    '3',
    'how many planets exists in our solar system: \r',
    '1. 7\r',
    '2. 8\r',
    '3. 9\r',
    '2',
    'how many bones their is in an adult humain body: \r',
    '1. 189\r',
    '2. 197\r',
    '3. 206\r',
    '3',
    'when WW1 ends: \r',
    '1. 1939\r',
    '2. 1925\r',
    '3. 1918\r',
    '3',
    'how many spoken languages their is in the world(approximately): \r',
    '1. 6000\r',
    '2. 7000\r',
    '3. 8000\r',
    '2',
    'Which five colors make up the Olympic rings: \r',
    '1. blue, orange, black, green and red.\r',
    '2. blue, yellow, white, green and red.\r',
    '3. blue, yellow, black, green and red.\r',
    '3',
    'who wrote Zikola Land book: \r',
    '1. Amr Abdel Hamid\r',
    '2. Ahmed Khaled Mustafa\r',
    '3. Agatha Christie\r',
    '1',
    'when was the first human landing on the moon:\r',
    '1. 1972\r',
    '2. 1981\r',
    '3. 1969\r',
    '3',
    'what is the biggest planet in our solar system:\r',
    '1. Venus\r',
    '2. Jupyter\r',
    '3. Uranus\r',
    '2',
    'how much is the weight of the bacteria that live in an adult human body:\r',
    '1. 2mg\r',
    '2. 2g\r',
    '3. 2kg\r',
    '3',
    'how much water your body need in a day(average): \r',
    '1. 0.5L\r',
    '2. 1L\r',
    '3. 1.5L\r',
    '3',
    'what is the chemical symbol for gold:\r',
    '1. Au\r',
    '2. Go\r',
    '3. Cu\r',
    '1',
    'what is the nationality of the famous phisicist Newton:\r',
    '1. German\r',
    '2. English\r',
    '3. French\r',
    '2',
    'what is the highest mountin in the world:\r',
    '1. everest\r',
    '2. Tahat Acour\r',
    '3. kelemendjarou\r',
    '1'
  ];

let startBtn = document.querySelector('.begin');
let colorBtn = document.getElementsByClassName('color-start');
let rulesWindow = document.getElementById('popup-window');
let quitRulesBtn = document.querySelector('.quit');
let startQ = document.querySelector('.start');
let continueBtn = document.querySelector('.continueOff');
let QWindow = document.getElementById("questions");
let exitQ = document.querySelector('.exit');
let timeLine = document.getElementById('time-line');
let time = document.querySelector('#t');
let QCounter = document.getElementById('counter');
let question = document.querySelector('.q1');
let option = document.getElementsByClassName('q');
let scoreDisplay = document.getElementsByClassName('s');
let okBtn = document.getElementsByClassName('ok');
let resultWindow = document.getElementsByClassName('result');
let timeLineRunner;
let color = '#';
let T = 15;
let t;
let correct;
let counter = 2;
let score = 0;
let arr = '1234567890abcdef';
let alreadyUsedQuestions;

startBtn.onclick = () =>{
    alreadyUsedQuestions = []
    rulesWindow.classList.add('popup-window-visible');
}
for(let i = 0; i < colorBtn.length; i++){
    colorBtn[i].onclick = () => {
        for(let i = 0; i < 6; i++){
            color += arr[Math.floor(arr.length * Math.random())];
        }
        document.documentElement.style.setProperty('--primaryColor', color);
        document.documentElement.style.setProperty('--otherColor', color);
        color = '#';
    }
}


quitRulesBtn.onclick = () => {
    rulesWindow.classList.remove('popup-window-visible');
}

startQ.onclick = () => {
    giveMeQ();
    restartTimer();
QWindow.classList.add('questions-visible');
timeLine.classList.add('time-line-visible');
runTimeLine();
}


exitQ.onclick = () => {
    stopTimer();
    stopTimeLine();
    counter = 2;
    QCounter.innerHTML = 1;
    option = document.getElementsByClassName('q');
    rulesWindow.classList.remove('popup-window-visible');
    QWindow.classList.remove('questions-visible');
    timeLine.classList.remove('time-line-visible');
    continueBtn.classList.remove('continue');
    for(let i = 0; i < option.length; i++){
        option[i].classList.remove('false');
        option[i].classList.remove('correct');
    }
    option = null;
}

continueBtn.onclick = () => {
    option = document.getElementsByClassName('q');
    stopTimeLine(); 
    for(let i = 0; i < option.length; i++){
        option[i].classList.remove('correct');
    }
    if(counter <= 5){
        QCounter.innerHTML = counter++;
        giveMeQ();
        restartTimer();
        timeLine.classList.add('time-line-visible');
        runTimeLine();
        continueBtn.classList.remove('continue');
    }else{
        stopTimer();
        counter = 2;
        QCounter.innerHTML = 1;
        rulesWindow.classList.remove('popup-window-visible');
        QWindow.classList.remove('questions-visible');
        timeLine.classList.remove('time-line-visible');
        continueBtn.classList.remove('continue');
        if(score < 3){
            resultWindow[1].classList.add('visible');
        }else{
            resultWindow[0].classList.add('visible');
        }
        score = 0;
    }
}

for(let i = 0; i < option.length; i++){
    option[i].onclick = () => {
        stopTimer();
        stopTimeLine();
        option[correct - 1].classList.add('correct');
        if(i != correct - 1){
            option[i].classList.add('false');
        }else{
            score++;
            console.log(score);
            for(let i = 0; i < 2; i++){
                scoreDisplay[i].innerHTML = score;
            }
        }
        continueBtn.classList.add('continue');
        continueBtn = document.querySelector('.continue');
        option = null;
    }
}

function giveMeQ(){
    let c = Math.floor((Math.random() * arrQ.length)/5) * 5;
    while(alreadyUsedQuestions.includes(c)){
        c = Math.floor((Math.random() * arrQ.length)/5) * 5;
    }
    alreadyUsedQuestions.push(c);
    question.innerText = arrQ[c];
    option = document.getElementsByClassName('q');
    for(let i = 0; i < option.length; i++){
        option[i].classList.remove('false');
        option[i].innerText = arrQ[c+1+i];
    }

    correct = Number(arrQ[c+4]);
}

for(let i = 0; i < 2; i++){
    okBtn[i].onclick = () => {
        resultWindow[i].classList.remove('visible');
        resultWindow[i].classList.add('hidden');
    }
}

function restartTimer(){
    T = 15;
    time.innerHTML = T;
    t = setInterval(() => {
        T--;
        time.innerHTML = T;
        if(T <= 0){
            checkTime();
            clearInterval(t);
        }
    }, 1000);
}

function stopTimer(){
    clearInterval(t);
}

function checkTime(){
    if(T <= 0){
        option[correct - 1].classList.add('correct');
        continueBtn.classList.add('continue');
        continueBtn = document.querySelector('.continue');
        option = null;
    }
}

function runTimeLine(){
    let w = 0;
    if(w < 450){
        timeLineRunner = setInterval(() => {
            timeLine.style.width = w + 'px';
            w += 0.3;
        },10);
    }else{
        stopTimeLine();
    }
}

function stopTimeLine(){
    clearInterval(timeLineRunner);
}