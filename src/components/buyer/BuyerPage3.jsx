import React, { useState } from 'react'
import { motion } from 'framer-motion';
import lithium from './../../assets/images/lithium.svg'
import lead from './../../assets/images/lead.svg'
import zinc from './../../assets/images/zinc.svg'
import { useDispatch, useSelector } from 'react-redux';
import { setUserRequest } from '../../features/requests/RequestSlice';

const BuyerPage3 = ({setCount, setOre}) => {
    const slideInVariants = {
        hidden: { x: '-100%' },
        visible: { x: 0 },
      };

      const [select, setSelect] = useState('');
      const dispatch = useDispatch();
      const userRequests = useSelector((state) => state.request.userRequests)

      const handleSelect = (item) => {
        setSelect(item.name)
        setOre(item)
        // console.log(select)
      }

      const handleSubmit = () => {
        const setName = {"name" : select}
        const combinedValue1 = {...setName, ...userRequests}
        setCount(4)
        dispatch(setUserRequest(combinedValue1))
      }

      const products = [
        {
            id: 1,
            name: 'Lithium',
            img: lithium,
            desc: 'An essential component of rechargeable batteries.',
            ore_type: ['lepidolite', 'spodumene', 'Kunzite']
        },
        {
            id: 2,
            name: 'Lead',
            img: lead,
            desc: 'Lead batteries are widely used, including powering data centres and vehicles.',
            ore_type: ['Galena',  'Lead Oxide']
        },
        {
            id: 3,
            name: 'Zinc',
            img: zinc,
            desc: 'Protects steel from rusting - essential for offshore wind turbines.',
            ore_type: ['zinc sulfide', 'zinc oxide']
        },
        {
            id: 4,
            name: 'Manganese',
            img: zinc,
            desc: 'primarily used in the production of steel and aluminum alloys',
            ore_type: ['pyrolusite', 'psilomelane']
        },
      ]


  return (
    <motion.div
    initial="hidden"
      animate="visible"
      variants={slideInVariants}
      transition={{ ease: 'easeOut', duration: 0.4 }}
      className='flex flex-col items-start justify-center w-full mt-20 pb-24 md:px-12 lg:pl-10 lg:items-center lg:mt-10 xl:pl-28 xl:mt-12'
    >
          <div className='flex flex-col items-center justify-center w-full md:flex-row-reverse lg:justify-end'>
               <p className='text-xs text-black font-normal mb-1 md:mb-0 md:ml-4 md:text-sm'>
                      50% Complete
               </p>
               <div className='flex items-center justify-start w-[80%] h-[5px] rounded-2xl bg-[#dddddd] md:h-[7px] lg:w-[60%] xl:w-[75%]'>
                     <div className='flex items-center justify-start w-[50%] h-full rounded-full bg-green-500'></div>
               </div>
          </div>


          <div className='flex flex-col items-center justify-center w-full mt-8 md:items-start'>
                <p className='text-xl font-semibold text-center md:text-2xl md:w-[65%] md:text-start lg:w-full lg:text-start xl:text-[27px]'>
                         What Product(s) are you Interested in?
                </p>
                <p className='text-xs text-[#667085] font-normal text-center mt-2 md:text-xs md:w-[65%] md:text-start lg:w-full lg:text-start xl:text-sm'>
                        You can select multiple products
                </p>
          </div>


          <div className='flex flex-row flex-wrap items-center justify-between w-full mt-8 px-3 md:px-0'>
               {products.map((item) => {
                return(
                    <div onClick={()=>handleSelect(item)}
                    key={item.id} className='flex flex-col items-start justify-start py-3 px-3 w-[48.5%] border-[1px] border-[#A4A4A4] rounded-xl mt-4 h-[16rem] 
                    md:w-[32%] md:h-[18rem] lg:w-[32%] lg:h-[16rem] xl:h-[19rem] xl:py-5'>
                          <div className='flex items-center justify-center  h-5 w-5 rounded-full  border-[2px] border-[#A4A4A4] bg-white'>
                               <div className={`h-4 w-5 rounded-full ${select === item.name ? 'bg-green-600' : 'bg-white'}`}></div>
                          </div>
                          <img className='mt-4 w-full h-full'
                          src={item.img} alt='lithium' />
                          <p className='text-sm text-black font-semibold mt-3'>
                                  {item.name}
                          </p>
                          <p className='text-[9px] text-[#667085] font-normal mt-1 w-full'>
                                {item.desc}
                          </p>
                    </div>
                )
               })}
          </div>


          <div className='flex items-center justify-center w-full md:justify-start'>
             <button onClick={handleSubmit}
             disabled={select === ''}
                          className={`text-center text-sm font-normal text-white ${select === '' ? 'bg-[#dddddd]' : 'bg-black'} rounded-sm h-14 w-[80%] mt-12 md:w-[45%] lg:w-[50%] lg:mt-14`}>
                                       Next
              </button>
           </div>

    </motion.div>
  )
}

export default BuyerPage3
