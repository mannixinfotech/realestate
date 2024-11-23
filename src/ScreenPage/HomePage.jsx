import {
    Button,
    Card,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
  } from "@material-tailwind/react";
  import { useEffect, useState } from "react"; // Import useState for managing state
  import { FaAngleDown, FaAngleUp } from "react-icons/fa";
  import { IoSearch } from "react-icons/io5";
import 'animate.css';
import AOS from 'aos'; 
import 'aos/dist/aos.css';
import { GoPaperclip } from "react-icons/go";
import Curv from "../assets/curv.webp"
import HomeBanner from "../assets/homebanner.webp";
import { AiOutlineHome, AiOutlineDollarCircle, AiOutlineUser } from 'react-icons/ai'; // Import other icons
import FormComponets from "./FormComponets";
import homeEvalution from "../assets/homeEvalution.webp";
import knowMore from "../assets/knowMore.webp";
import counterBg from "../assets/counterbg.webp";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

const properties = [
  {
    id: 1,
    title: 'Property For Sell Residential',
    imgSrc: '/forsaleapartmentFlat1.webp',
    link: './',
   
    location: 'Jaipur',
    areaType: 'Plot',
  },
  {
    id: 2,
    title: 'Property For Sell Commercial',
    imgSrc: '/forSellofficeSpace8.webp',
    link: './',
    bhk: '4, 5 Bhk',
    location: 'Gantotri Road',
    areaType: 'Luxury Flats',
  },
  {
    id: 3,
    title: 'Property For Rent Residential',
    imgSrc: '/forSellcommercialLand1.webp',
    link: './',
    bhk: '4, 5 Bhk',
    location: 'Gantotri Road',
    areaType: 'Luxury Flats',
  },
  {
    id: 4,
    title: 'Property For rent Commercial',
    imgSrc: '/forRentShowroom1.webp',
    link: './',
    bhk: '4, 5 Bhk',
    location: 'Gantotri Road',
    areaType: 'Luxury Flats',
  },
 
];
const cardData = [
  {
    title: "Best Property Suggestions",
    description: "Looking to buy or invest in a property? We assure the best deals as per your requirement & budget.",
    icon: <AiOutlineHome className="md:text-6xl text-5xl text-white mx-auto pt-1" />, // Icon for the first card
  },
  {
    title: "Affordable Pricing",
    description: "Get access to affordable property pricing and budget-friendly investments in real estate.",
    icon: <AiOutlineDollarCircle className="md:text-6xl text-5xl text-white mx-auto pt-1" />, // Icon for the second card
  },
  {
    title: "Expert Guidance",
    description: "Receive expert guidance for all your property needs, from buying to renting and investment opportunities.",
    icon: <AiOutlineUser className="md:text-6xl text-5xl text-white mx-auto pt-1" />, // Icon for the third card
  },
];
  const HomePage = () => {
    const sections = [
      {
        id:1,
        img:"/channelLogo1.png",
        
      },
      {
        id:2,
        img: "/channelLogo2.png",
       
      },
      {
        id:3,
        img: "/channelLogo3.png",
        
      },
    
      {
        id:4,
        img: "/channelLogo4.png",
        
      },
      {
        id:5,
        img:"/channelLogo5.png",
       
      },
    
    ];
    const settings = {
      dots: false, 
      infinite: true,
      autoplay: true,
      speed: 1000,
      slidesToShow: 5,
     slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
    const [propertyType, setPropertyType] = useState("Property Type");
    const [propertyFor, setPropertyFor] = useState("Property For");
    const [sortBy, setSortBy] = useState("Sort By");
const [isPropertyTypeOpen, setIsPropertyTypeOpen] = useState(false);
    const [isPropertyForOpen, setIsPropertyForOpen] = useState(false);
    const [isSortByOpen, setIsSortByOpen] = useState(false);
    const navigate=useNavigate();
    const handleSearch = (e) => {
      e.preventDefault();
    if (propertyType === "Property Type" || propertyFor === "Property For" || sortBy === "Sort By") {
        toast.error("Please select all required fields", {
          position: "top-right",
          autoClose: 3000,
          style: {
            backgroundColor: "#172554", 
            color: "white", 
            fontWeight: "bold",
          },
        });
         return; 
      }
    navigate('/property');
     window.scroll(0,0);
    };
    useEffect(() => {
        AOS.init({
          duration: 1000, 
         once:true,
        });
      }, []);
      const handleMore=()=>
      {
        navigate("/about");
        window.scroll(0,0);
      }
      const handleRequest=()=>
      {
        navigate("/contact");
        window.scroll(0,0);
      }
    return (
    <>
      <section>
        <div className="relative bg-black">
        <img
          src={HomeBanner}
          className="w-full opacity-60 md:h-[600px] h-96 object-cover"
          alt="HomeBanner"
        />
        <div className="absolute  inset-0 flex justify-center items-center animate__zoomIn animate__animated">
          <Card color="transparent" shadow={false}>
            <p className="text-white md:text-3xl text-xl font-bold text-center">
              Everything you need in the real estate market
            </p>
            <form
              className=" mb-2 w-full flex flex-col gap-4 rounded p-5"
              onSubmit={handleSearch}
            >
              <div className="flex flex-col md:flex-row gap-4 p-4 rounded"
               style={{ backgroundColor: "rgba(229, 231, 235, 0.5)" }}
              >
               <Menu
                  animate={{ mount: { y: 0 }, unmount: { y: 25 } }}
                  onOpen={() => setIsPropertyTypeOpen(true)}
                  onClose={() => setIsPropertyTypeOpen(false)}
                >
                  <MenuHandler>
                    <Button
                      className={`rounded w-full md:w-80 p-1 text-left flex justify-between pl-3 pr-3 h-10 items-center ${
                        propertyType === "Property Type"
                          ? "text-gray-400 capitalize" 
                          : "text-white  capitalize" 
                      } bg-blue-950`}
                    >
                      {propertyType}
                      <span className="ml-2">
                        {isPropertyTypeOpen ? (
                          <FaAngleUp className="text-xl" />
                        ) : (
                          <FaAngleDown className="text-xl" />
                        )}
                      </span>
                    </Button>
                  </MenuHandler>
                  <MenuList className="w-4/5 md:w-80 mt-0 rounded">
                    <MenuItem
                      className="hover:bg-slate-100 p-1 font-medium text-base hover:outline-none"
                      onClick={() => {
                        setPropertyType("Industrial");
                        setIsPropertyTypeOpen(false);
                      }}
                    >
                      Industrial
                    </MenuItem>
                    <MenuItem
                      className="hover:bg-slate-100 p-1 font-medium text-base  hover:outline-none"
                      onClick={() => {
                        setPropertyType("Commercial");
                        setIsPropertyTypeOpen(false);
                      }}
                    >
                      Commercial
                    </MenuItem>
                    <MenuItem
                      className="hover:bg-slate-100 p-1 font-medium text-base  hover:outline-none"
                      onClick={() => {
                        setPropertyType("Residential");
                        setIsPropertyTypeOpen(false);
                      }}
                    >
                      Residential
                    </MenuItem>
                  </MenuList>
                </Menu>
                <Menu
                  animate={{ mount: { y: 0 }, unmount: { y: 25 } }}
                  onOpen={() => setIsPropertyForOpen(true)}
                  onClose={() => setIsPropertyForOpen(false)}
                >
                  <MenuHandler>
                    <Button
                      className={`rounded w-full md:w-80 p-1 text-left flex justify-between pl-3 pr-3 h-10 items-center ${
                        propertyFor === "Property For"
                          ? "text-gray-400 capitalize"
                          : "text-white capitalize"
                      } bg-blue-950`}
                    >
                      {propertyFor}
                      <span className="ml-2">
                        {isPropertyForOpen ? (
                          <FaAngleUp className="text-xl" />
                        ) : (
                          <FaAngleDown className="text-xl" />
                        )}
                      </span>
                    </Button>
                  </MenuHandler>
                  <MenuList className="w-4/5 md:w-80 mt-0 rounded">
                    <MenuItem
                      className="hover:bg-slate-100 p-1 font-medium text-base  hover:outline-none"
                      onClick={() => {
                        setPropertyFor("For Sale");
                        setIsPropertyForOpen(false);
                      }}
                    >
                      For Sale
                    </MenuItem>
                    <MenuItem
                      className="hover:bg-slate-100 p-1 font-medium text-base  hover:outline-none"
                      onClick={() => {
                        setPropertyFor("For Rent");
                        setIsPropertyForOpen(false);
                      }}
                    >
                      For Rent
                    </MenuItem>
                  </MenuList>
                </Menu>
<Menu
                  animate={{ mount: { y: 0 }, unmount: { y: 25 } }}
                  onOpen={() => setIsSortByOpen(true)}
                  onClose={() => setIsSortByOpen(false)}
                >
                  <MenuHandler>
                    <Button
                      className={`rounded w-full md:w-80 p-1 text-left flex justify-between pl-3 pr-3 h-10 items-center ${
                        sortBy === "Sort By"
                          ? "text-gray-400 capitalize"
                          : "text-white capitalize"
                      } bg-blue-950`}
                    >
                      {sortBy}
                      <span className="ml-2">
                        {isSortByOpen ? (
                          <FaAngleUp className="text-xl" />
                        ) : (
                          <FaAngleDown className="text-xl" />
                        )}
                      </span>
                    </Button>
                  </MenuHandler>
                  <MenuList className="w-4/5 md:w-80 mt-0 rounded">
                    <MenuItem
                      className="hover:bg-slate-100 p-1 font-medium text-base  hover:outline-none"
                      onClick={() => {
                        setSortBy("Price Low To High");
                        setIsSortByOpen(false);
                      }}
                    >
                      Price Low To High
                    </MenuItem>
                    <MenuItem
                      className="hover:bg-slate-100 p-1 font-medium text-base  hover:outline-none"
                      onClick={() => {
                        setSortBy("Price High To Low");
                        setIsSortByOpen(false);
                      }}
                    >
                      Price High To Low
                    </MenuItem>
                  </MenuList>
                </Menu>
              <div className="md:block hidden">  <button
                  type="submit"
                  className="bg-blue-950 p-2 rounded flex items-center justify-center h-10 w-10"
                >
                  <IoSearch className="text-white text-xl" /> 
                </button></div>
                <div className="md:hidden block"> 
                     <button
                  type="submit"
                  className="w-full bg-blue-950 p-2 rounded flex items-center justify-center h-10 text-white"
                >
                  Search Property
                </button></div>
              </div>
            </form>
          </Card>
        </div>
      </div>
      </section>
      <section>
        <div className="md:ml-16 grid md:grid-cols-2 grid-cols-1">
            <div className="md:p-12 p-3" data-aos="fade-up">
                <p className="text-blue-950 text-2xl md:pb-5 pb-2 font-bold">Property Evaluation</p>
                <p>Property evaluation is a crucial process in the real estate market, helping both buyers and sellers make informed decisions. It involves assessing a property's worth based on various factors, including its location, size, condition, and recent market trends. A professional evaluation provides an accurate estimate of a property's value, ensuring that sellers price their homes competitively while enabling buyers to make sound investments. Additionally, property evaluations are essential for mortgage lenders and investors, as they help determine the potential return on investment and the financial feasibility of property transactions. Ultimately, understanding property evaluation empowers stakeholders in the real estate market to navigate their options confidently and achieve their financial goals.</p>
                <button className="bg-blue-950 text-white rounded p-2 mt-3" onClick={handleRequest}>Send A Request</button>
            </div>
            <div className="md:px-24 px-12 md:pt-5" data-aos="fade-up">
                <img src={homeEvalution}
                 alt="homeEvalution"
                 loading="lazy" 
                className="md:h-96 h-72 w-96 "/>
            </div>
        </div>
      </section>
      <section>
        <div className="bg-blue-950 pb-2">
        <div className="flex flex-col md:flex-row" >
  <img
    src={Curv}
    alt="curvdesign"
    className="w-full md:w-1/2 h-auto"
    loading="lazy"
  />
  <img
    src={Curv}
    alt="curvdesign"
    loading="lazy"
    className="hidden md:block w-full md:w-1/2 h-auto"
  />
</div>
<div className="md:flex justify-around">
            <div  data-aos="fade-up">
              <img src={knowMore} alt="knowMore"
         className="md:h-96 h-72 md:mx-20 mx-auto md:w-96 w-80"
            />
               </div>
               <div 
  data-aos="fade-up"
  className="text-white md:w-96 border border-white  md:p-12 p-4 m-8 md:mr-28  rounded  hover:bg-white hover:text-blue-950  ">
  <p className="md:text-2xl text-xl font-medium">Who We Are</p>
  <p className="md:text-md text-lg pt-3">“Our obsession with quality, transparency, and reliability have been at the crux of our success in the past 6 years. It’s no wonder that our ever-growing base of happy customers always keeps coming back for more.”</p>
  <button onClick={handleMore}
   className="bg-white text-black p-2 font-semibold rounded mt-4 hover:bg-blue-950 border border-blue-950 hover:text-white ">
    Know More
  </button>
</div>
</div>
        </div>
      </section>
      <section >
              <p className="text-center font-semibold md:text-2xl text-xl text-blue-950 md:m-5 md:mt-12 mt-6">Featured Projects</p>
              <div className="container-fluid flex flex-wrap justify-center md:pb-16 pb-6">
  {properties.map((property) => (
    <div key={property.id} className=" col-xs-12 col-sm-6 col-md-4 p-4" data-aos="fade-right">
      <div className="border border-gray-200 rounded-lg shadow-lg  relative">
        <a href="/property" className="block">
        <div className="relative group overflow-hidden">
  {/* Image */}
  <img
    src={property.imgSrc}
    alt={property.title}
    loading="lazy"
    className="w-full h-auto rounded-t transform transition-transform duration-500 group-hover:scale-110 group-hover:opacity-60"
  />
  
  {/* Icon Overlay */}
  <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
  <GoPaperclip className="text-blue-950 font-bold text-3xl" />

  </div>
</div>

          <h3 className="price text-lg font-bold text-gray-700 mt-2 px-4">{property.title}</h3>
        </a>
        <div className="bottom-sec p-4">
          <div className="extra-info clearfix flex justify-between text-gray-600">
            <div className="area">
              <div className="value font-semibold">{property.bhk}</div>
              <span>{property.areaType}</span>
            </div>
            <div className="location pb-2">
              <div className="value font-semibold">{property.location}</div>
              <span>Nikol</span>
            </div>
          </div>
        </div>
        
        <a href="/property"
           className="btn more-link bg-blue-950 text-white px-4 py-2 block text-center rounded absolute left-1/2 transform -translate-x-1/2 -bottom-5 "> {/* Position absolute */}
          View Project
        </a>
      </div>
    </div>
  ))}
</div>

      </section>
      <section className="relative md:h-96 overflow-hidden pb-4 mt-12 mb-12">
 <div
    className="absolute inset-0 bg-cover  bg-center"
    style={{ backgroundImage: `url(${counterBg})` }}
  />
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
  <p className="md:text-3xl text-2xl text-white md:mb-16 mb-6 mt-4 md:mt-1">General Statistics</p>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-6xl px-4"
  data-aos="fade-up"
  >
   <div className="bg-black opacity-70 p-4 border border-black rounded-lg shadow-lg md:w-60">
      <p className="md:text-5xl text-2xl text-white">199</p>
      <p className="text-white pt-3 text-xl">Ongoing Projects</p>
    </div>
<div className="bg-black opacity-70 p-4 border border-black rounded-lg shadow-lg md:w-60">
      <p className="md:text-5xl text-2xl text-white">150</p>
      <p className="text-white pt-3 text-xl">Upcoming Projects</p>
    </div>
<div className="bg-black opacity-70 p-4 border border-black rounded-lg shadow-lg md:w-60">
      <p className="md:text-5xl text-2xl text-white">50</p>
      <p className="text-white pt-3 text-xl">Complete projects</p>
    </div>
<div className="bg-black opacity-70 p-4 border border-black rounded-lg shadow-lg md:w-60">
      <p className="md:text-5xl text-2xl text-white">10</p>
      <p className="text-white pt-3 text-xl">All Projects</p>
    </div>
  </div>
</div>
</section>
<section>
<p className="text-center font-semibold md:text-2xl text-xl text-blue-950 md:m-5 md:mt-12 mt-6">Best Deal With Us</p>
<div>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-16 md:pl-40 md:pr-40 pl-10 pr-10  pt-16 pb-6"
>
  {cardData.map((card, index) => (
        <div
        key={index}
        className="bg-gray-100 text-center p-4 relative overflow-visible hover:translate-y-6 transition-transform duration-300"
        data-aos="fade-up"
      >
        <div className="border border-blue-950 md:w-20 md:h-16 w-14 h-14 absolute left-1/2 transform -translate-x-1/2 -top-8 flex items-center justify-center">
          <div className="bg-blue-950 md:w-[90%] md:h-[90%] w-[80%] h-[80%] flex items-center justify-center">
           {card.icon}
          </div>
        </div>
      <h1 className="fs-5 mt-12">
          <p className="font-bold md:text-lg">{card.title}</p>
        </h1>
        <p className="p-2">{card.description}</p>
      </div>
      ))}
    </div>
    </div>
</section>
<section>
   <div className="container mx-auto px-4 pt-7 mt-5 relative pb-5">
   <div className="relative text-center">
  <p className="md:pt-12 pt-6 md:pb-4  pb-2 md:text-2xl text-xl font-medium">
  Authorised Channel Partners
  </p>
  <p className="absolute left-1/2 transform -translate-x-1/2 w-36 border-b-2 border-blue-950 bottom-0 mt-2"></p>
</div>

     
      <Slider {...settings}>
        {sections.map((section, index) => (
          <div
            key={index}
            className="px-2"
            
          >
            <div className="mt-2 relative w-full md:h-64 h-40 flex justify-center items-center bg-white shadow-lg overflow-hidden group">
              <div
                className="absolute inset-0 bg-cover bg-center z-0 md:m-4 m-2  transition-transform duration-500 transform group-hover:scale-110"
                style={{ backgroundImage:`url(${section.img})` }}
              >
                <div className="absolute inset-0 z-10"></div>
              </div>
            </div>
           
          </div>
        ))}
      </Slider>
    </div>
</section>
<FormComponets/>
<ToastContainer/>
    </>
    );
  };
  
  export default HomePage;
  