import User from "./Userclass";
const About=()=>{
    return(
        <div>
            <h1>You are in about us page</h1>
            <User Age={21} location={"Vizag"}/>
        </div>
    )
}
export default About;