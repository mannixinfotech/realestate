import { useEffect } from "react";
import 'animate.css';
import AOS from 'aos'; 
import 'aos/dist/aos.css';
import FormBanner from "../assets/formbanner.webp";
const FormComponets = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
         once:true,
        });
      }, []);
  return (
    <div>
        <section>
<div className="md:p-24 pt-12 p-5">
  <p className="text-center md:text-2xl font-semibold  text-xl text-blue-950">We’d Love To Hear From You!</p>
  <div className="grid grid-cols-1 md:grid-cols-2" data-aos="fade-right">
   <div className="flex items-center justify-center " >
      <img src={FormBanner} alt="Form Banner" className="md:w-full md:h-auto w-96 h-80" />
    </div>
<div className="flex items-center md:px-24" data-aos="fade-up">
    <form className="bg-blue-950 p-6 rounded-lg shadow-md w-full max-w-sm pt-12 pb-12">
<div className="mb-4">
    <label htmlFor="name" className="block text-white mb-1">Your Name:</label>
    <input
      type="text"
      name="name"
      id="name"
      placeholder="Your Name..."
      required
      className="form-input w-full border rounded-md p-2 bg-gray-100"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="email" className="block text-white mb-1">Your Email:</label>
    <input
      type="email"
      name="email"
      id="email" 
      placeholder="Your Email..."
      required
      className="form-input w-full border rounded-md p-2 bg-gray-100 "
    />
  </div>
 <div className="mb-4">
    <label htmlFor="phone" className="block text-white mb-1">Your Phone:</label>
    <input
      type="tel"
      name="phone"
      id="phone" 
      placeholder="Your Phone..."
      required
      className="form-input w-full border rounded-md p-2  bg-gray-100 "
    />
  </div>
  <div className="pt-4">
    <button type="submit" className="btn btn-success w-full py-2 font-bold uppercase bg-gray-100  rounded-md text-blue-950 transition">
      Submit
    </button>
  </div>
</form>
 </div>
  </div>
</div>
</section>
    </div>
  )
}

export default FormComponets