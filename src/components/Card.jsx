
import { Link } from "react-router-dom";

function Card({ item }) {
  return (
    <Link to={`/product/${item.id}`} state={{ item }} className="transform transition-transform duration-200 hover:scale-105">
      <div className="bg-white border border-gray-200 rounded-lg shadow-md mb-10 overflow-hidden">
        <div className="relative h-[50%]">
          {item.isNew && (
            <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold py-1 px-2 rounded z-10">
              New Season
            </span>
          )}
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-96 object-cover object-top"
          />
          <img
            src={item.img2}
            alt={`${item.title} alternate`}
            className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
          <div className="flex items-center justify-between mt-2">
            <h3 className="text-sm text-gray-500 line-through">₹{item.oldPrice}</h3>
            <h3 className="text-xl font-bold text-red-600">₹{item.price}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
