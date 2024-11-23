import { useState, useEffect } from "react";
import cartData from "../ScreenPage/Property.json";
import { LuBed } from "react-icons/lu";
import { LuBath } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const Extra = () => {
  const [cartItems, setCartItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const navigate = useNavigate();
  
  const handleDetailsClick = (id, name) => {
    console.log("Original Name:", name);  // Log original name
    const formattedName = name.trim().replace(/\s+/g, '-').replace(/[^\w\s-]/g, '');  // Clean up name
    console.log("Formatted Name:", formattedName);  // Log formatted name
    
    // Navigate to the details page
    navigate(`/property-details/${formattedName}/${id}`);
    
    // Smooth scroll to the top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  useEffect(() => {
    // Set the cart items from the JSON data on component load
    setCartItems(cartData.forRent.commercial.RestaurantforRent);
  }, []);

  // Calculate the index range to slice the cart items array
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = cartItems.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page change
  const paginate = (pageNumber) =>
     setCurrentPage(pageNumber)
  window.scrollTo({ top: 0, behavior: 'smooth' });;

  // Total pages based on the number of items and items per page
  const totalPages = Math.ceil(cartItems.length / itemsPerPage);

  // Generate page numbers array
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <section className="relative">
        <img
          src="https://www.dhamuandcompany.net/wp-content/uploads/2024/08/1-villa-for-sale-in-jaipur-banner-1536x230-1.jpg"
          alt="Villa for Sale"
          className="w-full h-48 md:h-auto object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="bg-white bg-opacity-85 text-black md:text-xl text-lg font-semibold px-4 py-2">
          Restaurant For Rent in Jaipur
          </span>
        </div>
      </section>

      <section className="">
        <div className="md:m-12 m-3">
          <p className="bg-blue-950 text-white md:w-64 w-52 p-2 md:text-xl">Restaurant for Rent
          </p>
          <div className="md:p-5 p-2 border">
          <p className="text-blue-950 md:text-lg font-medium">Check Restaurant For Rent in Jaipur</p>
            <ul className="md:pt-5 pt-2 font-light text-md">
              <li className="pb-1">✔ Fine Done Restaurant Space</li>
              <li className="pb-1">✔ Roof Top Restaurant</li>
              <li className="pb-1">✔ Furnished Restaurant Space for Rent in Jaipur</li>
              <li className="pb-1">✔ Industrial Land for Rent in Sitapura Industrial Area</li>
              <li className="pb-1">✔ Restaurant Space in Food Court</li>
             
              </ul>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
              {currentItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleDetailsClick(item.id,item.name)}
                  className="border border-gray-200 rounded-lg shadow-lg overflow-hidden bg-gray-100 transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 sm:h-64 object-cover"
                    />
                    <span className="absolute top-2 right-2 bg-red-500 text-white text-sm font-semibold py-1 px-3 ">
                      {item.saleStatus}
                    </span>
                  </div>

                  <div className="p-4 sm:p-4 bg-gray-100">
                    <p className="text-lg font-semibold text-blue-950 mb-2">{item.name}</p>
                    <p className="mb-1 flex items-center">Area: {item.area}</p>
                    <div className="flex justify-between">
                     
                    </div>

                    <p className="font-medium text-lg text-blue-950">{item.price}</p>
                    <button className="bg-blue-950 w-full text-white p-2 rounded mt-2 font-semibold"
                    onClick={() => handleDetailsClick(item.id,item.name)}

                    >
                      More Details
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Buttons */}
            <div className="flex justify-center md:mt-12 mt-5">
              {pageNumbers.map((number) => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`mx-1 px-3 py-1 rounded ${currentPage === number ? "bg-blue-950 text-white" : "bg-gray-200 text-gray-700"}`}
                >
                  {number}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Extra;

