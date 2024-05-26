import React from 'react';
import workData from './workData';
import WorkComp from './WorkComp';

const WorkSec = () => {
    console.log(workData)
    return (
        <div className='container'>
            <div className="head text-center mt-5">
                <h2 className='lg:text-4xl text-2xl'> What We Offer</h2>
                <p className='lg:w-8/12 w-full m-auto mb-4 lg:text-base text-sm'>Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.</p>
            </div>
            <div className="grid grid-cols-12 lg:gap-col-4 gap-xl-0 gap-lg-0 gap-4 ">
                {
                    workData.map((data) => <WorkComp key={data.id} info={data} />)
                }
            </div>
        </div>
    )
}

export default WorkSec
