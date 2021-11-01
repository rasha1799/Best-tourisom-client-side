import React from 'react';
import ServiceLoad from '../Home/ServiceLoad/ServiceLoad'
import Banner from './Banner/Banner';
import Design from './Design/Design';
import Towns from './Towns/Towns';

const Home = () => {
    return (
        <div>
            
           <Banner></Banner> 
           <ServiceLoad></ServiceLoad>
           <Towns></Towns>
           <Design></Design>
        </div>
    );
};

export default Home;