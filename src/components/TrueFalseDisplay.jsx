import React from 'react'
import useTrueFalseDisplay from '../../utilities/useTrueFalseDisplay'
import Loading from './Loader';
import ScoreDisplay from './score';

const TrueFalseDisplay = () => {

  let [quizData,quizCount,isAnswered,score,answered,clickedOption,
    handleClick,handleNxtBtn,setQuizData,setQuizCount,setIsAnswere,
    setScore,setResetQuiz,time,setTime]=useTrueFalseDisplay();
  
            
  
  if(quizData==null) return <Loading />

  
  return (quizCount==10)?(<ScoreDisplay marks={[score,setQuizData,setQuizCount,setIsAnswere,setScore,setResetQuiz,setTime]} />):(

  <div className="flex flex-col justify-center items-center">
        
      <div className="mb-3 bg-white p-2 rounded-lg  text-center text-lg font-medium">Timer:{time}</div>
     
    <div className='bg-black text-white p-3 text-center rounded-2xl w-84'>

      <h1 className='font-medium text-xl '>{quizCount+1}. {quizData[quizCount].question}</h1>

      <div className='flex  flex-col m-2 p-2 align-center'>


        {
          (quizData[quizCount].options).map((el,index)=>{
            
            let classes="my-1 p-1.5 rounded font-medium border-1 border-white bg-black text-white" ;

            if(isAnswered){
              // console.log(isAnswered,"hii")
              
              if(el==clickedOption){
                
                if(el==answered){
                  classes+=" bg-green-500"
                }else{
                  classes+=" bg-red-500"
                }


              }

                if(el==quizData[quizCount].correct_answer){
                  // console.log("hiii222");
                  
                  classes+=" bg-green-500"
                }

              classes+=" pointer-events-none"
            }


              return (
             <div key={index} onClick={()=>{handleClick(el,quizData[quizCount])}}
             className={classes}>{el}</div>
            )
          })
        }
      </div>
    
    <div className='flex justify-end'>
      <button className="bg-white text-black  px-1.5 font-medium rounded h-8 w-16 mr-4" 
      // disable={!nxtBtn}
      onClick={handleNxtBtn}>Next</button>
    </div>
    </div>

    </div>
  )
}

export default TrueFalseDisplay
