import { Outlet } from "react-router-dom"

const Start=()=>{

    return(
        <div className="bg-[#9FB3DF] h-[100vh] flex justify-center items-center">
            <Outlet />
        </div>
    )
}

export default Start;