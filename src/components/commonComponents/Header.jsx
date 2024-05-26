import { useState } from 'react';
import { RiMenu3Line } from 'react-icons/ri';
import { RxCross1 } from 'react-icons/rx';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='py-4 container relative'>
            <div className="flex justify-between items-center">
                <div className="logo">
                    <img src='/logo.png' alt="website logo" />
                </div>
                <div className="lg:hidden xl:hidden block">
                    <button onClick={toggleMenu}>
                         <RiMenu3Line fontSize='20px' />
                    </button>
                </div>
                <div className={`menu_items xl:block lg:block hidden`}>
                    <ul className='flex items-center'>
                        {['Find Suppliers', 'Find Service Tags'].map((list) => (
                            <li key={list} className='me-6 cursor-pointer'>{list}</li>
                        ))}
                        <li><button className='rounded-md px-6 py-2' style={{ border: "2px solid #12df12" }}>Login/SignUp</button></li>
                    </ul>
                </div>
            </div>
            <div className={`fixed top-0 left-0 w-full h-full bg-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden xl:hidden`}>
                <div className='h-full bg-btnCl p-6 flex justify-content-center relative'>
                <div className="lg:hidden xl:hidden block absolute top-3 right-3">
                    <button onClick={toggleMenu}>
                         <RxCross1 fontSize='20px' />
                    </button>
                </div>
                    <ul className='flex flex-col h-full'>
                        {['Find Suppliers', 'Find Service Tags'].map((list) => (
                            <li key={list} className='mb-4 text-start'>{list}</li>
                        ))}
                        <li><button className='rounded-md px-6 py-2' style={{ border: "2px solid #12df12" }}>Login/SignUp</button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
