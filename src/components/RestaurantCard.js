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
      <h2>{name}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime}</h4>
      <h4>{costForTwoString}</h4>
    </div>
  );
};

export default RestaurantCard;
