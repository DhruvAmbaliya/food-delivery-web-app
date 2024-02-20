import React, { useEffect } from 'react'
import { useState } from 'react'; 

const Profile = (props) => {

  // console.log("render function")
  // const [count,setCount]= useState(0);
  // const [count2,setCount2]= useState(0);
  
  // useEffect(()=>{
  //   // API call
  //   // console.log("useEffect")
  // },[count,count2])

  // useEffect(()=>{
  //   // API call
  //   // console.log("useEffect")
  // },[count2])

  // useEffect(()=>{
  //   const timer = setInterval(()=>{
  //     console.log("print");
  // },1000);

  // return ()=>{
  //   clearInterval(timer);  
  //   console.log("useeffect return")
  // }
  // },[])

  // console.log("render")
  
  return (
    <div>
        <h2>Profile component</h2>
        <h2>Name: {props.name} </h2>
        {/* <h3>count: {count}</h3> */}
        {/* <button onClick={()=> {setCount(1); setCount2(2);}}> Count </button> */}
    </div>
  )
}


export default Profile;