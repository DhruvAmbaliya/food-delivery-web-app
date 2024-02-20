import React from 'react'
import { Github_API_User, Github_UserName, options } from "./constant";

class Profile extends React.Component{
    constructor(props){
        super(props);
        // create state
        this.state={
            userInfo: {
             name : "",
             bio : "",
            },
        };

        // console.log("child - constructor" + this.props.name)
    }
    
    // async componentDidMount() {
    //     const response = await fetch(Github_API_User + Github_UserName, options); // access the props `name` from parent class `ProfileClass`
    //     const json = await response.json();
    //     console.log(json);
    //     this.setState({
    //       userInfo: json,
    //     });

    //     console.log("child - componentDidMount"+ this.props.name);
    // }

    // componentDidMount(){
    //     this.timer = setInterval(()=>{
    //         console.log("print");
    //     },1000);
    // }
    // componentWillUnmount(){
    //     clearInterval(this.timer)
    //     console.log(" component Will Unmount ")
    // }

    // componentDidUpdate(prevProps,prevState){
    //     if (this.state.count !== prevState.count || this.state.count2 !== prevState.count2){
                
    //     }
    //     if (this.state.count2 !== prevState.count2){
                
    //     }
    //     console.log(" component Did Update ")
    // }

    
  render(){
    // console.log("child - render"+ this.props.name)

    return (
        <div>
        <h1> Profile class component</h1>
        {/* <h2>Name: {props.name} </h2> */}
        {/* <img src={this.state.userInfo.avatar_url}/> 
        <h2> login: {this.state.userInfo.login}</h2>
        <h2> id: {this.state.userInfo.id}</h2>
        <h2> type: {this.state.userInfo.type}</h2> */}

        {/* <h3> count: {this.state.count}</h3>
        <button onClick={()=>{
            // we do not mutate state directly
            // never do this.state = something
            this.setState({
                count: 1,
                count2:2,
            })
        }}>setCount</button> */}
        </div>
      
    )
  }
}
export default Profile;