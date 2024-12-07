import Item from "./Item"
import React from "react";


const ItemList = ({ products }) => {
  return (
    <div className="item-list">
      {
        products.map((product)=> {
          return <Item key={product.id} product={product} />
        })
      }
    </div>
  );
};

export default ItemList;