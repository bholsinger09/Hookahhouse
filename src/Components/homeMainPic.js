import React from 'react';
import MainPictureBody from '../Assets/MainPictureBody.jpg'


const MainPic = () => {
    return(
        <React.Fragment>
            <div>
                <img src={MainPictureBody} alt="hookah products" id="mainPictureBody"/>

            </div>
        </React.Fragment>

    )
};

export default MainPic;