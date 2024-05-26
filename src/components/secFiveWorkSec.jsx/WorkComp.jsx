import React from 'react'

const WorkComp = ({ info }) => {
    const { img, content,id } = info
    return (
        <div className={`lg:col-span-4 md:col-span-6 col-span-12  p-6 flex flex-col items-center ${id %2===0?'':"bg-[#E8FBFF]"}`}>
            <div className="img_wrap">
                <img src={img} alt="" />
            </div>
            <div className="content mt-2">
                <p className='text-center w-8/12 m-auto lg:text-base text-sm'>{content}</p>
            </div>
        </div>
    )
}

export default WorkComp
