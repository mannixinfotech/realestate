import FormComponets from "./FormComponets";
import 'animate.css';
import AOS from 'aos'; 
import 'aos/dist/aos.css';

import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useEffect } from "react";

const cardData = [
  {
    title: "Contact",
    description: "+91 9898989898",
    icon: <BiSolidPhoneCall className="md:text-6xl text-4xl text-white mx-auto pt-1" />, // Icon for the first card
  },
  {
    title: "Email",
    description: "realestate@gmail.com",
    icon: <MdEmail className="md:text-5xl text-4xl text-white mx-auto pt-1" />, // Icon for the second card
  },
  {
    title: "Address",
    description: "Nikol Ahmedabad",
    icon: <FaLocationDot className="md:text-4xl text-3xl text-white mx-auto pt-1" />, // Icon for the third card
  },
];

const ContactUs = () => {
  // useEffect is placed inside the component
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true,
    });
  }, []);

  return (
    <div>
      <section>
        <p className="text-center font-semibold md:text-2xl text-xl text-blue-950 md:m-5 md:mt-12 mt-6">
        We are here to help you!
        </p>
        <div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-16 md:pl-40 md:pr-40 pl-10 pr-10 pt-16 pb-6"
          >
            {cardData.map((card, index) => (
              <div
                key={index}
                className="bg-gray-100 text-center p-4 relative overflow-visible hover:translate-y-6 transition-transform duration-300"
                data-aos="fade-down"
              >
                <div className="border border-blue-950 md:w-20 md:h-16 w-14 h-14 absolute left-1/2 transform -translate-x-1/2 -top-8 flex items-center justify-center">
                  <div className="bg-blue-950 md:w-[90%] md:h-[90%] w-[80%] h-[80%] flex items-center justify-center">
                    {card.icon}
                  </div>
                </div>

                <h2 className="font-bold md:text-lg mt-12">{card.title}</h2>
                <p className="p-2">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Include the Form Components */}
      <FormComponets />
    </div>
  );
};

export default ContactUs;
