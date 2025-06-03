import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom"

let useTrueFalseDisplay=()=>{

    let {categoryname}=useParams();
    let [quizData,setQuizData]=useState(null);
    let [quizCount,setQuizCount]=useState(0);
    let [score,setScore]=useState(0);
    let [nxtBtn,setNxtBtn]=useState('false');
    let [isAnswered,setIsAnswere]=useState(false);
    let [answered,setAnswered]=useState(null);
    let [clickedOption,setClickedOption]=useState(null);
    let [resetQuiz,setResetQuiz]=useState(0);


    // timerVariable
    let [time,setTime]=useState(15);
    let trackTime=useRef();
    let timeUp=useRef();


    let apiLinks={
         History:"https://opentdb.com/api.php?amount=10&category=23&type=boolean",
         Film:"https://opentdb.com/api.php?amount=10&category=11&type=boolean",
         Sports:"https://opentdb.com/api.php?amount=10&category=21&type=boolean",
         Animals:"https://opentdb.com/api.php?amount=10&category=27&type=boolean"
    }

    useEffect(()=>{
        dataFetcher();
    },[resetQuiz])

    useEffect(()=>{
        trackTime.current=setInterval(()=>{
            setTime(prev=>prev-1);
        },1000)

        timeUp.current=setTimeout(()=>{
            clearInterval(trackTime.current)
            setIsAnswere(true);
        },15000)

        return (()=>{
            clearInterval(trackTime.current)
            clearTimeout(timeUp.current);
        })

    },[quizCount])

    async function dataFetcher(){
        let rawData=await fetch(apiLinks[`${categoryname}`]);
        let data=await rawData.json();
        let alteredData=data.results.map((el)=>({...el,options:['True','False']}))
        console.log(alteredData);
        setQuizData(alteredData);
    }

    function handleClick(val,res){
        setClickedOption(val)
        setIsAnswere(true)
        setAnswered(res.correct_answer);
        clearInterval(trackTime.current)
        clearTimeout(timeUp.current);


        if(val==res.correct_answer){
   
            setScore(prev=>prev+1);
            setNxtBtn('true');            

        }
    }

    function handleNxtBtn(){
        if(!isAnswered) return ;
        setNxtBtn('false');
        setQuizCount(prev=>prev+1);
        setIsAnswere(false)
        setAnswered(null)
        setClickedOption(null)
        setTime(15);


    }

    return [quizData,quizCount,isAnswered,score,answered,
    clickedOption,handleClick,handleNxtBtn,setQuizData,
    setQuizCount,setIsAnswere,setScore,setResetQuiz,time,setTime,nxtBtn];
    // here nxtBtn is not used it used just to avoid warning symbols only
}

export default useTrueFalseDisplay;