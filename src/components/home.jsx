import { Link } from "react-router-dom";

const Home=()=>{
    return (
        <div className="bg-[#000000] w-[300px] h-64 rounded-2xl text-white flex flex-col justify-center items-center">
            <h1 className="text-3xl mb-[10px] font-bold">Hi!</h1>
            <h1 className="text-2xl mb-[30px] font-bold">Welcome to Quizer</h1>
            <button className="text-2xl font-medium bg-green-500 p-3 rounded-xl"><Link to="/type">Let's Start</Link></button>
        </div>
    )
}

export default Home;