import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useSelector, useDispatch } from "react-redux";
import { setCart, removeFromCart } from "../redux/cartSlice"; // Assume these actions exist

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadCart = () => {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        try {
          const parsedCart = JSON.parse(storedCart);
          if (Array.isArray(parsedCart) && parsedCart.length > 0) {
            dispatch(setCart(parsedCart));
          }
        } catch (error) {
          console.error("Error parsing stored cart:", error);
        }
      }
    };

    if (cartItems.length === 0) {
      loadCart();
    }
  }, [dispatch, cartItems.length]);

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  // ... rest of the component remains the same ...

  return (
    <div className="w-[90%] mx-auto px-4">
      {/* ... existing JSX ... */}
      {cartItems.length === 0 ? (
        <div className="text-center">
          <p>Your cart is currently empty.</p>
          <Link to="/products">
            <button className="bg-black text-white px-4 py-2 mt-4">
              CONTINUE SHOPPING
            </button>
          </Link>
        </div>
      ) : (
        // ... existing cart items display ...
        cartItems.map((item, index) => (
          <div key={index} className="border-t border-b py-4 flex justify-between">
            {/* ... item display ... */}
            <button onClick={() => handleRemoveItem(item.id)} className="text-red-400 px-4 hover:text-red-600 hover:transition-colors">
              <DeleteOutlineOutlinedIcon />
            </button>
          </div>
        ))
      )}
      {/* ... rest of the JSX ... */}
    </div>
  );
};

export default ShoppingCart;