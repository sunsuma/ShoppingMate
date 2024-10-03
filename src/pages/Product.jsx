import React, { useEffect, useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const Product = () => {
  const location = useLocation();
  const { item } = location.state || {}; // Destructure item from state
  const [selectedImg, setSelectedImg] = useState(item?.img);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  // Step 2: Save product to localStorage when component mounts
  useEffect(() => {
    if (item) {
      localStorage.setItem("selectedProduct", JSON.stringify(item));
    }
  }, [item]);

  if (!item) {
    return <div>No product found!</div>; // Fallback if item is not found
  }

  function handleAddToCart() {
    const cartItem = {
      id: item.id,
      title: item.title,
      price: item.price,
      img: item.img,
      quantity: quantity,
    };

    dispatch(addToCart(cartItem));
  }

  return (
    <>
      <div className="flex mx-20 py-2">
        <Link to={"/"}>Home</Link> /<Link to={"/products"}>Products</Link> / Product
      </div>
      <div className="w-[90%] flex flex-col md:flex-row mx-auto p-4 gap-8">
        <div className="flex md:w-1/2 gap-10 h-72 md:h-[550px]">
          <div className="space-y-4 w-24 md:w-32">
            <img
              className="w-[100%] h-20 md:w-32 md:h-32 object-cover object-left-top"
              src={item.img}
              alt=""
              onClick={() => setSelectedImg(item.img)}
            />
            <img
              className="w-[100%] h-20 md:w-32 md:h-32 object-cover object-left-top"
              src={item.img2}
              alt=""
              onClick={() => setSelectedImg(item.img2)}
            />
          </div>
          <div className="w-full bg-black h-full">
            <img
              src={selectedImg}
              alt="Selected product"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* right */}
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold">{item.title}</h1>
          <p className="text-2xl font-semibold">₹{item.price}</p>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            nostrum doloremque neque quaerat illum odit incidunt, cumque id
            consequatur rerum ducimus iusto quo esse officiis nemo aliquam, est
            fugiat porro!
          </p>

          <div className="flex items-center space-x-4">
            <button
              className="px-3 py-1 border border-gray-300 rounded"
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              className="px-3 py-1 border border-gray-300 rounded"
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              +
            </button>
          </div>

          <button
            className="btn btn-info w-[50%] text-white py-2 px-4 flex flex-col items-center justify-center"
            onClick={handleAddToCart}
          >
            <AddShoppingCartIcon size={20} />
            <span className="ml-2">ADD TO CART</span>
          </button>

          <div className="flex flex-col md:flex-row gap-4 md:gap-0 md:space-x-4 text-blue-500">
            <button className="flex items-center space-x-1">
              <FavoriteBorderIcon size={20} />
              <span>ADD TO WISH LIST</span>
            </button>
            <button className="flex items-center space-x-1">
              <BalanceIcon size={20} />
              <span>ADD TO COMPARE</span>
            </button>
          </div>

          <div className="space-y-2 text-sm">
            <p>Vendor: Polo</p>
            <p>Product Type: T-Shirt</p>
            <p>Tag: T-Shirt, Women, Top</p>
          </div>

          <hr className="my-4" />

          <div className="space-y-2">
            <p className="font-semibold">DESCRIPTION</p>
            <hr />
            <p className="font-semibold">ADDITIONAL INFORMATION</p>
            <hr />
            <p className="font-semibold">FAQ</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
