const ScoreDisplay=({marks})=>{
    let [score,setQuizData,setQuizCount,setIsAnswered,setScore,setDisable,setResetQuiz]=marks;
    function restart(){ 
        setResetQuiz(prev=>prev+1)
        setQuizData(null);
        setQuizCount(0);
        setIsAnswered(false);
        setScore(0);
        setDisable(true);
       
    }

    return (
        <div className="bg-[#090814] w-[500px]  rounded-3xl p-4 text-white">
            <h1 className="text-lg font-medium">your score is : {score}</h1>
            <button onClick={restart}>Restart</button>
        </div>
    )
}

export default ScoreDisplay;