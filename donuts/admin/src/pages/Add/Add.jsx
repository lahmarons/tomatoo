import React, { useState } from "react";
import "./Add3.css";
import { assets } from "../../assets/assets";

const Add = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    decription: "",
    price: "",
    category: "SALADE",
  });
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const OnSubmitHandler = async (event)=>{
event.preventDefault();

  }

  return (
    <div className="add">
      <form className="flex-col" onSubmit={OnSubmitHandler}>
        <div className="add-image-uploads flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="add-product-name flex-colo">
          <p>Product name </p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Type here"
          />
        </div>
        <div className="add-product-decription flex-col ">
          <p>Product description</p>

          <textarea
            onChange={onChangeHandler}
            value={data.decription}
            name="decription"
            rows="6"
            placeholder="Write content here"
            id=""
          ></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>product category</p>
            <select
              onChange={onChangeHandler}
              value={data.category}
              name="category"
            >
              <option value="SALADE">SALADE</option>
              <option value="ROLLS">ROLLS</option>
              <option value="DESERRET">DESERRET</option>
              <option value="SANDICH">SANDICH</option>
              <option value="CAKE">CAKE"</option>
              <option value="PURE VEG">PURE VEG</option>
              <option value="PASTA">PASTA</option>
              <option value="NOODLES">NOODLES</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>product price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="number"
              name="price"
              placeholder="$20"
            />
          </div>
        </div>
        <button type="submit" className="add-btn">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
