// this is not normal js file thats why some people name it .jsx 
// you write typescript then name it .tsx

import { useContext, useState } from "react";
import Logo from "../assets/img/Logo.png"
import { Link } from "react-router-dom"
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import store from "../utils/store";

const loggedInUser = ()=>{
    // API call to check authentication
    return true;
};

export const Title = ()=>
    ( 
    <a href="/">  
    <img data-testid="logo" id="" className ="h-28 p-2" alt="logo" src={Logo}/>
    </a>
    );

const title = "Food Villa";
//react component
// functional base component 
// var xyz = 120;
// const data = api.getData();

const Header = ()=>{

    const [isLoggedin,setisLoggedin] = useState(false);
    const isOnline = useOnline();
    const {user} = useContext(UserContext); 
    const cartItems = useSelector(store=>store.cart.items);
    // console.log(cartItems);

    return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50 md:bg-yellow-50" >
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
    <h1 className="py-10">{title}</h1>
    <div className="nav-item">
        <ul className="flex py-10">
        <li className="px-2 "><Link to="/">Home</Link></li>
       <li className="px-2 "> <Link to="/about">About us</Link></li>
        <li className="px-2 "><Link to="/contact">Contact us</Link></li>  
        <li className="px-2 "><Link to="/instamart">Instamart</Link></li>
        <Link to="/cart"><li className="px-2" data-testid="cart">Cart- {cartItems.length} item</li></Link>
        </ul>
    </div>
        <h1 data-testid="online-status" className="p-10">{isOnline?'✅' : '🔴' }</h1>
        <span className="p-10 font-bold text-red-500"> {user.name} </span>
        {
            isLoggedin ? (<button onClick={()=>setisLoggedin(false)}>logout</button>) 
            : (<button onClick={()=>setisLoggedin(true)}>login</button>)
        } 

    </div>
    );  // return react element
};

export default Header;  

// const HeaderComponent2 = ()=>(
//     <div>
//     <h1>hellooooooo</h1>
//     <h1>2hello</h1>
//     </div>
//     );  // return react element