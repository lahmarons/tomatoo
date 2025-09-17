import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";

const FoodItem = ({ _id, name, price, description, image }) => {
  const { cartItems, addCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food_item">
      <div className="food_item_img_container">
        <img className="food_item_img" src={image} />
        {!cartItems[_id] ? (
          <img
            className="add"
            onClick={() => addCart(_id)}
            src={assets.add_icon_white}
            alt="Add to cart"
          />
        ) : (
          <div className="food_item_container">
            <img
              onClick={() => removeFromCart(_id)}
              src={assets.remove_icon_red}
              alt="Remove from cart"
            />
            <p>{cartItems[_id]}</p>
            <img
              onClick={() => addCart(_id)}
              src={assets.add_icon_green}
              alt="Add more"
            />
          </div>
        )}
      </div>

      <div className="food_item_info">
        <div className="food_item_name_rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating" />
        </div>
        <p className="food_item_desc">{description}</p>
        <p className="food_item_price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
