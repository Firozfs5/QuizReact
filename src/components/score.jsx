const ScoreDisplay=({marks})=>{
    let [score,setQuizData,setQuizCount,setIsAnswered,setScore,setResetQuiz]=marks;
    function restart(){ 
        setResetQuiz(prev=>prev+1)
        setQuizData(null);
        setQuizCount(0);
        setIsAnswered(false);
        setScore(0);
       
    }

    return (
        <div className="bg-[#090814] w-[300px]  h-35 flex flex-col items-center justify-center  rounded-3xl p-4 text-white">
            <h1 className="text-lg font-medium">your score is : {score}/10</h1>
            <button onClick={restart} 
            className="bg-white text-black p-1 rounded-lg mt-5 font-medium"
            >Restart</button>
        </div>
    )
}

export default ScoreDisplay;