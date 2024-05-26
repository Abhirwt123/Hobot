import React from 'react'
import footerLogo from '../../assets/images/footerLogo.png'
import instagramImg from '../../assets/images/socialIcons/Instagram.png';
import facebookImg from '../../assets/images/socialIcons/Facebook.png';
import twitterImg from '../../assets/images/socialIcons/Twitter.png';
import linkedinImg from '../../assets/images/socialIcons/LinkedIn.png';

const Footer = () => {
  const socialImg = [instagramImg, facebookImg, twitterImg, linkedinImg]
  return (
    <div className='bg-themeClr py-6 mt-5'>
      <div className="container border-y-2 border-[#a59c9c] py-4">
        <div className="grid grid-cols-12 items-center">
          <div className="lg:col-span-10 col-span-12">
            <div className="flex items-center flex-wrap lg:justify-start xl:justify-start justify-center">
              <div className="logo mb-lg-0 mb-xl-0 mb-2">
                <img src={footerLogo} alt="footerlogo" />
              </div>
              <div className="item_wrap flex flex-wrap  justify-center">
                <div className="item me-4">
                  <ul className='ps-xl-4 ps-lg-4 ps-md-4 ps-0'>
                    {['Company', 'About', 'FAQ'].map((list, index) => <li key={list} className={`text-white xl-text-base text-sm ${index === 0 ? "font-semibold text-lg mb-2" : ''}`}>{list}</li>)}
                  </ul>
                </div>
                <div className="item">
                  <ul>
                    {['Terms', 'Data privacy', 'Terms', 'Accessibility'].map((list, index) => <li key={list} className={` xl-text-base text-sm text-white ${index === 0 ? "font-semibold text-lg mb-2" : ''}`}>{list}</li>)}
                  </ul>
                </div>
                <div className="item">
                  <ul>
                    {['Related', 'Find Buyer', 'Feedback'].map((list, index) => <li key={list} className={` xl-text-base text-sm text-white ${index === 0 ? "font-semibold text-lg mb-2" : ''}`}>{list}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='lg:col-span-2 col-span-12 social_icons  '>
            <div className="img_wrap flex gap-2  justify-center">
              {
                socialImg.map((img, index) => <img key={index} src={img} alt='social icons' className='' />)
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
