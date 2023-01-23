import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { IMG_CDN_URL } from "../config";
import MenuItem from "./MenuItem";

const RestraurantMenu = () => {
  const [restraurantInfo, setRestraurantInfo] = useState(null);
  // how to read dynamic urls
  const params = useParams();
  //console.log(params);

  useEffect(() => {
    getRestraurantDetails();
  }, []);

  const getRestraurantDetails = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9354765&lng=77.6141533&restaurantId=" +
        params.id +
        "&submitAction=ENTER"
    );
    const jsonData = await data.json();
    //console.log(jsonData?.data?.cards);
    setRestraurantInfo(jsonData?.data?.cards);
  };

  return !restraurantInfo ? null : (
    <main className="restaurant-details-container">
      <section className="restaurant-details">
        <article className="restaurant-info">
          <h1>{restraurantInfo[0]?.card?.card?.info?.name}</h1>
          <p>{restraurantInfo[0]?.card?.card?.info?.cuisines.join(", ")}</p>
          <p>
            {restraurantInfo[0]?.card?.card?.info?.areaName +
              ", " +
              restraurantInfo[0]?.card?.card?.info?.city}
          </p>
          <div>
            <h3>{restraurantInfo[0]?.card?.card?.info?.avgRatingString}</h3>
            <p>{restraurantInfo[0]?.card?.card?.info?.totalRatingsString}</p>
          </div>
        </article>
        <figure className="restaurant-img">
          <img
            src={
              IMG_CDN_URL +
              restraurantInfo[0]?.card?.card?.info?.cloudinaryImageId
            }
          />
        </figure>
      </section>

      <section className="menu-details">
        {restraurantInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map(
          (menu,index) => (
            <div key={index}>
              <h1>{menu?.card?.card?.title}</h1>
              {menu?.card?.card?.hasOwnProperty("categories") && (
                <details>
                  <summary>{menu?.card?.card?.title}</summary>
                  {menu?.card?.card?.categories.map((categoryItem) => (
                    <MenuItem itemCards={categoryItem?.itemCards} />
                  ))}
                </details>
              )}
              {menu?.card?.card?.hasOwnProperty("itemCards") && (
                <MenuItem itemCards={menu?.card?.card?.itemCards} />
              )}
            </div>
          )
        )}
      </section>
    </main>
  );
};

export default RestraurantMenu;
