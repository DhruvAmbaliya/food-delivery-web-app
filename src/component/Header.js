// this is not normal js file thats why some people name it .jsx 
// you write typescript then name it .tsx

import { useState } from "react";
import Logo from "../assets/img/Logo.png"
import { Link } from "react-router-dom"

const loggedInUser = ()=>{
    // API call to check authentication
    return true;
};

export const Title = ()=>
    ( 
    <a href="/">  
    <img alt="logo" className ="Logo" src={Logo}/>
    </a>
    );

const title = "Food Villa";
//react component
// functional base component 
// var xyz = 120;
// const data = api.getData();

const Header = ()=>{

    const [isLoggedin,setisLoggedin] = useState(false);
    return (
    <div className="Header">
    {/* {xyz} */}
    {/* {data} xss attack - jsx take care of this*/}
    {/* {console.log(xyz)} you write any java script code inside {} */} 
    { /* use react fun/component inside react component */}
    {/* component composition(composing) - component inside component */}
    {/* <Heading /> {/* {Heading()} */ } 
    { /* use react element inside react component */}
    {/* {heading2} */}
    {/* {1+2} */}
    {/* <h1>hellooooooo</h1> */}
    <Title/>
    <h1>{title}</h1>
    <div className="nav-item">
        <ul>
        <li><Link to="/">Home</Link></li>
       <li> <Link to="/about">About us</Link></li>
        <li><Link to="/contact">Contact us</Link></li>  
        <li>Card</li>
        </ul>
    </div>
        {
            isLoggedin ? (<button onClick={()=>setisLoggedin(false)}>logout</button>) 
            : (<button onClick={()=>setisLoggedin(true)}>login</button>)
        }

    </div>
    );  // return react element
};

// const HeaderComponent2 = ()=>(
//     <div>
//     <h1>hellooooooo</h1>
//     <h1>2hello</h1>
//     </div>
//     );  // return react element

export default Header;    