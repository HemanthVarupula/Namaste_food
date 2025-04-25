import React from "react";
class User extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
            // count2:1
        }
    }
    render(){
        const {Age,location}=this.props; //you have to pass this.props.name , this.props.location
        let {count,count2}=this.state;
        return(
            <div className="user-card">
               <button onClick={()=>{this.setState({count:this.state.count+1})}}>counter :{count}</button>

               {/* <h2>count2:{count2}</h2> */}
                <h1>Name:Hemanth</h1>
                <h2>Location :{location}</h2>
                <h3>Contact:hemanthvarupula@gmail.com</h3>
                <h2>Age:{Age}</h2>
            </div>
        )
    }
}

export default User;