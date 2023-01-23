import { IMG_CDN_URL } from "../config";

const MenuItem = ({ itemCards }) => {
  //console.log(itemCards);
  return (
    <div className="menu-items">
      {itemCards.map((item) => (
        <div key={item?.card?.info?.id}>
          <h2>{item?.card?.info?.name}</h2>
          <p>$ {item?.card?.info?.price}</p>
          <p>{item?.card?.info?.description}</p>
        </div>        
      ))}
    </div>
  );
};

export default MenuItem;
