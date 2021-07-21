import React from 'react';

import Welcome from '../Components/bodyWelcome';

import NavBar from '../Components/navBar';
import MainPic from '../Components/homeMainPic';
import OriginStory from '../Components/originStory';

const Home = () => {
    return(
        <React.Fragment>
            <NavBar/>
            <div className="navMenu">

            </div>
            <Welcome/>
            <MainPic/>
            <OriginStory/>
  
        </React.Fragment>

    )
};

export default Home;