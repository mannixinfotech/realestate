import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaMapMarkerAlt, FaEnvelope, FaRegArrowAltCircleUp } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { useState, useEffect } from "react";
import footerbg from "../assets/footerbg.webp";
const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
const scrollToTop = () => {
    const scrollDuration = 1000; 
    const scrollStep = -window.scrollY / (scrollDuration / 15); 
  const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
return (
    <div>
      <div className="flex flex-col md:flex-row">
        <img
          src={footerbg}
          alt="footerbg"
          className="w-full md:w-1/2"
        />
        <img
          src={footerbg}
          alt="/footerbg"
          className="hidden md:block w-full md:w-1/2"
        />
      </div>
      <div className="bg-gray-100 md:pb-12 pb-5">
        <div className="grid md:grid-cols-5 grid-cols-1 md:pl-20 md:pr-20 pl-4 pr-4">
          <div className="pt-10">
            <p className="md:text-2xl text-xl text-blue-950 font-bold">Real Estate</p>
            <p className="pt-3">Your trusted partner in finding the perfect property to call home.</p>
            <div className="flex gap-2 pt-4">
              <FaFacebookSquare className="text-3xl text-blue-950" />
              <FaLinkedin className="text-3xl text-blue-950" />
              <FaInstagramSquare className="text-3xl text-blue-950" />
            </div>
          </div>
          <div className="md:pt-10 pt-5 md:text-center">
            <p className="text-blue-950 md:text-xl font-semibold">Information</p>
            <ul className="pt-2">
              <a href="/"><li>Home</li></a>
             <a href="/about"><li>About</li></a>
              <a href="/contact"><li>Contact</li></a>
            </ul>
          </div>
          {/* <div className="md:pt-10 pt-5 md:text-center">
            <p className="text-blue-950 md:text-xl font-semibold">Project</p>
            <ul className="pt-2">
              <a href="/property"><li>Ongoing Projects</li></a>
             <a href="/property"> <li>Upcoming Projects</li></a>
             <a href="/property"> <li>All Projects</li></a>
            </ul>
          </div> */}
          <div className="md:pt-10 pt-5 ">
          <p className="text-blue-950 md:text-xl font-semibold">Property For Sale</p>
            <p className="font-bold pt-3"> - Residential Property For Sale</p>
            <ul className="pt-2">
              <a href="/Property-Sale-Residential"><li> - ResidentialPlot</li></a>
              <a href="/Property-Sale-villa"><li> - Villa</li></a>
               <a href="/Property-Sale-apartmentFlat"><li> - ApartmentFlat</li></a>
              <a href="/Property-Sale-builderFloor"><li> - BuilderFloor</li></a>
              <a href="/Property-Sale-farmHouse"><li> - FarmHouse</li></a>
             
            </ul>
            
            <p className="font-bold pt-3"> - Commercial Property for Sale</p>
            <ul className="pt-2">
              <a href="/Property-Sale-OfficeSpace"><li> - Office Space</li></a>
              <a href="/Property-Sale-Shop"><li> - Shop</li></a>
              <a href="/Property-Sale-Showroom"><li> - Showroom</li></a>
              <a href="/Property-Sale-commercialLand"><li> - commercialLand</li></a>
              <a href="/Property-Sale-industrialLand"><li> - Industrial Land</li></a>
              <a href="/Property-Sale-RestaurantSpace"><li> - Restaurant Space</li></a>
              <a href="/Property-Sale-Warehouse"><li> - Warehouse</li></a>
            </ul>
          </div>
          <div className="md:pt-10 pt-5 ">
            <p className="text-blue-950 md:text-xl font-semibold">Property For Rent</p>
            <p className="font-bold pt-3"> - Commercial Property for Rent</p>
            <ul className="pt-2">
              <a href="/Property-Rent-OfficeSpace"><li> - Office Space</li></a>
              <a href="/Property-Rent-Warehouse"><li> - Warehouse | Godown</li></a>
              <a href="/Property-Rent-Showroom"><li> - Showroom</li></a>
              <a href="/Property-Rent-RestaurantSpace"><li> - Restaurant For Rent</li></a>
              <a href="/Property-Rent-IT"><li> - Space For Institute / IT Company</li></a>
             
            </ul>
            <p className="font-bold pt-3"> - Residential Property for Rent</p>
            <ul className="pt-2">
              <a href="/Property-Rent-Residential"><li> - Residential</li></a>
             
             
            </ul>
          </div>
          <div className="">
            <ul className="list-none md:pt-10 pt-5 md:px-6">
              <li className="flex items-center mb-2">
                <FaMapMarkerAlt className="text-blue-950 mr-2 text-xl" />
                123 Main Street, City, Country
              </li>
              <li className="flex items-center mb-2">
                <MdCall className="text-blue-950 mr-2 text-xl" />
                (123) 456-7890
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-blue-950 mr-2 text-xl" />
                <a href="mailto:info@example.com" className="text-blue-950 hover:underline">
                  info@example.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-blue-950 text-white text-center py-4">
        <p>© {new Date().getFullYear()} Mannix Infotech Solutions</p>
      </div>
{isVisible && (
        <div
          className="fixed bottom-16 right-5 bg-blue-950 md:p-3 p-1 rounded-full cursor-pointer"
          onClick={scrollToTop}
        >
          <FaRegArrowAltCircleUp className="text-gray-100 text-3xl" />
        </div>
      )}
    </div>
  );
};

export default Footer;
