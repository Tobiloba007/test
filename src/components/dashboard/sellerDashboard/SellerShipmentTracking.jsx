import React from 'react'
import { IoSearch } from "react-icons/io5";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const SellerShipmentTracking = () => {

    const mapStyles = {
        height: '450px',
        width: '100%',
      };

      const initialDestination = { lat: 40.7128, lng: -74.0060 }; // Example coordinates
      const finalDestination = { lat: 34.0522, lng: -118.2437 };  // Example coordinates
    
      const defaultCenter = {
        lat: (initialDestination.lat + finalDestination.lat) / 2,
        lng: (initialDestination.lng + finalDestination.lng) / 2,
      };

  return (
    <div className='flex flex-col items-center justify-start w-full px-5 pb-12 md:px-10 mt-28 lg:mt-0 xl:px-8 xl:py-8'>
         <div className='flex flex-col items-start justify-start w-full mt-6'>
            <p className='text-xs font-light text-[#344054] w-[85%] md:w-[50%] md:leading-5 lg:w-[55%] xl:w-[45%] xl:text-sm'>
                Insert your tracking Number and check for IRT status for deliveries En-route to You!
            </p>
            <div className='relative mt-6 w-[75%] md:w-[35%] xl:w-[27%]'>
               <input className='w-full h-10 border-[1px] border-[#dddddd] rounded-md pl-4 text-[10px] outline-black xl:h-12 xl:text-xs'
                 placeholder='Tracking Number'
               />
               <div className='absolute flex items-center justify-center w-14 h-14 bg-[#2196F3] rounded-full -top-2 -right-3 xl:w-16 xl:h-16'>
                   <IoSearch className='text-xl font-bold text-[#FFFFFF] xl:text-2xl' />
               </div>
            </div>
         </div>

         {/* SHIPMENT TRACKING MAP */}
         <div className='flex items-center justify-center w-full mt-7 lg:mt-8 xl:mt-10'>
              <LoadScript googleMapsApiKey="AIzaSyB-0Xl0XPfF2WY8RxZfHpgwAY2JjX9dZcY">
                 <GoogleMap mapContainerStyle={mapStyles} zoom={10} center={defaultCenter}>
                   <Marker position={initialDestination} label="A" />
                   <Marker position={finalDestination} label="B" />
                 </GoogleMap>
              </LoadScript>
         </div>
    </div>
  )
}

export default SellerShipmentTracking
