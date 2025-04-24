import { useState } from "react"
const Login=()=>{
    let [status,setStatus]=useState("Login")
    return(
        <div>
            <button className="log-btn" onClick={
                ()=>{
                    setStatus(status=="Login"?"LogOut":"Login")
                }
            }>
                {status}
            </button>
        </div>
    )
}

export default Login;