import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Category from "./components/category";
import Home from "./components/home";
import Start from "./components/start";
import QuizDisplay from './components/quizDisplay'

let appRouter=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Start />} >
      <Route index element={<Home />} />
      <Route path="category" element={<Category />} />
      <Route path=":categoryname" element={<QuizDisplay />} /> 
    </Route>
  )
)

let App=()=>{
   
  return (  
      <RouterProvider router={appRouter} />
  )
}

export default App;
