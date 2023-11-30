import { Map, Marker } from "pigeon-maps"

import { BsFillHouseFill, BsFillBookmarkCheckFill, BsEnvelopePaper } from 'react-icons/bs';
import { FaMobileAlt } from 'react-icons/fa';


const OurLocation = () => {
    return (
        <div className=" mb-8 max-w-screen-xl mx-auto my-16">
            <h1 className="font-bold text-4xl my-8 text-center text-[#6f42c1]">Come and Visit Us</h1>
            <div className="">
                <div data-aos="zoom-in-up" data-aos-duration="1000" className="bg-[#0b0b0bbf] mx-auto mb-8 pb-10 md:w-1/3 h-full text-white items-center pl-10 ">
                    <div className="flex items-center pt-10 mb-10">
                        <BsFillBookmarkCheckFill className="text-3xl mr-3" />
                        <h3 className="text-4xl font-bold">Inventify</h3>
                    </div>
                    <div className="flex items-center gap-4 mb-2">
                        <BsFillHouseFill className="text-3xl" />
                        <p className="text-lg">Sector 04, Uttara, Dhaka 1230</p>
                    </div>
                    <div className="flex items-center gap-4 mb-2">
                        <FaMobileAlt className="text-3xl" />
                        <p className="text-lg">+789 558 69 85 +789 023 58 96</p>
                    </div>
                    <div className="flex items-center gap-4 mb-2">
                        <BsEnvelopePaper className="text-3xl" />
                        <p className="text-lg">support@example.com</p>
                    </div>
                </div>
                <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
                    <Marker width={50} anchor={[50.879, 4.6997]} />
                </Map>

            </div>
        </div>
    );
};

export default OurLocation;