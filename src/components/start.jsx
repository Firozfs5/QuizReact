import { Outlet } from "react-router-dom"

const Start=()=>{

    return(
        <div className="bg-[#9FB3DF] h-[100vh] flex items-center justify-center">
            <Outlet />
        </div>
    )
}

export default Start;