import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// const useQuizDisplay=()=>{
//     const apiLinks={
//          History:"https://opentdb.com/api.php?amount=10&category=23&type=multiple",
//          Film:"https://opentdb.com/api.php?amount=10&category=11&type=multiple",
//          Sports:"https://opentdb.com/api.php?amount=10&category=21&type=multiple",
//          Animals:"https://opentdb.com/api.php?amount=10&category=27&type=multiple"
//     }

//     let {categoryname}=useParams();
//     let [quizData,setQuizData]=useState(null);
//     let [quizCount,setQuizCount]=useState(0);
//     // let [score,setScore]=useState[0];

//     useEffect(()=>{
//         apiDataFetcher();
//     },[categoryname])

//     async function apiDataFetcher(){
//         let rawData=await fetch(apiLinks[`${categoryname}`])
//         let data=await rawData.json();
//         setQuizData(data.results);
        
//     }

//     function checkAnswer(e){
//         // console.log(e.target.parentElement);
//         // e.target.parentElement.classList.add("pointer-events-none")

//         if(e.target.innerText===quizData[quizCount].correct_answer){
//             e.target.classList.add("bg-green-600")
//         }
//         else{
//             e.target.classList.add("bg-red-600")
//         }

//     }

//     function handleNext(e){
        
//     }

//     return [quizData,quizCount,setQuizCount,checkAnswer,handleNext];
// }

const useQuizDisplay=()=>{
    let [resetQuiz,setResetQuiz]=useState(0);
    let {categoryname}=useParams();
    let [quizData,setQuizData]=useState(null);
    let [quizCount,setQuizCount]=useState(0);
    let [isAnswered,setIsAnswered]=useState(false);
    let [score,setScore]=useState(0);
    let [disable,setDisable]=useState(true);
    
    
    const apiLinks={
         History:"https://opentdb.com/api.php?amount=10&category=23&type=multiple",
         Film:"https://opentdb.com/api.php?amount=10&category=11&type=multiple",
         Sports:"https://opentdb.com/api.php?amount=10&category=21&type=multiple",
         Animals:"https://opentdb.com/api.php?amount=10&category=27&type=multiple"
    }

    useEffect(()=>{
        dataFetcher()
    },[categoryname,resetQuiz])

    async function dataFetcher(){
        let rawData=await fetch(apiLinks[categoryname]);
        let data=await rawData.json();
        let processed=data.results.map((el)=>({...el,all_questions: shuffleArray([...el.incorrect_answers,el.correct_answer])}))
        setQuizData(processed);
        console.log(processed);
        
    }

    function shuffleArray(arr) {
        const array = [...arr]; 
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function handleOptionClick(answer,solution){
        setIsAnswered(true);
        setDisable(false);
        if(answer==solution){setScore(prev => prev+1)} 
        console.log(score);
        
    }

    function handleNext(){
        setDisable(true);
        setQuizCount(prev=>prev+1);
        setIsAnswered(false);
    }

    return [quizData,quizCount,isAnswered,disable,handleOptionClick,handleNext,score,setQuizData,setQuizCount,setIsAnswered,setScore,setDisable,setResetQuiz];
}

export default useQuizDisplay;