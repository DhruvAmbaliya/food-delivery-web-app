import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Footer = ()=>{
    const {user}=useContext(UserContext)
    return(
        <>
        <h3 className=" mt-5">footer</h3>
        <h4 className=" m-5 p-5"> This Side is developed by {user.name} - {user.email} </h4>
        </>
    );
}

export default Footer;