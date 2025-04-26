import React from "react";
class User extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
            details:{
                name:"Hemanth",
                Age:23
            }
        }
    }

    async componentDidMount(){
        const data =await fetch(" https://api.github.com/users/HemanthVarupula")
        const json=await data.json();
        console.log(json);
        this.setState({details:json})
    }
    render(){
        const {Age,location}=this.props; //you have to pass this.props.name , this.props.location
        let {count,count2}=this.state;
        const {name,bio,avatar_url}=this.state.details;
        return(
            <div className="user-card">
               <button onClick={()=>{this.setState({count:this.state.count+1})}}>counter :{count}</button> <br></br><br></br>
               <img src={avatar_url}/>
               {/* <h2>count2:{count2}</h2> */}
                <h1>Name:{name}</h1>
                <h2>Location :{location}</h2>
                <h3>Contact:hemanthvarupula@gmail.com</h3>
                <h2>Age:{Age}</h2>
                <h3>{bio}</h3>
            </div>
        )
    }
}

export default User;