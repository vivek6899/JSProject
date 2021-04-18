const quizQ=[
    {
        question: "Q1: What is JS?",
        a: "Scripting Lang",
        b: "programming Lang",
        c: "game Lang",
        d: "JavaScribe",
        ans: "ans1"//ans:"a"
    },
    {
        question: "Q2: What is HTML?",
        a:"Programing ",
        b:"Desing Lang",
        c:"Tag Lang",
        d:"Scripting",
        ans:"ans4"//ans:"d"
    },
    {
        question:"Q3: What is full form of HTML?",
        a:"hello text markup Lang",
        b:"hybrid type markup Lang",
        c:"hyper text markup lang",
        d:"none of this",
        ans:"ans3"//ans:"c"
    },
    {
        question:"Q4: What is mobile?",
        a:"Toy",
        b:"Gadget",
        c:"charger",
        d:"tablet",
        ans:"ans2" // ans:"b"
    },
    {
        question:"Q5: What is Scripting lang?",
        a:" Prog using class",
        b:"prog using interface",
        c:"prog using specific Lang",
        d:"prog using tags",
        ans:"ans4"
        //ans:"d"
    }
];


const question = document.querySelector('.question_print');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit =document.querySelector('#submit');


const loadfun=()=>{
    for(i=0;i<quizQ.length;i++){
        var obj=quizQ[i];
        for(var qprint in quizQ){
            parsed += qprint +":"+quizQ[qprint]+ "\n";
            alert(qprint);
            alert(quizQ[qprint])
        }
    }

   // console.log(quizQ[0].question);
    //document.writeln(quizQ[0].question);
    question.innerText = quizQ[0].question;
     //question.innerhtml=quizQ.question;
   
    let questionCount=0;
   
        const questionList=quiz[questionCount];
        
            question.innerText=questionList.question;
           
            option1.innerText=questionList.a;
            option2.innerText=questionList.b;
            option3.innerText=questionList.c;
            option4.innerText=questionList.d; 
}

loadfun();