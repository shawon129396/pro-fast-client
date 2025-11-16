import React from 'react';
import Banner from '../Banner/Banner';
import OurServices from '../OurServices/OurServices';
import ClientsLogoMarquee from '../ClientsLogoMarquee/ClientsLogoMarquee';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurServices></OurServices>
            <ClientsLogoMarquee></ClientsLogoMarquee>
        </div>
    );
};

export default Home;