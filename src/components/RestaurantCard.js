import { IMG_CDN_URL } from "../config";
const RestaurantCard = ({ restaurantInfo }) => {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwoString,
  } = restaurantInfo.data;
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
      <div className="card-details">
        <h6 className="restaurant-name">{name}</h6>
        <p className="cuisines">{cuisines.join(", ")}</p>
        <div>
          <p>{avgRating}</p>
          <p>{deliveryTime}</p>
          <p>{costForTwoString}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
