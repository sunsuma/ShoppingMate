import { useParams } from "react-router-dom";
import List from "../components/List";
import FilterListIcon from "@mui/icons-material/FilterList";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(0);
  const [sort, setSort] = useState(null);
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="flex flex-col md:flex-row">
      {/* Left Sidebar */}
      {/* Filter Panel */}
      {showFilter && (
        <div className="w-full md:w-1/6 p-4 border-r border-gray-300 sticky top-0 h-screen">
          <div className="flex justify-between items-center gap-10 mb-4">
            <h2 className="text-lg font-bold">Filter</h2>
            <ClearIcon
              onClick={() => setShowFilter(false)}
              className="cursor-pointer"
            />
          </div>

          {/* Filter Items */}
          <div className="filterItem mb-4">
            <h2 className="text-lg font-semibold mb-2">Product Categories</h2>
            <div className="inputItem mb-2">
              <input type="checkbox" id="1" value={1} className="mr-2" />
              <label htmlFor="1">Shoes</label>
            </div>
            <div className="inputItem mb-2">
              <input type="checkbox" id="2" value={2} className="mr-2" />
              <label htmlFor="2">Skirt</label>
            </div>
            <div className="inputItem mb-2">
              <input type="checkbox" id="3" value={3} className="mr-2" />
              <label htmlFor="3">Coats</label>
            </div>
          </div>

          {/* Filter by Price */}
          <div className="filterItem mb-4">
            <h2 className="text-lg font-semibold mb-2">Filter by price</h2>
            <div className="inputItem flex items-center mb-2">
              <span className="mr-2">0</span>
              <input
                type="range"
                id="price"
                name="price"
                min="0"
                max={1000}
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="flex-grow mx-2"
              />
              <span>{maxPrice}</span>
            </div>
          </div>

          {/* Sort by Price */}
          <div className="filterItem mb-4">
            <h2 className="text-lg font-semibold mb-2">Sort by</h2>
            <div className="inputItem mb-2">
              <input
                type="radio"
                id="asc"
                value={"asc"}
                name="price"
                checked={sort === "asc"}
                onChange={() => setSort("asc")}
                className="mr-2"
              />
              <label htmlFor="asc">Price (Lowest first)</label>
            </div>
            <div className="inputItem mb-2">
              <input
                type="radio"
                id="desc"
                value={"desc"}
                name="price"
                checked={sort === "desc"}
                onChange={() => setSort("desc")}
                className="mr-2"
              />
              <label htmlFor="desc">Price (Highest first)</label>
            </div>
          </div>
        </div>
      )}

      {/* Filter Button */}
      {!showFilter && (
        <div className="w-1/7 border-r border-gray-300 sticky top-0 h-screen flex justify-center gap-10 p-4">
          <h2 className="text-lg font-bold">Filter</h2>
          <FilterListIcon
            onClick={() => setShowFilter(true)}
            className="cursor-pointer mt-1"
          />
        </div>
      )}

      {/* Right Content Area */}
      <div className="w-screen p-4">
        <div className="flex pb-4 text-white">
          <Link to={"/"}>Home</Link> / Products
        </div>
        <List catId={catId} maxPrice={maxPrice} sort={sort} showFilter={showFilter} />
      </div>
    </div>
  );
}

export default Products;
