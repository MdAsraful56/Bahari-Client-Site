import React from 'react';
import img from '../../assets/Images/banner.png'
import { IoIosTime } from 'react-icons/io';
import { PiForkKnifeFill } from 'react-icons/pi';

const Banner01 = () => {
    return (
        <div className='my-20'>
            {/* title section  */}
            <section className="bg-linear-to-b/srgb from-[#70824600] to-[#E7FAFE]">
                <div className="space-y-5">
                    <h2 className="text-2xl">Spicy delicious chicken wings</h2>
                    <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium aliquam sapiente </p>
                    <div className="flex flex-row gap-3">
                        <section className="flex flex-row gap-1 items-center btn rounded-4xl">
                            <IoIosTime size={20} /> <span className="">30 Minutes</span>
                        </section>
                        <section className="flex flex-row gap-1 items-center btn rounded-4xl">
                            <PiForkKnifeFill size={22} /> <span className="">Fish</span> 
                        </section>
                    </div>
                </div>
            </section>
            {/* image section  */}
            <section className="">
                <img src={img} alt="" className="" />
            </section>
        </div>
    );
};

export default Banner01;