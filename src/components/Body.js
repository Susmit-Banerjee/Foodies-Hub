import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { SearchSvg } from "../assets/SVG";
import { filterDataFn } from "../utils/utils";
import useOnline from "../hooks/useOnline";


const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9354765&lng=77.6141533&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards); // * ***optional chaining********
    setfilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  {
    console.log("render");
  }

  const online= useOnline();
  if(!online){
    return <h1>🔴 Offline, please check your internet connection</h1>
  }

  //* Don't render component (Early return)
  if (!allRestaurants) {
    return null;
  }

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          value={searchTxt}
          onChange={(e) => setSearchTxt(e.target.value)}
          placeholder="Search for restaurants and food"
        />
        <button
          className="search-btn"
          onClick={() => {
            // need to filter restaurant list data
            const data = filterDataFn(searchTxt, allRestaurants);
            // update the state - restaurants
            setfilteredRestaurants(data);
            setSearchTxt("");
          }}
        >
          Search
          <SearchSvg />
        </button>
      </div>

      {allRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-list">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard
              restaurantInfo={restaurant}
              key={restaurant?.data?.id}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Body;
