const questions= [
    {
       question: "What is the capital of Uttar Pradesh?",
       answers: [
        { text: "Kanpur", correct: false},
        { text: "Lucknow", correct: true},
        { text: "Gorakhpur", correct: false},
        { text: "Jhansi", correct: false},
       ]
    },
    {
       question: "What is the capital of india?",
       answers: [
        { text: "Mumbai", correct: false},
        { text: "Bihar", correct: false},
        { text: "Agra", correct: false},
        { text: " New Delhi", correct: true},
       ]
    },
    {
       question: "Who is the prime minister of india?",
       answers: [
        { text: "Narendra Modi", correct: true},
        { text: "Rahul Ghandhi", correct: false},
        { text: "Yogi adityanath", correct: false},
        { text: "Shivraj Singh", correct: false},
       ]
    },
    {
       question: "What is the national fruit?",
       answers: [
        { text: "Mango", correct: true},
        { text: "Banana", correct: false},
        { text: "Guava", correct: false},
        { text: "Papaya", correct: false},
       ]
    }
    
];
 const questionElement= document.querySelector("#question");
 const answerButtons=  document.querySelector("#answer-buttons");
 const nextButton= document.querySelector("#next-btn");

 let currentQuestionIndex= 0;
 let score=0;

 function startQuiz(){
    let currentQuestionIndex= 0;
    let score=0;
    nextButton.innerHTML="Next";
    showQuestion();
 }
 function showQuestion(){
   resetState();
   let currentQuestion= questions[currentQuestionIndex]
   let questionNo= currentQuestionIndex+1;
   questionElement.innerHTML= questionNo+ ". " + currentQuestion.question;

   currentQuestion.answers.forEach(answer => {
        const button= document.createElement("button")
        button.innerHTML=answer.text;
        button.classList.add("btn")
        answerButtons.appendChild(button)
        if(answer.correct){
         button.dataset.correct= answer.correct;
        }
        button.addEventListener("click",selectAnswer)
      
   });
 }
 function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
      answerButtons.removeChild(answerButtons.firstChild);
    }
    }

   function selectAnswer(e){   
      const selectBtn= e.target
      const iscorrect= selectBtn.dataset.correct==="true"
      if(iscorrect){
         selectBtn.classList.add("correct")
         score++;
      }
      else{
         selectBtn.classList.add("incorrect")
      }
      Array.from(answerButtons.children).forEach(button =>{
         if(button.dataset.correct==="true"){
            button.classList.add("correct")
         }
         button.disabled= true;
      });
      nextButton.style.display= "block"
   }

    function showScore(){
      resetState();
      questionElement.innerHTML=`You Scored ${score} out of ${questions.length} !`
      nextButton.innerHTML="play Again";
      nextButton.style.display="block"
    }




   function handleNextButton(){    //next button se next question ke liye
      currentQuestionIndex++;
      if(currentQuestionIndex< questions.length){
         showQuestion()
      }
      else{
         showScore()
      }
   }

  nextButton.addEventListener("click", ()=>{
   if(currentQuestionIndex < questions.length){
      handleNextButton();
   }
   else{
      startQuiz();
   }
  })



  startQuiz();