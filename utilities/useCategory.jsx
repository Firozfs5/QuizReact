import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useCategory=()=>{
     let [topic,setTopic]=useState("History");
    const navigate=useNavigate();

    function handleSubmitBtn(e){
        e.preventDefault();
        if(topic){
            navigate(`/${topic}`);
        }
    }

    return [topic,setTopic,handleSubmitBtn];
}

export default useCategory;