import React, { useState } from 'react'
import { TiTick } from 'react-icons/ti'

const ThirdSec = () => {
    const [optVal, setOptVal] = useState('Buyer')

    const handleOpt = (e) => {
        setOptVal(e.target.textContent)
    }
    return (
        <div className='conatiner mt-5 lg:h-[400px] h-full'>
            <div className='bg-themeClr pc-10 py-6 flex justify-center items-center h-full'>
                <div className="grid grid-cols-12">
                    <div className="lg:col-span-6 col-span-12 lg:px-0 px-6">
                        <iframe  className='rounded-md lg:h-[315px] lg:w-[560px] w-full h-[198px]' src="https://www.youtube.com/embed/IZLp-TZyDkQ?si=SevpSadHxWYP4HMF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className="lg:col-span-6 col-span-12">
                        <div className="selectOpt flex justify-around text-white lg:text-2xl text-xl lg:mt-0 mt-5">
                            <p className={` cursor-pointer ${optVal === "Buyer" ? "text-[#FBA02D] border-b-2" : "text-white"}`} onClick={handleOpt}>Buyer</p>
                            <p className={` cursor-pointer ${optVal === "Supplier" ? "text-[#FBA02D] border-b-2" : "text-white"}`} onClick={handleOpt}>Supplier</p>
                        </div>
                        <div className="optVal mt-4">
                            <ul className='text-white lg:text-lg text-sm'>
                                {optVal === "Buyer" ?
                                    ['Post your requirements.', 'Sit back for multiple suppliers to contact you.', 'Choose among the suppliers based on the ratings and reviews.'].map((list, index) => <li key={index} className='flex items-center mb-2'> <span><TiTick /></span>{list}</li>) :
                                    ['Global Tech Supplies Inc.   ', 'Elite Equipment Solutions', 'Choose among the Innovative Resource Group'].map((list, index) => <li key={index} className='flex items-center mb-2'> <span><TiTick /></span>{list}</li>)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThirdSec
