import { swiggy_api_URL } from "./constant.js";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react"; /* This is named export */
import Shimmer from "./Shimmer"; /* This is default export */
import { Link } from "react-router-dom";
// import { restaurantList } from "./constant.js";

// const BurgerKing = 
//     {
//     name :"Burger King",
//     image : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
//     cusines : ["Burger","American"],
//     rating : "4.2",
//     }
//     const ResturentCard = ()=>{
//         return(
//         <div className="card">
//             <img src={BurgerKing.image}/>
//             <h2>{BurgerKing.name}</h2>
//             <h3>{BurgerKing.cusines.join(", ")}</h3>
//             <h4>{BurgerKing.rating}star</h4>
//         </div>
//         );
//     };
    // const BurgerKing2 = 
    // {
    // name :"kfc",
    // image : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
    // cusines : ["pizza","American"],
    // rating : "4",
    // }
    // const ResturentCard2 = ()=>{
    //     return(
    //     <div className="card">
    //         <img src={BurgerKing2.image}/>
    //         <h2>{BurgerKing2.name}</h2>
    //         <h3>{BurgerKing2.cusines.join(", ")}</h3>
    //         <h4>{BurgerKing2.rating}star</h4>
    //     </div>
    //     );
    // };

// const ResturentList = [ResturentCard,ResturentCard2];

function filterData(searchText, restaurants) {
  const resFilterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return resFilterData;
}

const Body = ()=>{
    // create normal vriable in js
    // const searchTxt = "kfc";

    // create local state variable in react
    // searchTxt is a local state variable
    // return = [variable name , function to update the variable ] return a array 
    const [searchText, setSearchText] = useState("");  // to create state variable 
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    // empty dependency array => call once after render
    // dep arr [searchInput] => call once after initial render + everytime after render (my searchInput change)
    useEffect(() => {
      // API call
      getRestaurants();
    }, []);

    // async function getRestaurant to fetch Swiggy API data
  async function getRestaurants() {
    // handle the error using try... catch
    try {
      const response = await fetch(swiggy_api_URL);
      const json = await response.json();

      // initialize checkJsonData() function to check Swiggy Restaurant data
      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {

          // initialize checkData for Swiggy Restaurant data
           // optional chaining ?
          let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

          // if checkData is not undefined then return it
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }

      // call the checkJsonData() function which return Swiggy Restaurant data
      const resData = await checkJsonData(json);

      // update the state variable restaurants with Swiggy API data
      setAllRestaurants(resData);
      setFilteredRestaurants(resData);
    } catch (error) {
      console.log(error);
    }
  }

  // use searchData function and set condition if data is empty show error message
  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const filteredData = filterData(searchText, restaurants);
      setFilteredRestaurants(filteredData);
      setErrorMessage("");
      if (filteredData?.length === 0) {
        setErrorMessage(`Sorry, we couldn't find any results for "${searchText}"`);
      }
    } else {
      setErrorMessage("");
      setFilteredRestaurants(restaurants);
    }
  };

  // if allRestaurants is empty don't render restaurants cards
  if (!allRestaurants) return null;
    
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          // update the state variable searchText when we typing in input box
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            // user click on button searchData function is called
            searchData(searchText, allRestaurants);
          }}
        >
          Search
        </button>
      </div>
      {errorMessage && <div className="error-container">{errorMessage}</div>}

      {/* if restaurants data is not fetched then display Shimmer UI after the fetched data display restaurants cards */}
      {allRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-list">
          {/* We are mapping restaurants array and passing JSON array data to RestaurantCard component as props with unique key as restaurant.data.id */}
          {filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant?.info?.id}
                key={restaurant?.info?.id}
              >
                <RestaurantCard {...restaurant?.info} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;    
