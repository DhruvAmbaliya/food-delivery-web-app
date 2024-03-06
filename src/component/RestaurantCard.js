import { IMG_CDN_URL } from "./constant";
// import UserContext from "../utils/UserContext";
// import { useContext } from "react";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  avgRatingString,
  sla,
  costForTwo,
  // user,
}) => {

  // const {user}= useContext(UserContext)
  return (
    
    <div className="card p-2 m-2 h-96 shadow-lg bg-pink-50"> 
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold text-xl ">{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{areaName}</h5>
      {/* <h5>{user.name}</h5> */}
      <span>
        <h4> Rating : {avgRatingString} </h4>
        <h4>Distance : {sla?.lastMileTravelString ?? '2.0 km'}</h4>
        <h4>{costForTwo ?? '&#8377;200 for two'}</h4>
      </span> 
      {/* <h5 className="font-bold">{user.name}-{user.email}</h5> */}
    </div>
  );
};

export default RestaurantCard;