import React from 'react';
import Navigation from '../../../Shared/Navigation/Navigation';
import MyProject from '../../MyPorject/MyProject';
import MySkill from '../../MySkill/MySkill';
import About from '../About/About';
import Contact from '../Contact/Contact';
import HederBanner from '../HederBanner/HederBanner';




const Home = () => {     
    return (
       <>
       <Navigation></Navigation>
       <HederBanner></HederBanner>
       <About></About>
       <MySkill></MySkill>
       <MyProject></MyProject>
       <Contact></Contact>
       </>
    );
};

export default Home;