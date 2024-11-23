import { useState } from "react";
import projectData from "./Property.json";
import { CiLocationOn } from "react-icons/ci";
import { HiMenuAlt2 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Location from "../assets/location.webp";

const Property = () => {
  const [activeTab, setActiveTab] = useState("forSale");
  const [selectedPropertyType, setSelectedPropertyType] = useState("residentialPlot");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleDetailsClick = (id, name) => {
   
    const formattedName = name.trim().replace(/\s+/g, '-').replace(/[^\w\s-]/g, '');  // Clean up name
  
    
    // Navigate to the details page
    navigate(`/property-details/${formattedName}/${id}`);
    
    // Smooth scroll to the top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  

  const getOriginalProjects = (activeTab) => {
    if (activeTab === "forSale") {
      const residentialProjects = projectData[activeTab]?.residential?.[selectedPropertyType] || [];
      const commercialProjects = projectData[activeTab]?.commercial?.[selectedPropertyType] || [];
      return [...residentialProjects, ...commercialProjects]; // Combine both residential and commercial projects
    } else if (activeTab === "forRent") {
      const residentialProjects = projectData[activeTab]?.residential || [];
      const commercialProjects = projectData[activeTab]?.commercial?.[selectedPropertyType] || [];
      return [...residentialProjects, ...commercialProjects]; // Combine both residential and commercial projects
    }
    return [];
  };
  


  // Filter logic
  const handleFilter = () => {
    const originalProjects = getOriginalProjects(activeTab); // Get projects based on the active tab

    if (!minPrice && !maxPrice && !address) {
      setFilteredProjects([]); // Reset to show all projects if no filter is applied
      return;
    }

    const filtered = originalProjects.filter((project) => {
      const priceRange = project.priceRange.split(" - ").map((price) => parseFloat(price.replace(/,/g, "")));
      const min = minPrice ? parseFloat(minPrice) : 0;
      const max = maxPrice ? parseFloat(maxPrice) : Infinity;
      const withinPriceRange = priceRange[0] >= min && priceRange[1] <= max;
      const matchesAddress = project.location.toLowerCase().includes(address.toLowerCase());

      return withinPriceRange && matchesAddress;
    });

    setFilteredProjects(filtered);
  };

  const clearFilters = () => {
    setAddress("");
    setMinPrice("");
    setMaxPrice("");
    setFilteredProjects([]); // Reset filtered results
    setIsDialogOpen(false); // Close the filter dialog
  };

  const renderProjects = () => {
    const originalProjects = getOriginalProjects(activeTab); // Get the correct projects based on the active tab
    const projectList = filteredProjects.length > 0 ? filteredProjects : originalProjects;

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6 ">
        {projectList.map((project) => (
          <div
            key={project.id}
            onClick={() => handleDetailsClick(project.id,project.name)}
            className="border bg-gray-100 border-gray-200 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 sm:h-64 object-cover"
            />
            <div className="p-4 sm:p-6 ">
              <p className="text-xl font-semibold text-blue-950 mb-2">{project.name}</p>
              <p className="mb-1 flex items-center">
                <CiLocationOn className="mr-1" />
                Jaipur
              </p>
              <div className="flex justify-between">
                
                <p className="font-light">Area:{project.area}</p>
              </div>
              <p className="font-medium text-lg text-blue-950">{project.price}</p>
              <button
                className="bg-blue-950 w-28 text-white p-2 rounded mt-2 font-semibold"
                onClick={() => handleDetailsClick(project.id,project.name)}
              >
               More Details
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="p-4 sm:p-8">
      {/* Tabs */}
      <div className="flex flex-col sm:flex-row justify-between mb-8 items-center">
      <div className="flex space-x-2">
  {["forSale", "forRent"].map((tab) => (
    <button
      key={tab}
      onClick={() => {
        setActiveTab(tab);
        setFilteredProjects([]); // Clear filtered projects when tab changes
        setSelectedPropertyType(
          tab === "forSale" ? "residentialPlot" : "officeSpace" // Set the default property type for each tab
        );
      }}
      className={`px-4 py-2 font-semibold rounded-lg shadow-md ${
        activeTab === tab
          ? "bg-blue-950 text-white"
          : "bg-gray-100 text-gray-800"
      } hover:bg-blue-950 hover:text-white transition-colors`}
    >
      {tab.charAt(0).toUpperCase() + tab.slice(1)} Projects
    </button>
  ))}
</div>
<div className="relative mt-4 sm:mt-0">
 
  <select
    value={selectedPropertyType}
    onChange={(e) => setSelectedPropertyType(e.target.value)}
    className="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 focus:outline-none"
  >
    {/* For Sale Options */}
    {activeTab === "forSale" && (
      <>
        <optgroup label="Residential Properties">
          <option value="residentialPlot">Residential Plot</option>
          <option value="villa">Villa</option>
          <option value="apartmentFlat">Apartment/Flat</option>
          <option value="builderFloor">Builder Floor</option>
          <option value="farmHouse">FarmHouse</option>
        </optgroup>
        <optgroup label="Commercial Properties">
          <option value="officeSpace">Office Space</option>
          <option value="shop">Shop</option>
          <option value="showroom">Showroom</option>
          <option value="commercialLand">commercialLand</option>
         
          <option value="industrialLand">industrialLand</option>
          <option value="restaurantSpace">restaurantSpace</option>
       
          <option value="warehouse">warehouse</option>
        </optgroup>
      </>
    )}

    {/* For Rent Options */}
    {activeTab === "forRent" && (
      <>
        <optgroup label="Residential Properties">
          <option value="residential">residential</option>
          
        </optgroup>
        <optgroup label="Commercial Properties">
          <option value="officeSpace">officeSpace</option>
          <option value="Warehouse">Warehouse</option>
          <option value="showroom">Showroom</option>
          <option value="RestaurantforRent">Restaurant for Rent</option>
          <option value="SpaceForInstitute">Space for Institute</option>
         
        </optgroup>
      </>
    )}
  </select>
</div>


 <div className="relative flex items-center mt-4 sm:mt-0">
          <div className="bg-gray-100 rounded p-1 mr-2">
            <HiMenuAlt2
              className="text-blue-950 cursor-pointer"
              size={24}
              onClick={() => setIsDialogOpen(!isDialogOpen)}
            />
          </div>
<div className="relative flex items-center">
            <div className="absolute left-2">
              <img src={Location} alt="location" className="h-6 w-6" />
            </div>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="bg-gray-100 rounded pl-10 pr-2 py-1 focus:outline-none"
              placeholder="Enter Address"
              onKeyPress={(e) => e.key === "Enter" && handleFilter()}
            />
            {address && (
              <AiOutlineClose
                className="absolute right-2 cursor-pointer text-red-500"
                size={20}
                onClick={clearFilters}
              />
            )}
          </div>

         
          {isDialogOpen && (
            <div className="absolute md:right-20 top-8 z-10 w-48 bg-white border border-gray-200 shadow-lg rounded mt-2 p-4">
              <h3 className="text-lg font-semibold mb-2">Enter Price Range</h3>
              <div className="flex flex-col mb-2">
                <label className="block mb-1">Min Price:</label>
                <input
                  type="number"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="border border-gray-300 rounded p-1 mb-2"
                  placeholder="Enter min price"
                />
                <label className="block mb-1">Max Price:</label>
                <input
                  type="number"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="border border-gray-300 rounded p-1"
                  placeholder="Enter max price"
                />
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleFilter}
                  className="bg-blue-950 text-white py-2 rounded mt-2 w-16"
                >
                  Filter
                </button>
                <button
                  onClick={clearFilters}
                  className="bg-gray-300 text-gray-800 py-2 rounded mt-2 w-16"
                >
                  Clear
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Render the projects */}
      {renderProjects()}
    </div>
  );
};

export default Property;
