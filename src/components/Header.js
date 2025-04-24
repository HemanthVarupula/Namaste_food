import { LOGO_URl } from "../utils/constants";
import Login from "./Login";
export const Header=()=>{
    return(
        <div className="header">
        <div ><img className="logo"src={LOGO_URl}/></div>
        <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact US</li>
            <li>Cart</li>
           <li> <Login/></li>
        </ul>
        </div>
        </div>
    )
}