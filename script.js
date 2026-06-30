const questions= [
    {
       question: "What is the capital of Uttar Pradesh?"
       answers: [
        { text: "Kanpur", correct: false},
        { text: "Lucknow", correct: true},
        { text: "Gorakhpur", correct: false},
        { text: "Jhansi", correct: false},
       ]
    },
    {
       question: "What is the capital of india?"
       answers: [
        { text: "Mumbai", correct: false},
        { text: "Bihar", correct: false},
        { text: "Agra", correct: false},
        { text: "Delhi", correct: true},
       ]
    },
    {
       question: "Who is the prime minister of india?"
       answers: [
        { text: "Narendra Modi", correct: true},
        { text: "Rahul Ghandhi", correct: false},
        { text: "Yogi adityanath", correct: false},
        { text: "Shivraj Singh", correct: false},
       ]
    },
    {
       question: "?"
       answers: [
        { text: "Mumbai", correct: false},
        { text: "Bihar", correct: false},
        { text: "Agra", correct: false},
        { text: "Delhi", correct: true},
       ]
    }
    
];
 const questionElement= document.querySelector("#question");
 const answerButton=  document.querySelector("#answer-buttons");
 const nextButton= document.querySelector("#next-btn");

 let currentQuestionIndex= 0;
 let score=0;

 function startQuiz(){
    let currentQuestionIndex= 0;
    let score=0;
    nextButton.innerHTML="next";
    showQuestion();
 }