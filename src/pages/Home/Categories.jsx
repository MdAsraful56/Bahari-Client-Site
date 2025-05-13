import React from 'react';
import img01 from '../../assets/Images/Categories/Categories (4).png'
import img02 from '../../assets/Images/Categories/Categories (1).png'
import img03 from '../../assets/Images/Categories/Categories (5).png'
import img04 from '../../assets/Images/Categories/Categories (3).png'
import img05 from '../../assets/Images/Categories/Categories (6).png'
import img06 from '../../assets/Images/Categories/Categories (2).png'

const Categories = () => {
    return (
        <div className='my-5'>
            <div className="grid grid-cols-2 justify-between gap-4 mb-10">
                <h2 className="text-3xl font-semibold">Categories</h2>
                <button className="btn btn-sm">View All Categories</button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 space-y-7 p-4 justify-items-center ">
                {/* categories - 01  */}
                <div className="border rounded-2xl h-36 w-40 relative flex justify-center bg-linear-to-b/srgb from-[#70824600] to-[#70824631] ">
                    <img src={img01} alt="" className="h-32 w-32 absolute bottom-16" />
                    <h4 className="text-lg pt-24 text-black font-semibold">Breakfast</h4>
                </div>
                {/* categories - 02  */}
                <div className="border rounded-2xl h-36 w-40 relative flex justify-center bg-linear-to-b/srgb from-[#70824600] to-[#6CC63F1A] ">
                    <img src={img02} alt="" className="h-32 w-32 absolute bottom-16" />
                    <h4 className="text-lg pt-24 text-black font-semibold">Vegan</h4>
                </div>
                {/* categories - 03  */}
                <div className="border rounded-2xl h-36 w-40 relative flex justify-center bg-linear-to-b/srgb from-[#cc271b06] to-[#cc271b3b] ">
                    <img src={img03} alt="" className="h-32 w-32 absolute bottom-16" />
                    <h4 className="text-lg pt-24 text-black font-semibold">Meat</h4>
                </div>
                {/* categories - 04  */}
                <div className="border rounded-2xl h-36 w-40 relative flex justify-center bg-linear-to-b/srgb from-[#f09c0000] to-[#F09E001A] ">
                    <img src={img04} alt="" className="h-32 w-32 absolute bottom-16" />
                    <h4 className="text-lg pt-24 text-black font-semibold">Dessert</h4>
                </div>
                {/* categories - 05  */}
                <div className="border rounded-2xl h-36 w-40 relative flex justify-center bg-linear-to-b/srgb from-[#00000000] to-[#0000000D] ">
                    <img src={img05} alt="" className="h-32 w-32 absolute bottom-16" />
                    <h4 className="text-lg pt-24 text-black font-semibold">Lunch</h4>
                </div>
                {/* categories - 06  */}
                <div className="border rounded-2xl h-36 w-40 relative flex justify-center bg-linear-to-b/srgb from-[#00000000] to-[#ff000018] ">
                    <img src={img06} alt="" className="h-32 w-32 absolute bottom-16" />
                    <h4 className="text-lg pt-24 text-black font-semibold">Chocolate</h4>
                </div>
            </div>
        </div>
    );
};

export default Categories;