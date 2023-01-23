import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
const RestaurantCard = ({ restaurantInfo }) => {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwoString,
    id
  } = restaurantInfo.data;
  return (
    <Link to={"/restaurant/"+id} className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
      <div className="card-details">
        <h3 className="restaurant-name">{name}</h3>
        <p className="cuisines">{cuisines.join(", ")}</p>
        <div>
          <h5>{avgRating}</h5>
          <h5>{deliveryTime}</h5>
          <h5>{costForTwoString}</h5>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
