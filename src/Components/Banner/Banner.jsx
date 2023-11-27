import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Banner = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img src="https://i.ibb.co/hcgTCBG/cova-software-Sdlsfst-OQZM-unsplash.jpg" />                    
                </div>
                <div>
                    <img src="https://i.ibb.co/qNyhzDr/cova-software-z-Ue3lwqr-RIU-unsplash.jpg" />                    
                </div>
                <div>
                    <img src="https://i.ibb.co/D5ZN3BX/simon-kadula-gknd-M1-Gv-SA-unsplash.jpg" />                    
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;