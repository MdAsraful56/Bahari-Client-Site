import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { GiSelfLove } from 'react-icons/gi';
import { IoIosTime } from "react-icons/io";
import { PiForkKnifeFill } from 'react-icons/pi';

const Card = () => {

    const coloers = 'red'

    return (
        <div className='my-20'>
            <div className="card bg-[#E7F9FD] w-96 shadow-sm p-3 relative">
                <figure>
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" className='rounded-xl' />
                </figure>
                {coloers === 'red' ? <FaHeart className='absolute right-5 top-5' size={20} color='red' /> : <FaHeart className='absolute right-5 top-5' size={20}  /> }
                <div className="card-body">
                    <h2 className="card-title">Card Title</h2>
                    <div className="card-actions">
                        <section className="flex flex-row gap-1 items-center ">
                            <IoIosTime size={20} /> <span className="">30 Minutes</span>
                        </section>
                        <section className="flex flex-row gap-1 items-center">
                            <PiForkKnifeFill size={22} /> <span className="">Fish</span> 
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;