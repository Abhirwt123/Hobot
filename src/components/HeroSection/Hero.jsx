import React from 'react'
import heroImg from '../../assets/images/hero.png'
import { SlEnvolope } from 'react-icons/sl'
import { IoLocationSharp } from 'react-icons/io5'

const Hero = () => {
    return (
        <div className='hero_sec_wrap'>
            <div className='hero_gradient h-full'>
                <div className='flex flex-col justify-center items-center h-full'>
                    <h1 className="main_heading lg:text-5xl md:text-3xl text-2lg lg:w-6/12 w-full font-semibold  text-white text-center"><b>Are You a Supplier?</b>  Explore Matching Opportunities.</h1>
                    <div className="grid grid-cols-12 my-8">
                        <div className="lg:col-span-5 col-span-12">
                            <div className=" flex items-center border px-4 py-1 bg-white rounded-md">
                                <span className='me-2'>
                                    <SlEnvolope fontSize='20px' color='#e7760d' />
                                </span>
                                <div className="inp_field_wrap w-full">
                                    <input type="text" className='border-0 outline-0 w-full' name="" id="" placeholder='Search your required service here' />
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-5 col-span-12 mx-lg-4 mx-0 my-xl-0 my-lg-0 my-2">
                            <div className=" flex items-center border px-4 py-1 bg-white rounded-md">
                                <span className='mx-2'>
                                    <IoLocationSharp  fontSize='20px' color='#e7760d' />
                                </span>
                                <div className="inp_field_wrap w-full">
                                    <input type="text" className='border-0 outline-0 w-full' name="" id="" placeholder='Search your desired location here' />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className=" btn_wrap ">
                                 <button className='bg-btnClr px-6 py-1 text-white rounded-md'>Search</button>
                            </div>
                        </div>
                    </div>
                    <div className="link text-white text-center">
                     <b>Are you a buyer ?</b><a href="#" target="_blank" className='underline text-white'> Click here if you are looking to post a requirements</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
