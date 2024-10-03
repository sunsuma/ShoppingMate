import { useParams } from "react-router-dom";
import List from "../components/List";
import FilterListIcon from "@mui/icons-material/FilterList";
import ClearIcon from "@mui/icons-material/Clear";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products({ theme }) {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(0);
  const [sort, setSort] = useState(null);
  const [showFilter, setShowFilter] = useState(false);

  // Disable scrolling when the filter panel is open on small devices
  useEffect(() => {
    const handleScrollLock = () => {
      if (window.innerWidth <= 768 && showFilter) {
        document.body.style.overflow = "hidden"; // Disable scroll on small devices when filter is open
      } else {
        document.body.style.overflow = "auto"; // Enable scroll when filter is closed or on larger devices
      }
    };

    handleScrollLock(); // Initial check when component mounts and when showFilter changes

    window.addEventListener("resize", handleScrollLock); // Reapply logic on window resize

    return () => {
      window.removeEventListener("resize", handleScrollLock);
      document.body.style.overflow = "auto"; // Ensure scroll is enabled on cleanup
    };
  }, [showFilter]); // Run effect whenever showFilter changes

  return (
    <div className="flex flex-col md:flex-row">
      {/* Left Sidebar */}
      {/* Filter Panel */}
      {showFilter && (
        <div className=" mt-8 md:mt-0 md:w-1/6 p-4 md:border-r md:border-gray-300 sticky top-0 h-screen">
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

          <div className="mt-[30%] md:mt-10 flex gap-16 md:gap-10">
            <button
              className="btn btn-info text-xl flex bottom-0 w-[30%]"
              onClick={() => setShowFilter(false)}
            >
              Close
            </button>

            <button className="btn btn-info text-xl flex bottom-0 w-[50%]">
              Apply
            </button>
          </div>
        </div>
      )}

      {/* Filter Button */}
      {!showFilter && (
        <div className="md:w-1/7 py-12 mx-4 md:mt-0 h-10 border-r border-gray-300 sticky top-0 md:h-screen flex justify-between gap-10">
          <h2 className="text-lg font-bold">Filter</h2>
          <FilterListIcon
            onClick={() => setShowFilter(true)}
            className="cursor-pointer mt-1"
          />
        </div>
      )}

      {/* Right Content Area */}
      <div className="w-screen p-4">
        <p className="flex left-36 md:left-0 pb-4 absolute md:static top-[70px] md:top-0">
          <Link to={"/"}>Home</Link> / Products
        </p>
        <List
          catId={catId}
          maxPrice={maxPrice}
          sort={sort}
          showFilter={showFilter}
        />
      </div>
    </div>
  );
}

export default Products;
