import React from 'react';
import SectionTitle from './SectionTitle';
import img01 from '../assets/Images/03.png'
import img02 from '../assets/Images/04.png'
import img03 from '../assets/Images/05.png'

const Banner = () => {
    return (
        <div className='bg-[#E7F9FD] relative py-24 rounded-4xl overflow-hidden'>
            <SectionTitle heading={'Deliciousness to your inbox'} subHeading={'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim '} />

            <div className="w-full lg:w-1/2 mx-auto px-4 my-5 ">
                <div className="bg-white rounded-full flex items-center p-1 shadow-md">
                    <input
                    type="email"
                    placeholder="Your email address..."
                    className="flex-grow px-4 py-3 rounded-full focus:outline-none text-gray-700"
                    />
                    <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-900 transition duration-300">
                    Subscribe
                    </button>
                </div>
            </div>

            <img src={img01} alt="" className="absolute lg:w-16 w-10 lg:bottom-16 -rotate-45 lg:right-60 bottom-7 right-32" />
            <img src={img02} alt="" className="absolute lg:w-52 w-28 lg:-bottom-10 lg:-left-0 -bottom-2 -left-3" />
            <img src={img03} alt="" className="absolute lg:w-60 w-32 lg:-bottom-20 lg:-right-10 -bottom-8 -right-3 " />
        </div>
    );
};

export default Banner;