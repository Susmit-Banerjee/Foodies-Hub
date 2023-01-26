import { useState, useEffect } from "react";

const useRestaurant = (id) => {
  const [restraurantInfo, setRestraurantInfo] = useState(null);

  useEffect(() => {
    getRestraurantDetails();
  }, []);

  const getRestraurantDetails = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9354765&lng=77.6141533&restaurantId=" +
        id+
        "&submitAction=ENTER"
    );
    const jsonData = await data.json();
    setRestraurantInfo(jsonData?.data?.cards);
  };
  return restraurantInfo;
};
export default useRestaurant;
