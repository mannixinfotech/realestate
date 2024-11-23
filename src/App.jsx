import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import './App.css'
import Header from './Componets/Header'
import HomePage from './ScreenPage/HomePage'
import Footer from './Componets/Footer'
import AboutUs from './ScreenPage/AboutUs'
import ContactUs from './ScreenPage/ContactUs'
import Property from './ScreenPage/Property'
import PropertyDetails from './ScreenPage/PropertyDetails'
import projectData from "./ScreenPage/Property.json";
import PropertySaleOfficeSpace from "./ScreenPage/PropertySaleOfficeSpace"
import PropertySaleShop from "./ScreenPage/PropertySaleShop";
import PropertySaleShowroom from "./ScreenPage/PropertySaleShowroom";
import PropertySaleLand from "./ScreenPage/PropertySaleLand";
import PropertySaleIndustrial from "./ScreenPage/PropertySaleIndustrial";
import PropertySaleRestaurant from "./ScreenPage/PropertySaleRestaurantSpace";
import PropertySaleWarehouse from "./ScreenPage/PropertySaleWarehouse";
import PropertySaleResidential from "./ScreenPage/PropertySaleResidential";
import PropertySaleVilla from "./ScreenPage/PropertySaleVilla";
import PropertySaleApartment from "./ScreenPage/PropertySaleApartment";
import PropertySaleBuilder from "./ScreenPage/PropertySaleBuilder";
import PropertySaleFarmHouse from "./ScreenPage/PropertySaleFarmHouse";
import PropertyRentOfficeSpace from "./ScreenPage/PropertyRentOfficeSpce"
import PropertyRentWarehouse from "./ScreenPage/PropertyRentWarehouse"
import PropertyRentShowroom from "./ScreenPage/PropertyRentShowrrom"
import PropertyRentRestaurant from "./ScreenPage/PropertyRentRestaurant"
import PropertyRentIT from "./ScreenPage/PropertyRentIT"
import PropertyRentResidential from "./ScreenPage/PropertyRentResidetial";


function App() {
 

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/property' element={<Property />}/>
        <Route path='/property-details/:name/:id' element={<PropertyDetails projectData={projectData} />}/>
        <Route path='/Property-Sale-OfficeSpace' element={<PropertySaleOfficeSpace/>}/>
        <Route path='/Property-Sale-Shop' element={<PropertySaleShop/>}/>
        <Route path='/Property-Sale-Showroom' element={<PropertySaleShowroom/>}/>
        <Route path='/Property-Sale-commercialLand' element={<PropertySaleLand/>}/>
        <Route path='/Property-Sale-industrialLand' element={<PropertySaleIndustrial/>}/>
        <Route path='/Property-Sale-RestaurantSpace' element={<PropertySaleRestaurant/>}/>
        <Route path='/Property-Sale-Warehouse' element={<PropertySaleWarehouse/>}/>
        <Route path='/Property-Sale-Residential' element={<PropertySaleResidential/>}/>
        <Route path='/Property-Sale-villa' element={<PropertySaleVilla/>}/>
        <Route path='/Property-sale-ApartmentFlat' element={<PropertySaleApartment/>}/>
        <Route path='/Property-Sale-builderFloor' element={<PropertySaleBuilder/>}/>
        <Route path='/Property-Sale-farmHouse' element={<PropertySaleFarmHouse/>}/>
        <Route path='/Property-Rent-OfficeSpace' element={<PropertyRentOfficeSpace/>}/>
        <Route path='/Property-Rent-Warehouse' element={<PropertyRentWarehouse/>}/>
        <Route path='/Property-Rent-Showroom' element={<PropertyRentShowroom/>}/>
        <Route path='/Property-Rent-RestaurantSpace' element={<PropertyRentRestaurant/>}/>
        <Route path='/Property-Rent-IT' element={<PropertyRentIT/>}/>
        <Route path='/Property-Rent-Residential' element={<PropertyRentResidential/>}/>
      
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
