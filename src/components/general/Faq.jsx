import React, { useState } from 'react'
import { SlArrowDown, SlArrowUp } from "react-icons/sl";


const Faq = () => {
    const faq = [
        {
            id: 1,
            question: "How do i become a supplier?",
            answer: "If you are interested in becoming a supplier, please contact the OAT offices or any of our contact mobile lines and/or email address.",
        },
        {
            id: 2,
            question: "Do you have mineral rights, licences, certifications, and any other relevant permits that could facilitate transactions? How many times do you have?",
            answer: "We produce and source lithium ores (both Lepidolites and Spodumene) from our assets and those of third parties. Our mining lease is currently being pursued with the Federal Ministry of Mines so we rely more on sourcing our lithium ores from the group of artisanal miners we work with.",
        },
        {
            id: 3,
            question: "Production capacity of spodumene (or Kunzite),Lepidolite, and patalite (or the quantity of mineral ore available).",
            answer: "We are sourcing at a capacity of 4,000 metric tons per month.",
        },
        {
            id: 4,
            question: "Are there any other Minerals available in commercial quantities on your mine site such as graphite, nickel, cobalt, columbite/tantalite?",
            answer: "Yes, Gold",
        },
    ]

    const [open, setOpen] = useState(null);

    const handleOpen = (item) => {
        setOpen((prevIndex) => (prevIndex === item ? null : item))
    }

  return (
    <div className='flex flex-col items-center justify-center w-full font-poppins bg-[#292929] py-20 px-5 md:px-10 lg:px-40 lg:py-24 xl:py-28'>
        <p className='text-base text-white font-medium text-center lg:text-lg xl:text-xl'>
            FREQUENTLY ASKED QUESTIONS
        </p>

        <div className='flex flex-col items-center justify-start w-full mt-8 xl:mt-14 xl:w-[80%]'>
            {faq.map((item) => {
                return (
            <div key={item.id}  onClick={()=>handleOpen(item.id)}
            className='flex flex-col items-center justify-start w-full mt-7'>
                <div className='flex flex-row items-start justify-between w-full'>
                    <div className='flex flex-col items-start justify-start w-[90%] md:w-[85%]'>
                        <p className='text-sm font-normal text-white md:font-medium lg:text-base xl:text-lg'>
                            {item.question}
                        </p>
                        {open === item.id &&
                        <p className='text-[12px] font-light text-white mt-3 leading-5 md:text-[13px] lg:text-[14px] lg:leading-6 xl:text-base'>
                            {item.answer}
                        </p>
                        }
                    </div>

                    <div
                    className='flex lfex-row items-center justify-center h-7 w-7 rounded-full border-[0.5px] border-white xl:h-10 xl:w-10 xl:border-[1px]'>
                        {
                            open === item.id
                            ?<SlArrowUp className='text-white text-[10px] xl:text-sm' />
                            :<SlArrowDown className='text-white text-[10px] xl:text-sm' />
                        }
                          
                    </div>
                </div>
                <div className={`w-full h-[0.4px] bg-[#D0D5DC] mt-5 ${item.id === 4 && 'hidden'}`}></div>
            </div>
                )
            })}

        </div>

    </div>
  )
}

export default Faq