import React from 'react';
import ContactBanner from './ContactBanner';
import Banner from '../../components/Banner';
import ContactCards from './ContactCards';

const Contact = () => {
    return (
        <div className='mb-5'>
            <ContactBanner />
            <Banner />
            <h2 className="text-3xl text-center font-semibold my-20">Check out the delicious recipe</h2>
            <ContactCards />
        </div>
    );
};

export default Contact;