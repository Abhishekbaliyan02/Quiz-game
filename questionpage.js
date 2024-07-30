const questionnumber = document.querySelector(".questionnumber");
const showquestion = document.querySelector("#showquestion");
const option = document.querySelectorAll("#answerbtn");
let showscore = document.querySelector(".score");
let timing = document.querySelector(".timing");
let usrName = document.querySelector("#fname");
const usrrname = document.querySelector(".usrname");
const totime = document.querySelector(".totaltime");
const atmtquestion = document.querySelector(".atmtquestion");
const crrtquestion = document.querySelector(".crrtquestion");
const wrngquestion = document.querySelector(".wrngquestion");
const percentage = document.querySelector(".percentage");
const Home = document.querySelector("#Home");



let currquestion = 0;
let score = 0;
let timeleft = 10;
let totaltimetaken = 0;
let username = "";
let question =[];
let select;
let time;
let attmtquestion = 0;
let wrongquestion = 0;
let percent = 0;



const Allquestions = {
    HTML:[{
            question: "HTML stands for -",
            options: ["HighText Machine Language","HyperText and links Markup Language","HyperText Markup Language","None of these"],
            answer: 2,
        },

        {
            question: "Which of the following element is responsible for making the text bold in HTML?",
            options: ["<pre>","<a>","<b>","<br>"],
            answer: 2,
        },

        {
            question: "Which of the following tag is used to insert a line-break in HTML?",
            options: ["<pre>","<a>","<b>","<br>"],
            answer: 3,
        },
        {
            question: "Which of the following tag is used for inserting the largest heading in HTML?",
            options: ["<h3>","<h1>","<h5>","<h6>"],
            answer: 1,

        },
        {
            question: "Which character is used to represent the closing of a tag in HTML?",
            options: ["/","!",".",")"],
            answer: 0,
        }],

    CSS:[{
            question: "CSS stands for -",
            options: ["Cascade style sheets","Color and style sheets","Cascading style sheets","None of the above"],
            answer: 2,
        },
        {
            question : "The property in CSS used to change the background color of an element is -",
            options: ["bgcolor","color","background-color","All of the above"],
            answer: 2,
        },
        {
            question:  "The HTML attribute used to define the inline styles is -",
            options: ["style","styles","class","None of the above"],
            answer: 0,
        },
        {
            question: "The HTML attribute used to define the internal stylesheet is -",
            options: ["<style>","style","<link>","<script>"],
            answer: 0,
        },
        {
            question: "The CSS property used to make the text bold is -",
            options: ["font-weight : bold","weight: bold","font: bold","style: bold"],
            answer: 0,
        }],

    JAVASCRIPT:[{
                question: "Which type of JavaScript language is",
                options: ["Object-Oriented","Object-Based","Assembly-language","High-level"],
                answer: 1,
            },
            {
                question: "Which one of the following also known as Conditional Expression:",
                options: ["Alternative to if-else","Switch statement","If-then-else statement","immediate if"],
                answer: 3,
            },
            {
                question: "The 'function' and ' var' are known as:",
                options: ["Keywords","Data types","Declaration statements","Prototypes"],
                answer: 2,
            },
            {
                question: "Which one of the following is the correct way for calling the JavaScript code?",
                options: ["Preprocessor","Triggering Event","RMI","Function/Method"],
                answer: 3,
            },
            {
                question: "Which of the following type of a variable is volatile?",
                options: ["Mutable variable","Dynamic variable","Volatile variable","Immutable variable"],
                answer:0,
            }],

    REACTJS:[{
                question: "Which of the following is the correct name of React.js?",
                options: ["React","React.js","ReactJS","All of the above"],
                answer: 3,
            },
            {
                question: "What of the following is used in React.js to increase performance?",
                options : ["Original DOM","Virtual DOM","Both A and B","None of the above"],
                answer: 1,
            },
            {
                question: "Which of the following acts as the input of a class-based component?",
                options: ["Class","Factory","Render","Props"],
                answer: 3,
            },
            {
                question: "Which of the following keyword is used to create a class inheritance?",
                options: ["Create","Inherits","Extends","This"],
                answer: 2,
            },
                {
                    question: "What is the default port where webpack-server runs?",
                    options: ["3000","8080","3030","6060"],
                    answer: 1,
                }],

};



function StartQuiz(){
    username = usrName.value;
    const selected = document.querySelector('input[name="options"]:checked');
    if(username === ""){
        alert("Please enter your name");
        return;
       };
    if(selected != null) { 
        select = selected.value;
        question = Allquestions[select];
        
        document.querySelector("#start-container").style.display = "none";
        document.getElementById('quiz-container').style.display = "block";
        loadquestions();
         
    } 
    else { 
        alert("Please select the chapter"); 
    } 
}


function loadquestions(){
        if (currquestion < question.length) {
            document.querySelector(".questionnumber").innerText = `${currquestion+1}/5`;
            showquestion.innerText = question[currquestion].question;
            document.querySelector("#category").innerText = select;
            option.forEach((element , index) => {
                element.innerText = question[currquestion].options[index];
            });
            Timer();
        }
        else{
            EndQuiz();
}};



function Timer(){
    timeleft = 10;
    timing.innerText = timeleft;

    time =setInterval(() =>{
        timeleft--;
        timing.innerText = timeleft;
        if(timeleft <= 0){
            clearInterval(time);
            Nextquestion();
        }
    }, 1000);
}



function Selectoption(chooseindex) {
    clearInterval(time);
    if(chooseindex === question[currquestion].answer){
        score++;
        showscore.innerText = `Score: ${score}` ;
        attmtquestion++;
    }
    else{
        wrongquestion++;
        attmtquestion++;
    }
    totaltimetaken += (10 - timeleft);
    Nextquestion();

}

function Nextquestion(){
    currquestion++;
    StartQuiz();
}

function EndQuiz(){
    clearInterval(time);
    totaltimetaken += (10-timeleft);
    document.getElementById('quiz-container').style.display = "none";
    document.getElementById('result-container').style.display = "block";
    usrrname.innerText = `${username} your result is:`;
    totime.innerText = `Total Time Taken: ${totaltimetaken} Seconds`;
    atmtquestion.innerText = `Attempt : ${attmtquestion}`;
    crrtquestion.innerText = `Correct : ${score}`;
    wrngquestion.innerText = `Wrong : ${wrongquestion}`;
    percent = (score*5)*100/25;
    percentage.innerText = `Percentage : ${percent}%`;
}

function start(){
    score = 0;
    currquestion = 0;
    totaltimetaken = 0;
    attmtquestion = 0;
    wrongquestion = 0;
    percent = 0;
    time = 0;
    document.querySelector("#start-container").style.display = "none";
    document.getElementById('quiz-container').style.display = "block";
    document.getElementById('result-container').style.display = "none";
    loadquestions();

}


Home.addEventListener("click", (evt) =>{
    document.querySelector("#result-container").style.display = "none";
    document.getElementById('start-container').style.display = "block";
    usrName.value = "";

});

















