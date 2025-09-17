import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className='explore-menu-text'>
        Que vous ayez envie d’un plat réconfortant, d’une cuisine saine ou d’une nouvelle découverte gastronomique,
        notre menu est pensé pour satisfaire tous les goûts et tous les moments de la journée.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => 
        
          <div onClick={()=>setCategory(prev=>prev===item.menu_name?"all" :item.menu_name)}key={index} className="explore-menu-list-item">
            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />

            <p>{item.menu_name}</p>
          </div>
        )}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
