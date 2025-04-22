import React from "react";
import ReactDom from "react-dom/client";
import { Header } from "./components/Header";
import Body from "./components/Body"
const root=ReactDom.createRoot(document.getElementById("root"));
const App=()=>{
    return(
        <div>
        <Header/>
        <Body/>
        </div>
       
    )
}

root.render(<App/>)