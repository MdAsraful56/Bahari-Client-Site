import React from 'react';
import Categories from './Categories';
import SectionTitle from '../../components/SectionTitle';
import Baner02 from './Baner02';

const Home = () => {
    return (
        <div>
            <Categories />
            <SectionTitle heading={'Simple and tasty recipes'} subHeading={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia libero nihil eius perferendis eos temporibus deserunt harum, a fugit molestiae.'} />
            
            <Baner02 />
        </div>
    );
};

export default Home;