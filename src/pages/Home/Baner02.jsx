import React from 'react';
import banerImg from '../../assets/Images/BanerImg02.png'
import img01 from '../../assets/Images/01.png'
import img02 from '../../assets/Images/02.png'
import img03 from '../../assets/Images/Categories/Categories (1).png'
import img04 from '../../assets/Images/Categories/Categories (5).png'

const Baner02 = () => {
    return (
        <div className='my-20 flex lg:flex-row flex-col gap-5'>
            <section className="lg:w-1/2 w-full flex flex-col justify-center space-y-6">
                <h2 className="text-3xl">Everyone can be a chef in their own kitchen</h2>
                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. In rerum, adipisci esse ratione mollitia itaque. Fugiat eveniet deserunt ullam quia aperiam, laborum officia labore sequi, omnis ut et. Pariatur, officia.</p>
                <div className="mt-8">
                    <button className="btn text-white bg-black rounded-br-2xl rounded-tl-2xl">Learn More</button>
                </div>
            </section>
            <section className="lg:w-1/2 w-full relative bg-linear-to-b/srgb from-[#70824600] to-[#E7F9FD] rounded-4xl ">
                <img src={banerImg} alt="" className="" />
                <img src={img01} alt="" className="absolute w-8 lg:w-10 top-44" />
                <img src={img02} alt="" className="absolute w-8 lg:w-10 top-12 right-28" />
                <img src={img03} alt="" className="absolute w-8 lg:w-10 top-32 right-10" />
                <img src={img04} alt="" className="absolute w-8 lg:w-10 top-12 left-16" />
            </section>
        </div>
    );
};

export default Baner02;