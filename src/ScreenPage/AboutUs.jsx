import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
import FormComponets from "./FormComponets";
import AboutBanner from "../assets/about.webp"
import CurvShape from "../assets/curvshape.webp";
import Energry from "../assets/sustainable-energy.png";
import grass from "../assets/grass.png";
import Roof from "../assets/bamboo.png";
import water from "../assets/nature.png";
import leaf from "../assets/leaf.png";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from 'react';
const AboutUs = () => {
  const faqData = [
    {
      question: "Energy Efficient Technology",
      icon: Energry,
      answer: "Embrace sustainability with smart insulation, LED lighting, and energy-efficient appliances for a greener living experience.",
      image: "https://ultra-condominium.b-cdn.net/wp-content/uploads/sites/7/2023/04/kind-to-people-1000x720.jpg"
    },
    {
      question: "Natural Materials",
      icon: grass,
      answer: "Adorned with natural materials like responsibly sourced wood and stone accents, blending modern design with organic beauty.",
      image: "https://ultra-condominium.b-cdn.net/wp-content/uploads/sites/7/2023/04/kind-to-nature-1000x720.jpg"
    },
    {
      question: "Green Roofs",
      icon: Roof,
      answer: "Our condominium feature innovative green roofs, creating a harmonious blend of nature and urban living.",
      image: "https://ultra-condominium.b-cdn.net/wp-content/uploads/sites/7/2023/04/kind-to-nature-1000x720.jpg"
    },
    {
      question: "Water Preservation",
      icon: water,
      answer: "Experience our dedication to water preservation through innovative technologies and practices, ensuring a sustainable and eco-friendly living environment.",
      image: "https://ultra-condominium.b-cdn.net/wp-content/uploads/sites/7/2023/04/kind-to-people-1000x720.jpg"
    },
    {
      question: "Protecting Biodiversity",
      icon: leaf,
      answer: "Through conscious planning and sustainable landscaping, we create a nurturing habitat for diverse flora and fauna.",
      image: "https://ultra-condominium.b-cdn.net/wp-content/uploads/sites/7/2023/04/kind-to-nature-1000x720.jpg"
    }
  ];
  const [openIndex, setOpenIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0); 
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    setSelectedImageIndex(index); 
  };
 const handleNext = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % faqData.length);
    setOpenIndex((prevIndex) => (prevIndex + 1) % faqData.length); // Update openIndex to sync FAQ and image
  };
const handlePrev = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + faqData.length) % faqData.length);
    setOpenIndex((prevIndex) => (prevIndex - 1 + faqData.length) % faqData.length); // Update openIndex to sync FAQ and image
  };
