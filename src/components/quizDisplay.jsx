import useQuizDisplay from "../../utilities/useQuizDisplay";
import Loading from "./Loader";
import ScoreDisplay from "./score";


const QuizDisplay=()=>{

    let [quizData,quizCount,isAnswered,handleOptionClick,handleNext,score,setQuizData,setQuizCount,
        setIsAnswered,setScore,setResetQuiz,optionClicked,time,setTime]=useQuizDisplay();
{/* <h1>Loading...</h1> */}
    if(quizData==null) return <Loading />

    let current_quiz=quizData[quizCount];

    return   (quizCount>9)?(<ScoreDisplay marks={[score,setQuizData,setQuizCount,setIsAnswered,setScore,setResetQuiz,setTime]}/>):
        (
          <div className="flex flex-col justify-center items-center">
            <div className="mb-3 bg-white p-2 rounded-lg  text-center text-lg font-medium">Timer:{time}</div>

            <div className="bg-[#090814] w-[350px]  rounded-3xl p-4 text-white">
          <h2 className="text-lg font-medium">{(quizCount+1+". ")+current_quiz.question}</h2>
            {  
                current_quiz.all_questions.map((answer,idx)=>{
                    let classes="my-1 p-1.5 rounded font-medium border-1 border-white bg-black text-white";

                      if(isAnswered){
                          if(answer==optionClicked){
                            if(answer==current_quiz.correct_answer){
                              classes+=" bg-green-600"
                            }else{
                              classes+=" bg-red-600"
                            }
                          }
                        classes+=" pointer-events-none"
                      }

                      if(isAnswered){
                        if(answer==current_quiz.correct_answer){
                          classes+=" bg-green-600";
                          classes+=" pointer-events-none"
                        }
                      }

                      if(isAnswered){
                          classes+=" pointer-events-none"
                      }


                    return (
                        <div
                        key={idx}
                        className={classes}
                        onClick={(e)=>{handleOptionClick(answer,current_quiz.correct_answer,e)}}
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
          </div>  
        )


}

export default QuizDisplay;