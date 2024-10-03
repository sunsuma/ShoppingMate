import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useSelector, useDispatch } from "react-redux";
import { setCart, removeFromCart, resetCart } from "../redux/cartSlice"; // Assume these actions exist

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
    dispatch(removeFromCart(itemId)); // Correctly pass the itemId
  };

  const handleResetCart = () => {
    dispatch(resetCart()); // Dispatch the reset action
  };

  return (
    <div className="w-[90%] mx-auto px-4">
      <header className="text-sm ">
        <p className="py-2">
          <Link to={"/"}>Home</Link> / Shopping Bag
        </p>
        <div className="border-b">
          <div className="flex justify-center">
            <img className="w-52" src="/logo.png" alt="logo" />
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">YOUR BAG</h2>
      </header>

      <main className="flex flex-col md:flex-row justify-between">
        <div className="w-screen">
          <div className="w-[90%] flex justify-between mb-4">
          <div className="flex flex-col md:flex-row gap-5 md:gap-10 justify-center items-center">
            <Link to={"/products"}>
              <button className="text-sm underline">CONTINUE SHOPPING</button>
            </Link>
            
              <p className="font-semibold mr-4">
                Shopping Bag ({cartItems.length})
              </p>
              <p className="text-gray-500">Your Wishlist (0)</p>
            </div>
            <button className="btn btn-active btn-neutral">CHECKOUT NOW</button>
            
          </div>

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
            cartItems.map((item, index) => (
              <div
                key={index}
                className="w-[90%] border-t border-b py-4 flex flex-row justify-between"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-24 md:h-24 object-cover"
                />
                <div className="ml-4 flex-grow">
                  <div className="flex justify-between">
                    <h3 className="font-semibold">{item.title}</h3>
                    <button
                      className="text-red-400 px-4 hover:text-red-600 hover:transition-colors"
                      onClick={() => handleRemoveItem(item.id)} // Correctly pass item.id
                    >
                      <DeleteOutlineOutlinedIcon />
                    </button>
                  </div>
                  <p className="text-sm text-gray-500">SKU: {item.sku}</p>
                  <p className="font-semibold mt-2">{item.price} ₹</p>
                  <p className="text-sm">Quantity: {item.quantity}</p>
                  <div className="flex items-center mt-2">
                    <span className="ml-1 text-sm">Save</span>
                    <span className="ml-4 text-sm underline">Edit</span>
                  </div>
                </div>
              </div>
            ))
          )}

          <div className="mt-4">
            <label className="text-sm">Promotion code</label>
            <div className="flex mt-1 w-[25%]">
              <input type="text" className="border px-2 py-1 flex-grow" />
              <button className="border border-l-0 px-4 py-1">Apply</button>
            </div>
          </div>
        </div>

        {/* right in md device and bottom in small device */}
        <div className="md:w-1/2 mt-10 md:mt-0">
          <div className="bg-gray-100 p-4">
            <h3 className="font-semibold mb-4 text-gray-500">ORDER SUMMARY</h3>
            <div className="flex justify-between mb-2">
              <span className="text-gray-500">Subtotal</span>
              <span className="text-blue-600">
                {cartItems.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                )}{" "}
                ₹
              </span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-500">Estimated Shipping</span>
              <span>From 0.00 ₹</span>
            </div>
            <div className="flex justify-between font-semibold mt-4">
              <span className="text-gray-600">Estimated Total</span>
              <span className="text-blue-600">
                {cartItems.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                )}{" "}
                ₹
              </span>
            </div>
            <button className="btn btn-active btn-neutral w-full mt-5">CHECKOUT NOW</button>
          </div>
          <button className="text-2xl mt-5 text-red-600" onClick={handleResetCart}>
            Reset
          </button>
          <div className="mt-4">
            <p className="text-sm mb-2">Payment methods</p>
            <div className="flex space-x-2">
              <img src="/payment.png" alt="payment" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ShoppingCart;
