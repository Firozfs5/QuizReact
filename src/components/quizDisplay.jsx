import useQuizDisplay from "../../utilities/useQuizDisplay";
import ScoreDisplay from "./score";


const QuizDisplay=()=>{

    let [quizData,quizCount,isAnswered,handleOptionClick,handleNext,score,setQuizData,setQuizCount,setIsAnswered,setScore,setResetQuiz]=useQuizDisplay();

    // return (quizData==null)?<h1>Loading</h1>:(
    //     <div className="bg-[#090814] w-[500px]  rounded-3xl p-4 text-white">{console.log(quizData)}
    //       <h2 className="text-lg font-medium">{(quizCount+1+". ")+quizData[0].question}</h2>

    //       <div className="bg-[#EFEFEF]  p-1 rounded mt-2">
    //           <div onClick={(e)=>{checkAnswer(e)}} className="my-1 p-1.5 rounded bg-black hover:bg-[#393E46] text-white">{quizData[quizCount].incorrect_answers[0]}</div>
    //           <div onClick={(e)=>{checkAnswer(e)}} className="my-1 p-1.5 rounded bg-black hover:bg-[#393E46] text-white">{quizData[quizCount].incorrect_answers[1]}</div>
    //           <div onClick={(e)=>{checkAnswer(e)}} className="my-1 p-1.5 rounded bg-black hover:bg-[#393E46] text-white">{quizData[quizCount].incorrect_answers[2]}</div>
    //           <div onClick={(e)=>{checkAnswer(e)}} className="my-1 p-1.5 rounded bg-black hover:bg-[#393E46] text-white">{quizData[quizCount].correct_answer}</div>
    //       </div>
    //     <button onClick={(e)=>handleNext(e)} className="bg-white text-black mt-2 px-1.5 font-medium rounded">Next</button>
    //     </div>
    // )

    if(quizData==null) return <h1>Loading...</h1>

    let current_quiz=quizData[quizCount];
    return   (quizCount>9)?<ScoreDisplay marks={[score,setQuizData,setQuizCount,setIsAnswered,setScore,setResetQuiz]}/>: (
         <div className="bg-[#090814] w-[350px]  rounded-3xl p-4 text-white">
          <h2 className="text-lg font-medium">{(quizCount+1+". ")+current_quiz.question}</h2>
            {  
                current_quiz.all_questions.map((answer,idx)=>{
                    let classes="my-1 p-1.5 rounded font-medium border-1 border-white bg-black hover:bg-[#393E46] text-white";
                    if(isAnswered){
                        if(answer==current_quiz.correct_answer){
                            classes+=" bg-green-500";
                        }else{
                            classes+=" bg-red-500"
                        }
                        classes+=" pointer-events-none"
                    }

                    return (
                        <div
                        key={idx}
                        className={classes}
                        onClick={()=>{handleOptionClick(answer,current_quiz.correct_answer)}}
                        >
                            {answer}
                        </div>
                    )
                })
            }
          <div className="flex justify-between">
            <div className="text-center  bg-white text-black mt-2 px-1.5 font-medium rounded h-8 w-16">{quizCount}/10</div>
          <button
            className="bg-white text-black mt-2 px-1.5 font-medium rounded h-8 w-16"
            // disabled={disable}
            onClick={handleNext}
          >
            Next
          </button>
          </div> 

        </div>
    )


}

export default QuizDisplay;