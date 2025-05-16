import React from 'react';
import Categories from './Categories';
import SectionTitle from '../../components/SectionTitle';
import Baner02 from './Baner02';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import Banner01 from './Banner01';
import FoodCardHome from './FoodCardHome';
import SecondCards from './SecondCards';

const Home = () => {
    return (
        <div>
            <Banner01 />
            <Categories />
            <SectionTitle heading={'Simple and tasty recipes'} subHeading={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia libero nihil eius perferendis eos temporibus deserunt harum, a fugit molestiae.'} />
            <FoodCardHome />
            <Baner02 />
            <SecondCards />
            <Banner />
        </div>
    );
};

export default Home;