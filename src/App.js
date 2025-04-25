import React from "react";
import ReactDom from "react-dom/client";
import { Header } from "./components/Header";
import Body from "./components/Body"
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
const root=ReactDom.createRoot(document.getElementById("root"));
import Error from "./components/Error";
import Restaurentmenu from "./components/Restaurentmenu";
const App=()=>{
    return(
        <div>
        <Header/>
        <Outlet/>
        </div>
       
    )
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/body",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restaurent/:resId",
                element:<Restaurentmenu/>
            }
        ],
        errorElement:<Error/>
    }

])

root.render(<RouterProvider router={appRouter}/>)