return (
   <>
   <section>
     <div className="relative">
          <div className="flex flex-col md:flex-row" >
  <img
    src={AboutBanner}
    alt="AboutBanner"
    className="md:w-1/2 md:h-1/2 w-full h-72"
  />
  <img
    src={AboutBanner}
    alt="/AboutBanner"
    className="hidden md:block w-1/2 h-1/2"
  />
</div>

  {/* Overlaying Text */}
  <div className="absolute inset-0 flex flex-col items-center md:pt-16 pt-4 text-blue-950 text-center">
    <h1 className="text-2xl md:text-3xl font-semibold text-blue-950">About Us</h1>
    <p className="md:mt-3 text-md md:text-lg max-w-4xl text-center relative p-3 font-normal" data-aos="fade-down">
  <ImQuotesLeft className="inline-block align-top md:text-xl  mr-2 " />
  Welcome to our real estate platform, where we help you find the perfect property that fits your needs. With years of experience and a commitment to excellence, we ensure that your property journey is smooth and successful. Let us guide you in finding your dream home.
  <ImQuotesRight className="inline-block align-bottom md:text-3xl text-2xl pb-2" />
</p>


  </div>
</div>
   </section>
   <section>
   <div className="flex">
   <div className="md:-mt-32 -mt-16 relative z-10" >
        <img src={CurvShape} alt="CurvShape"/>
    </div>
    <div className="-mt-32 relative z-10 md:block hidden">
        <img src={CurvShape} alt="CurvShape"/>
    </div>
   </div>
   </section>
   <section>
    <div className="grid md:grid-cols-2 grid-cols-1 bg-blue-950 text-white">
    <div data-aos="fade-up">
           <img src="https://www.pluxa-knowledge.co.uk/wp-content/uploads/2021/05/Untitled-design-29-770x400.png" alt="About Story"
           className="md:mt-28 mt-4 p-4 md:h-96 md:w-11/12 h-60 w-96"
           />
        </div>
        <div className="md:pt-24 md:pb-24 md:pr-28 p-5" data-aos="fade-down">
            <p className="md:text-md text-2xl font-semibold">Our Story</p>
            <p className="pt-4 font-extralight tracking-wider">At Real Estate, we pride ourselves on being a leading real estate company dedicated to providing exceptional service and personalized solutions for all your property needs. Whether you are buying, selling, or investing, our team of experienced professionals is committed to guiding you through every step of the process. With a deep understanding of the market and a focus on your satisfaction, we make finding your dream home or perfect investment a seamless experience.</p>
            <p className="pt-4 font-extralight tracking-wider">Our company is built on the foundation of trust, transparency, and a passion for real estate. Over the years, we have developed strong relationships with clients, partners, and local communities, allowing us to offer unique insights and opportunities. Our extensive portfolio includes residential homes, commercial properties, and luxurious estates, catering to a wide range of preferences and budgets. We believe in going beyond just transactions – we strive to create long-lasting relationships that help you build a secure and prosperous future.</p>
            <p></p>
        </div>
    </div>
   </section>
   <section>
  <div className="relative text-center">
  <p className="md:pt-12 pt-6 md:pb-4  pb-2 md:text-3xl text-xl font-medium">
    Kind to Both - Nature & People
  </p>
  <p className="absolute left-1/2 transform -translate-x-1/2 w-36 border-b-2 border-blue-950 bottom-0 mt-2"></p>
</div>



  <div
 
  className="faq-section grid grid-cols-1 md:grid-cols-2 gap-4 pb-7 md:ml-24 md:mr-24 ml-4 mr-4 md:mt-16 mt-6">
     
      <div className="faq-list"  data-aos="fade-up">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item border-b md:p-2 p-1 mb-5">
            <h3 
              className={`faq-question cursor-pointer md:text-lg text-md font-semibold py-2 flex justify-start items-center pl-2 pr-3 ${openIndex === index ? 'text-blue-950' : 'text-black'}`} 
              onClick={() => toggleFAQ(index)}
            >
              <span>
                <img src={faq.icon} alt="Icon" className="inline-block md:w-8 md:h-8 h-6 w-6 mr-4" />
                {faq.question}
              </span>
            </h3>
            {openIndex === index && (
              <p className="faq-answer text-gray-700 pl-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

      {/* Image Part with Next/Prev Arrows at the bottom */}
      <div className="faq-image  md:flex flex-col items-center justify-center relative"  data-aos="fade-up">
        <img src={faqData[selectedImageIndex].image} alt="FAQ" className="w-full h-auto " />
        
        {/* Arrows at the bottom */}
        <div className="absolute md:bottom-6 bottom-3 flex justify-start w-full ">
          <button
            onClick={handlePrev}
            className="bg-gray-200 md:p-4 p-2 border-r border-gray-400 hover:bg-white"
          >
          <FaArrowLeftLong className='text-xl '/>

          </button>
          <button
            onClick={handleNext}
            className="bg-gray-200 md:p-4 p-2 hover:bg-white"
          >
           <FaArrowRightLong className='text-xl' />

          </button>
        </div>
      </div>
    </div>
  </section>
  <section
  className=" bg-cover md:bg-center bg-no-repeat md:mt-12 md:mb-12 mt-5 mb-5 md:pt-12 md:pb-12 pt-4 pb-4 "
  style={{
    backgroundImage:
      "url('https://img.freepik.com/premium-photo/eucalyptus-composition-pattern-made-various-colorful-flowers-white-background-flat-lay-stiil-life_120872-29331.jpg?w=900')",
    
  }}>
<div className="bg-opacity-75 md:pl-24 pl-8 md:pb-10 pb-3 md:mt-12 mt-4 rounded-lg">
    <p className="font-medium md:text-3xl text-2xl">What</p>
    <p className="font-medium md:text-3xl text-2xl">We Value</p>
  </div>

  <div
    className="grid md:grid-cols-3 grid-cols-1 md:gap-16 gap-4 md:pl-24 md:pr-24 pl-8 pr-8 mb-12 pt-6 pb-6 bg-opacity-75 rounded-lg"
    data-aos="fade-down"
  >
    <div className="bg-slate-50   p-3 rounded">
      <p className="font-bold text-blue-950 text-xl pb-2">Transparency</p>
      <p>
        Honesty and clarity are at the core of all that we do here at Avenue Realty. We ensure that every customer knows as much as we do about their valuable investments with us.
      </p>
    </div>
    <div className="bg-slate-50   p-3 rounded">
      <p className="font-bold text-blue-950 text-xl pb-2">Reliability</p>
      <p>
        From delivering on promises on time, every time to always being at your service, Avenue Realty is a brand that’s synonymous with reliability.
      </p>
    </div>
    <div className="bg-slate-50   p-3 rounded">
      <p className="font-bold text-blue-950 text-xl pb-2">Professionalism</p>
      <p>
        Whether it is at the development and construction level or customer service, we take immense pride in our professional conduct throughout your investment journey with us.
      </p>
    </div>
  </div>
</section>

   <FormComponets/>
</>

  )
}

export default AboutUs