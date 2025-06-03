import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Category from "./components/category";
import Home from "./components/home";
import Start from "./components/start";
import QuizDisplay from './components/quizDisplay'
import ChooseType from "./components/ChooseType";
import TrueFalseDisplay from "./components/TrueFalseDisplay"
 
let appRouter=createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element={<Start />} >
      <Route path="/" element={<Home />} />
      <Route path="type" element={<ChooseType />} />
      {/* used to choose types of question */}
      <Route path=":formatType/category" element={<Category />} />

      {/* used to display the quiz or true/false */}
      <Route path="quiz/:categoryname" element={<QuizDisplay />} /> 
      <Route path="true-false/:categoryname" element={<TrueFalseDisplay />} />
    </Route>

  )
)

let App=()=>{
   
  return (  
      <RouterProvider router={appRouter} />
  )
}

export default App;
