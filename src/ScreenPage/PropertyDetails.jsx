import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Location from "../assets/location.webp";
import Modal from "react-modal"; // Ensure Modal is imported
import {  FaChevronUp } from 'react-icons/fa'; 
import { FaChevronDown } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import FormComponets from "./FormComponets";
import { IoIosArrowDroprightCircle } from "react-icons/io";


function ProjectDetails({projectData}) {
  const { id , name } = useParams();

  const [project, setProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(0);
  const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };

  const handlePageRedirect = () => {
    navigate("/property");
    window.scroll(0, 0);
  };

  useEffect(() => {
    // Accessing all nested project arrays from forSale and forRent
    const allProjects = [
      ...Object.values(projectData.forSale.residential).flat(),
      ...Object.values(projectData.forSale.commercial).flat(),
      ...Object.values(projectData.forRent.residential).flat(),
      ...Object.values(projectData.forRent.commercial).flat()
    ];
  
    // Finding the specific project by ID
    const foundProject = allProjects.find((proj) => proj.id === parseInt(id));
    if (foundProject) {
      setProject(foundProject);
    }
  }, [id, projectData]);
  

  if (!project) return <p>Loading...</p>;

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const changeMainImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
   <>
    <div className="p-4">
      <h1 className="text-xl font-bold px-2">{project.name}</h1>
      <div className="flex gap-2 m-2">
        <img src={Location} alt="location" className="h-6 w-6" />
        <p>Jaipur</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {/* Main image */}
        <div className="col-span-2 md:col-span-1">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Additional images */}
        <div className="col-span-2 md:col-span-1 grid grid-cols-2 gap-3">
          {project.additionalImages &&
            project.additionalImages.length > 0 &&
            project.additionalImages.slice(0, 4).map((image, index) => (
              <div
                key={index}
                className="relative w-full cursor-pointer"
                onClick={() => openModal(index)}
              >
                <img
                  src={image}
                  alt={`${project.name} - ${index + 1}`}
                  className={`w-full md:h-56 h-28 object-cover rounded-lg ${
                    index === 3 ? "opacity-50" : ""
                  }`} // Apply opacity to the last image
                />
                {index === 3 && (
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-3xl bg-black bg-opacity-50 rounded-lg">
                    +{project.additionalImages.length - 3}
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>

      {/* Project details */}
      <div className="mt-4 border rounded">
        <p className="text-xl p-2 font-medium bg-gray-200 border-blue-950 rounded pl-5">Property Overview</p>
      <div className="font-normal text-lg pt-4 pl-4">
          <span className="font-bold text-md">Project Name:</span> {project.name}
        </div>
        <div className="font-normal text-lg pt-2 pl-4">
          <span className="font-bold text-md">Property Type:</span>{" "}
          {project.type}
        </div>
        <div className="font-normal text-lg pt-2 pl-4 ">
          <span className="font-bold text-md">Area Range:</span> {project.area}
        </div>
        <div className="font-normal text-lg pt-2 pl-4">
          <span className="font-bold text-md">Price:</span> {project.price}
        </div>
        <div className="font-normal text-lg pt-2 pl-4">
          <span className="font-bold text-md">Sale Status:</span>{" "}
          {project.saleStatus}
        </div>
        <div className="font-normal text-lg pt-2 pl-4">
          <span className="font-bold text-md">Possession Status:</span>{" "}
          {project.PossessionStatus}
        </div>
        <div className="font-normal text-lg flex gap-2 pt-2">
        
 
</div>
<div className="mt-4">
    <p className="text-xl p-2 font-medium  bg-gray-200 pl-5">About Property Description</p>
    {project.description?.map((description, index) => (
        <div key={index} className="text-gray-700 py-1 p-4 pt-3">
         <div className="flex items-center gap-1"> {description}</div>
        </div>
      ))}
  </div>
<div className="">
    <p className="text-xl p-2 font-medium  bg-gray-200 pl-5">Features & Amenities</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 pt-2 m-5">
      {project.featuresAndAmenities?.map((feature, index) => (
        <div key={index} className="text-gray-700 py-1">
         <div className="flex items-center gap-1"> <IoIosArrowDroprightCircle />{feature}</div>
        </div>
      ))}
    </div>
  </div>
  <div className="flex flex-col md:flex-row md:pb-7 pb-3">
  {/* FAQ Section */}
  <div className="faq-section  w-full md:pr-4">
    <div className="faq-list ml-4 mr-4 mt-16">
      {project.floorPlans && project.floorPlans.map((plan, index) => (
        <div key={index} className="faq-item bg-gray-100 p-2 mb-5 rounded">
          <h3 
            className={`faq-question cursor-pointer md:text-lg text-md font-semibold py-2 flex justify-start gap-4 items-center pl-2 pr-3 ${openIndex === index ? 'text-blue-950' : 'text-black'}`} 
            onClick={() => toggleFAQ(index)}
          >
            {openIndex === index ? (
              <FaChevronUp className="text-gray-600 text-md" />
            ) : (
              <FaChevronDown className="text-gray-600 text-md" />
            )}
            <span>{plan.question}</span>
          </h3>
          {openIndex === index && (
            <img src={plan.image} alt="Floor plan" className="md:h-96 w-1/2 p-4" />
          )}
        </div>
      ))}
    </div>
  </div>


</div>
<div className="md:text-end  text-center m-2  ">
        <button
          className="bg-blue-950 text-white p-2 rounded px-2 md:mr-6 "
          onClick={handlePageRedirect}
        >
          Check Other Projects
        </button>
      </div>
      </div>
      


     
   

      {/* Modal for full-screen image viewing */}
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Image Modal"
          style={{
            overlay: { backgroundColor: "rgba(0, 0, 0, 0.75)" },
            content: {
              inset: "10%",
              background: "black",
              borderRadius: "10px",
              padding: "0",
            },
          }}
        >
          <div className="relative p-4">
            {/* Main large image */}
            <div className="flex justify-center items-center mb-4">
              <img
                src={project.additionalImages[currentImageIndex]}
                alt={`Full view - ${currentImageIndex + 1}`}
                className="md:w-1/2 md:h-96 h-60 w-full object-cover rounded-lg"
              />
            </div>

            {/* Thumbnails of all images */}
            <div className="flex  flex-wrap md:flex-nowrap md:justify-center justify-self-auto gap-2 overflow-x-auto">
              {project.additionalImages.map((image, index) => (
                <div
                  key={index}
                  className="relative cursor-pointer"
                  onClick={() => changeMainImage(index)}
                >
                  <img
                    src={image}
                    alt={`Thumbnail - ${index + 1}`}
                    className={`md:h-36 md:w-72 h-20 w-32 object-cover rounded-lg ${
                      currentImageIndex === index ? " ring-white" : ""
                    }`}
                  />
                </div>
              ))}
            </div>

            {/* Close Button */}
            <div className="absolute top-4 right-4">
              <button onClick={closeModal} className="text-white text-xl">
                Close
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
    <FormComponets/>
   </>
  );
}

export default ProjectDetails;
