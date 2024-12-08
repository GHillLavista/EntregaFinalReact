import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ItemContexts } from "../contexts/ItemContexts";

export const CartWidget = () => {
  const { items } = useContext(ItemContexts); 
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0); 

  return (
    <>
      <Link to="/checkout">
        <FiShoppingCart
        style={{ width: "30px", height: "auto" }}
        />
        {totalItems > 0 && <span>{totalItems}</span>}
      </Link>
      {items.length > 0 && (
        <div className="cart-preview">
          {items.map(item => (
            <div key={item.id} className="cart-item">
              <span>{item.name}</span>
              <span>Cantidad: {item.quantity}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default CartWidget;
