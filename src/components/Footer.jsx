function Footer() {
  return (
    <footer className="bg-gray-100 py-8 mt-8 px-10">
      <hr className="border-gray-300 mb-6" />
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-700">
        <div className="space-y-4">
          <h1 className="text-lg font-semibold underline">Categories</h1>
          <ul className="space-y-2">
            <li className="hover:text-gray-900 cursor-pointer">Women</li>
            <li className="hover:text-gray-900 cursor-pointer">Men</li>
            <li className="hover:text-gray-900 cursor-pointer">Shoes</li>
            <li className="hover:text-gray-900 cursor-pointer">Accessories</li>
            <li className="hover:text-gray-900 cursor-pointer">New Arrivals</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h1 className="text-lg font-semibold underline">Links</h1>
          <ul className="space-y-2">
            <li className="hover:text-gray-900 cursor-pointer">FAQ</li>
            <li className="hover:text-gray-900 cursor-pointer">Pages</li>
            <li className="hover:text-gray-900 cursor-pointer">Stores</li>
            <li className="hover:text-gray-900 cursor-pointer">Compare</li>
            <li className="hover:text-gray-900 cursor-pointer">Cookies</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h1 className="text-lg font-semibold underline">About</h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
            porro aperiam aliquid accusamus voluptatem repudiandae architecto
            itaque quis dolore excepturi!
          </p>
        </div>
        <div className="space-y-4">
          <h1 className="text-lg font-semibold underline">Contact</h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
            porro aperiam aliquid accusamus voluptatem repudiandae architecto
            itaque quis dolore excepturi!
          </p>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-300 pt-4 flex flex-col lg:flex-row justify-between items-center text-gray-600">
        <div className="flex flex-col items-center lg:items-start space-y-2">
          <span className="text-xl font-semibold">
            <img className="w-48" src="/logo.png" alt="logo"/>
          </span>
          <span>©️ Copyright 2024. All Rights Reserved</span>
        </div>
        <div className="mt-4 lg:mt-0">
          <img src="/payment.png" width={"300px"} alt="payment" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
