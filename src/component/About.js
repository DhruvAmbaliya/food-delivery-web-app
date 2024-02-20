import React from 'react'
import { Outlet } from 'react-router-dom';
import Profile from './Profile';
import ProfileClass from './Profileclass';
import { Component } from 'react';

// const About = () => {
//   return (
//     <div>
//         <h1> About Us Page</h1>
//         <p>this is about us Page</p>
//         {/* <Outlet/> */}
//         <Profile name={"Dhruv"}/>
//         <ProfileClass name={"Dhruvclass"}/>
//     </div>
//   )
// }

class About extends React.Component{
  constructor(props){
      super(props);
      // create state
      // console.log("parent - constructor")
  }
  componentDidMount(){
      // best place to make API call => because print after render
      // console.log("parent - componentDidMount");
  }
render(){
  // console.log("parent - render")
  
  return (
        <div>
            <h1> About Us Page</h1>
            <p>this is about us Page</p>
            {/* <Outlet/> */}
            <Profile name={"Dhruv"}/>
            <ProfileClass name={"1class"} XYZ = "abc"/>
            {/* <ProfileClass name={"2class"} XYZ = "abc"/> */}
        </div>
      )
}
}

export default About;