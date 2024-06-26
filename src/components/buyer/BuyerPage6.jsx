import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { setUserRequest } from '../../features/requests/RequestSlice';



const BuyerPage6 = ({setCount}) => {
    const slideInVariants = {
        hidden: { x: '-100%' },
        visible: { x: 0 },
      };

      const [dropdown1, setDropdown1] = useState(false);
      const [country, setCountry] = useState('Select Country');
      const [dropdown2, setDropdown2] = useState(false);
      const [state, setState] = useState('Select State');
      const [dropdown3, setDropdown3] = useState(false);
      const [city, setCity] = useState('Select City');
      const [postal, setPostal] = useState('');
      const [address, setAddress] = useState('');

      const userRequests = useSelector((state) => state.request.userRequests)

      const dispatch = useDispatch();



      const countries = ['Nigeria', 'Cameroun', 'France', 'China', 'Turkey']
      const stateLists = ['Lagos', 'kano', 'Edo', 'Nassarawa', 'Bayelsa']
      const cityLists = ['ikeja', 'ibadan', 'Edo', 'Surulere', 'Venice']

      const handleCountry = (item) => {
        setCountry(item)
      }
      
      const handleState = (item) => {
        setState(item)
      }

      const handleCity = (item) => {
        setCity(item)
      }

      const handlePostalCode = (event) => {
            setPostal(event.target.value);
          };

      const handleAddress = (event) => {
            setAddress(event.target.value);
          };

      const values = {'country': country, 'state': 'state', 'city': city, 'zip_code': postal, 'address': address}
      
      const handleSubmit = () => {
            const combinedValues4 = {...userRequests, ...values}
            dispatch(setUserRequest(combinedValues4))
            setCount(7)
      }

    

  return (
    <motion.div
    initial="hidden"
      animate="visible"
      variants={slideInVariants}
      transition={{ ease: 'easeOut', duration: 0.4 }}
      className='flex flex-col items-center justify-center w-full mt-20 pb-24 md:px-12 lg:items-start lg:pl-10 lg:mt-10 xl:pl-28 xl:mt-12'
    >
    <div className='flex flex-col items-center justify-center w-full md:flex-row-reverse lg:justify-end'>
            <p className='text-xs text-black font-normal mb-1 md:mb-0 md:ml-4 md:text-sm'>
                   95% Complete
            </p>
            <div className='flex items-center justify-start w-[80%] h-[5px] rounded-2xl bg-[#dddddd] md:h-[7px] lg:w-[60%] xl:w-[75%]'>
                  <div className='flex items-center justify-start w-[95%] h-full rounded-full bg-green-500'></div>
            </div>
    </div>
    <div className='flex flex-col items-center justify-center w-full mt-8 mb-7 md:items-center'>
                <p className='text-xl font-semibold text-center md:text-2xl md:text-start lg:w-full lg:text-start xl:text-[27px]'>
                      What is the delivery address for your purchase order?
                </p>
                <p className='text-xs text-[#667085] font-normal text-center mt-2 md:text-xs md:text-start lg:w-full lg:text-start xl:text-sm'>
                      Carefully list out the exact address in the fields below
                </p>
    </div>

    <div className='flex flex-col items-center justify-start w-[80%] lg:flex-row lg:justify-between lg:flex-wrap lg:w-full'>

          <div  onClick={()=>setDropdown1(!dropdown1)}
          className='relative flex flex-row items-center justify-between h-16 w-full border-[1px] border-[#A4A4A4] text-[#A4A4A4] rounded-lg mt-6 px-4 md:mt-8 lg:mt-5 lg:w-[47%]'>
              <div>
                <p className='text-xs text-black font-light'>
                      Country
                </p>
                <p className={`text-sm text-[#A4A4A4] font-light mt-1 lg:mt-2 ${country !== 'Select Country' && 'text-black font-normal'}`}>
                      {country}
                </p>
              </div>
              {dropdown1
              ?<IoIosArrowUp className='text-[#5E6366] text-xl' />
              :<IoIosArrowDown className='text-[#5E6366] text-xl' />
              }

              {dropdown1 && 
                <div className='flex flex-col items-start justify-start px-8 py-2 absolute top-0 left-0 mt-[66px] w-full rounded-md border-[#A4A4A4] border-[1px] bg-white shadow-lg z-20'>
                        {countries.map((item, index) => {
                            return(
                                <p key={index} onClick={()=>handleCountry(item)}
                                className='text-sm font-normal text-black w-full py-4'>
                                    {item}
                                 </p>
                            )
                        })}
              </div>
            }
          </div>

          <div onClick={()=>setDropdown2(!dropdown2)}
          className='relative flex flex-row items-center justify-between h-16 w-full border-[1px] border-[#A4A4A4] text-[#A4A4A4] rounded-lg mt-6 px-4 md:mt-8 lg:mt-5 lg:w-[47%]'>
              <div>
                <p className='text-xs text-black font-light'>
                      State
                </p>
                <p className={`text-sm text-[#A4A4A4] font-light mt-1 lg:mt-2 ${state !== 'Select State' && 'text-black font-normal'}`}>
                      {state}
                </p>
              </div>
                {dropdown2
                ?<IoIosArrowUp className='text-[#5E6366] text-xl' />
                :<IoIosArrowDown className='text-[#5E6366] text-xl' />
                }

                {dropdown2 && 
                    <div className='flex flex-col items-start justify-start px-8 py-2 absolute top-0 left-0 mt-[66px] w-full rounded-md border-[#A4A4A4] border-[1px] bg-white shadow-lg z-20'>
                            {stateLists.map((item, index) => {
                                return(
                                    <p key={index} onClick={()=>handleState(item)}
                                    className='text-sm font-normal text-black w-full py-4'>
                                        {item}
                                     </p>
                                )
                            })}
                  </div>
                }
          </div>

          <div onClick={()=>setDropdown3(!dropdown3)}
          className='relative flex flex-row items-center justify-between h-16 w-full border-[1px] border-[#A4A4A4] text-[#A4A4A4] rounded-lg mt-6 px-4 md:mt-8 lg:mt-5 lg:w-[47%]'>
              <div>
                <p className='text-xs text-black font-light'>
                      City
                </p>
                <p className={`text-sm text-[#A4A4A4] font-light mt-1 lg:mt-2 ${city !== 'Select City' && 'text-black font-normal'}`}>
                      {city}
                </p>
              </div>
                {dropdown3
                ?<IoIosArrowUp className='text-[#5E6366] text-xl' />
                :<IoIosArrowDown className='text-[#5E6366] text-xl' />
                }


                {dropdown3 && 
                    <div className='flex flex-col items-start justify-start px-8 py-2 absolute top-0 left-0 mt-[66px] w-full rounded-md border-[#A4A4A4] border-[1px] bg-white shadow-lg z-20'>
                            {cityLists.map((item, index) => {
                                return(
                                    <p key={index} onClick={()=>handleCity(item)}
                                    className='text-sm font-normal text-black w-full py-4'>
                                        {item}
                                     </p>
                                )
                            })}
                  </div>
                }
          </div>

          <div className='flex flex-col items-start justify-center h-16 w-full border-[1px] border-[#A4A4A4] text-[#A4A4A4] rounded-lg mt-6 pl-4 md:mt-8 lg:mt-5 lg:w-[47%]'>
                <p className='text-xs w-full text-black font-light'>
                      Post Code
                </p>
                <input className='outline-none border-none w-full pr-4 text-sm font-normal lg:mt-2 text-black' 
                value={postal}
                onChange={handlePostalCode}
                placeholder='000 000'
                />
          </div>
          
    </div>



    <div className='flex flex-col items-start justify-center h-16 w-[80%] border-[1px] border-[#A4A4A4] text-[#A4A4A4] rounded-lg mt-6 pl-4 md:mt-8 lg:mt-5 lg:w-full'>
          <p className='text-xs w-full text-black font-light'>
                Address Line
          </p>
          <input className='outline-none border-none w-full pr-4 text-sm font-normal lg:mt-2 text-black' 
          onChange={handleAddress}
          value={address}
          placeholder='Input Address Line'
          />
    </div>
    
    <button onClick={handleSubmit}
    disabled={country === 'Select Country' || state === 'Select State' || city === 'Select City' || postal === '' || address === ''}
            className={`text-center text-sm font-normal text-white ${country === 'Select Country' || state === 'Select State' || city === 'Select City' 
            || postal === '' || address === ''  ? 'bg-[#dddddd]' : 'bg-black'} rounded-sm h-14 w-[80%] mt-12 md:w-[45%] lg:w-[50%] lg:mt-14`}>
                                    Next
        </button>
    </motion.div>
  )
}

export default BuyerPage6
