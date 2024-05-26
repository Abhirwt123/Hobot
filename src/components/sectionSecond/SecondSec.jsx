import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const SecondSec = () => {
    return (
        <div className='mt-5 container'>
            <div className="grid grid-cols-12 items-center gap-4">
                <div className="lg:col-span-6 col-span-12">
                    <div>
                        <h2 className='lg:text-2lg text-lg'>Ready to dive into <span className='text-[#42326a]'>HABOT?</span> </h2>
                        <p className='lg:text-lg text-sm'>Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.</p>
                        <div className="btn_wrap">
                            <button className='px-8 py-2 rounded-md bg-btnClr text-white flex items-center'>Sign up Today ! <span className='ms-2'><FaArrowRightLong color='white' /></span></button>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-6 col-span-12">
                    <div className="grid grid-cols-12">
                        {['Abu Dhabi','Dubai','Sharjah & Ajman','Fujairah','Ras Al Khaimah','Umm Al Quwain'].map((name,index)=><p  key={name} className={` text-center c_names col-span-6 p-3 rounded-md lg:text-md text-sm ${index %2===0?"me-4":''}`} >{name}</p>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondSec
