import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const useCategory=()=>{
     let [topic,setTopic]=useState("History");
    //  operation
     let {formatType}=useParams();
    //  running
     const navigate=useNavigate();

    function handleSubmitBtn(e){
        e.preventDefault();
        // if(topic){
        if(formatType=="Quiz"){
            navigate(`/quiz/${topic}`);
        }//below are altered
        else{
            navigate(`/true-false/${topic}`);
        }
    }

    return [topic,setTopic,handleSubmitBtn];
}

export default useCategory;