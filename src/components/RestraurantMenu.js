import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import MenuItem from "./MenuItem";
import useRestaurant from "../hooks/useRestaurant";

const RestraurantMenu = () => {
  const params = useParams();      //?  ****** how to read dynamic urls  ******/

  const restaurantInfo = useRestaurant(params.id);     //? ******* custom Hook ********************** */

  return !restaurantInfo ? null : (
    <main className="restaurant-details-container">
      <section className="restaurant-details">
        <article className="restaurant-info">
          <h1>{restaurantInfo[0]?.card?.card?.info?.name}</h1>
          <p>{restaurantInfo[0]?.card?.card?.info?.cuisines.join(", ")}</p>
          <p>
            {restaurantInfo[0]?.card?.card?.info?.areaName +
              ", " +
              restaurantInfo[0]?.card?.card?.info?.city}
          </p>
          <div>
            <h3>{restaurantInfo[0]?.card?.card?.info?.avgRatingString}</h3>
            <p>{restaurantInfo[0]?.card?.card?.info?.totalRatingsString}</p>
          </div>
        </article>
        <figure className="restaurant-img">
          <img
            src={
              IMG_CDN_URL +
              restaurantInfo[0]?.card?.card?.info?.cloudinaryImageId
            }
          />
        </figure>
      </section>

      <section className="menu-details">
        {restaurantInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map(
          (menu, index) => (
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
