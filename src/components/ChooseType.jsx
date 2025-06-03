import React from 'react'
import { Link } from 'react-router-dom'

const ChooseType = () => {
  return (
    <div className="bg-[#000000] w-[300px] h-64 rounded-2xl text-white flex flex-col justify-center items-center">
      <h1 className="text-3xl mb-[10px] font-bold">Choose The Type</h1>
      <button className="text-2xl w-22 h-12 mt-3 font-medium bg-green-500 p-1 rounded-xl"><Link to="/Quiz/category">Quiz</Link></button>
      <button className="text-2xl w-36 h-12 mt-3 font-medium bg-green-500 p-1 rounded-xl"><Link to="/true-false/category">True/False</Link></button>
    </div>
  )
}

export default ChooseType
