import { Link } from "react-router-dom";

const Home=()=>{
    return (
        <div className="bg-[#123458] w-[850px] h-[500px] rounded-2xl text-white flex flex-col justify-center items-center">
            <h1 className="text-6xl mb-[40px] font-bold">Hi! Welcome to Quizer</h1>
            <button className="text-4xl font-medium bg-green-500 p-4 rounded-xl"><Link to="/category">Let's Start</Link></button>
        </div>
    )
}

export default Home;