import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { GiSelfLove } from 'react-icons/gi';
import { IoIosTime } from "react-icons/io";
import { PiForkKnifeFill } from 'react-icons/pi';

const Card = ({food}) => {


    const {title, image, type, time } = food;


    return (
        <div className=''>
            <div className="card bg-[#E7F9FD] shadow-sm p-3 relative">
                <figure>
                    <img
                    src={image}
                    alt="foodItem Image" className='rounded-xl w-96 h-72' />
                </figure>
                {/* {coloers === 'red' ? <FaHeart className='absolute right-5 top-5' size={20} color='red' /> : <FaHeart className='absolute right-5 top-5' size={20}  /> } */}
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className="card-actions">
                        <section className="flex flex-row gap-1 items-center ">
                            <IoIosTime size={20} /> <span className="">{time}</span>
                        </section>
                        <section className="flex flex-row gap-1 items-center">
                            <PiForkKnifeFill size={22} /> <span className="">{type}</span> 
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;