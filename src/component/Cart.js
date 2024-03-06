import { useDispatch, useSelector } from "react-redux";
import store from "../utils/store";
import FoodItem from "./Fooditem";
import { clearCart } from "../utils/cartSlice";


const Cart =()=>{

    const dispatch = useDispatch();
    const handleClearCart =()=>{
    dispatch(clearCart());
    };

    const cartItems = useSelector(store=>store.cart.items);
    // const store = useSelector((store)=>store);

return(
    <div>
    <h1 className="font-bold text-3xl">Cart Item -{cartItems.length}</h1>
    <button className="p-2 m-5 bg-green-300" onClick={()=>handleClearCart()}>
        clearCart
    </button>
        {/* <h1 className="font-bold text-3xl">Cart Item -{store.cart.items.length}</h1> */}
        {/* <FoodItem {...cartItems[1]}/> */}
        {cartItems.map((item)=>(
            <FoodItem key={item.id}{...item} /> 
        ))}
    </div>
);
};

export default Cart;