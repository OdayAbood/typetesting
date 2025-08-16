let words = ["play",'show' ,'crystal','watch','checkingWord','numberOFWords',
    'rightWords','wrongWordsDom','myChosedaWord','numberOFTries','startGame',
    'document','function','andomIndex'
 ];
let startGame = document.querySelector("button");
let myWords = document.querySelector(".words");0
let time = document.querySelector(".container .score .time span");
let checkingWord = document.querySelector(".container input");
let numberOFWords = document.querySelector(".container .score p span:last-child");
let numberOFTries = document.querySelector(".container .score p span:first-child");
numberOFWords.innerHTML = words.length; 
let wrongWords = ["Wrong words"];
let rightWords = ["Right words"];
let wrongWordsDom = document.querySelector(".wrong");
let rightWordsDom = document.querySelector(".right");
let myChosedaWord = document.querySelector(".container h2");
let myLevel = document.querySelectorAll("li");
let nameOfLevel = document.querySelector(".condition span:first-child");
let numberOfSecon = document.querySelector(".condition span:last-child");

const level = {
    easy : {name : "Easy" , second : "6"},
    normal : {name : "Normal" , second : "4"},
    hard : {name : "Hard" , second : "2"}
}
let chosedTime = level.normal.second;
 time.innerHTML =chosedTime;
 let classNamel ; 

myLevel.forEach((e)=>{
    e.onclick  = function(){
    classNamel = e.className;
        myLevel.forEach((e)=>{
        e.classList.remove("active");
        })
        e.classList.add("active");
    }
})

startGame.onclick = function(){
    if(classNamel ==="hard"){
        nameOfLevel.innerHTML =`[${level.hard.name}]`;
        numberOfSecon.innerHTML = `[${level.hard.second}]`;
        chosedTime = level.hard.second;
    }
    else if (classNamel ==="easy"){
        nameOfLevel.innerHTML =`[${level.easy.name}]`;
        numberOfSecon.innerHTML = `[${level.easy.second}]`;
        chosedTime = level.easy.second;
    }
    else{
        nameOfLevel.innerHTML =`[${level.normal.name}]`;
        numberOfSecon.innerHTML = `[${level.normal.second}]`;
        chosedTime = level.normal.second;
    }

    this.remove();

    checkingWord.focus();


    genWord();

    timer();

}


function genWord(){

    myWords.innerHTML = "";
    let randomIndex = Math.floor(Math.random() * words.length);

    if(words.length > 0){

        myChosedaWord.innerHTML = words[randomIndex].toUpperCase();

    words.splice(randomIndex,1);

    for(let i = 0 ; i < words.length ; i++){
        let div = document.createElement("div");
        div.classList.add("word");
        let text = document.createTextNode(`${words[i]}`);
        div.appendChild(text);
        myWords.style.height = "auto";
        myWords.appendChild(div);
    }

}
}
function timer (){
    time.innerHTML = chosedTime;
    if(numberOFTries.innerHTML === numberOFWords.innerHTML ){
        startGame.style.pointerEvents = "none" ;
        for(let i =0 ; i <wrongWords.length;i++){
            let div = document.createElement("div");
            div.classList.add("word");
            let text = document.createTextNode(`${wrongWords[i]}`);
            div.appendChild(text);
            wrongWordsDom.appendChild(div);
        }
        for(let i =0 ; i <rightWords.length;i++){
            let div = document.createElement("div");
            div.classList.add("word");
            let text = document.createTextNode(`${rightWords[i]}`);
            div.appendChild(text);
            rightWordsDom.appendChild(div);
        }
    }
    else {
    let countDown = setInterval(()=>{
        time.innerHTML--;
        if(time.innerHTML === '0'){
            clearInterval(countDown);
            checkWord();
            genWord();
            timer();
            checkingWord.value = "";
        }
    },1000)
}
}

function checkWord(){
    numberOFTries.innerHTML++;
    if(checkingWord.value.toUpperCase() === myChosedaWord.innerHTML){
        rightWords = [...rightWords,myChosedaWord.innerHTML];
    }
    else wrongWords = [...wrongWords,myChosedaWord.innerHTML];
}