import React from 'react';
import img from '../../assets/Images/contactImg.png';

const ContactBanner = () => {
    return (
        <div className="px-4 py-8 max-w-7xl mx-auto mb-20">
            <h2 className="text-3xl text-center font-semibold">Contact Us</h2>

            <section className="flex flex-col lg:flex-row items-center gap-6 mt-10">
                {/* Image Section */}
                <div className="w-full lg:w-1/3 flex justify-center">
                    <img src={img} className="w-40 sm:w-52 md:w-60" alt="Contact page visual" />
                </div>

                {/* Form Section */}
                <div className="w-full lg:w-2/3 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend uppercase">Name</legend>
                            <input type="text" className="input input-bordered w-full rounded-xl" placeholder="Enter your name" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend uppercase">Email</legend>
                            <input type="email" className="input input-bordered w-full rounded-xl" placeholder="Enter your email" />
                        </fieldset>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend uppercase">Subject</legend>
                            <input type="text" className="input input-bordered w-full rounded-xl" placeholder="Enter subject" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend uppercase">Enquiry Type</legend>
                            <input type="text" className="input input-bordered w-full rounded-xl" placeholder="Advertising" />
                        </fieldset>
                    </div>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend uppercase">Messages</legend>
                        <textarea className="textarea textarea-bordered w-full rounded-xl resize-none" placeholder="Enter your messages" rows={5}></textarea>
                    </fieldset>

                </div>
            </section>
            <div className="text-center pt-4 mt-5">
                <button className="btn btn-lg bg-black text-white py-4 px-8 text-sm rounded-xl">Submit</button>
            </div>
        </div>
    );
};

export default ContactBanner;