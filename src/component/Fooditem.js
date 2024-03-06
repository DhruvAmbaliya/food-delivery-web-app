import { ITEM_IMG_CDN_URL } from "./constant";

const FoodItem = ({price,name,description,imageId,isVeg,}) => {
  // console.log(item)

  return (
    
    <div className="card p-2 m-2  shadow-lg bg-pink-50"> 
      <img src={ITEM_IMG_CDN_URL + imageId} /> 
      <h3 className="font-bold text-xl ">{name}</h3> 
      <h5>{description}</h5>  
      <h5>Rupees:{price/100}</h5>  
    </div>
  );
};

export default FoodItem;