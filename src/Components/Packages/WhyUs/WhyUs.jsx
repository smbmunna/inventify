import { BsFillCalculatorFill } from "react-icons/bs";
import { HiBellAlert } from "react-icons/hi2";
import { FaMobileAlt } from "react-icons/fa";
const WhyUs = () => {
    return (
        <div className="max-w-screen-xl mx-auto my-16">
            <h1 className="text-4xl font-bold text-gray-700 text-center my-8 md:mb-10">What makes us Special</h1>
            <div className="lg:grid lg:grid-cols-3 lg:justify-center lg:gap-28">
                <div className="flex gap-4 items-center mb-8 md:mb-0">
                    <BsFillCalculatorFill className="text-gray-700 text-6xl " />
                    <div>
                        <h1 className="text-2xl font-bold text-gray-700 mb-2">Inventory Tracking</h1>
                        <p>Keep track of inventory levels in real time to avoid overstocking or stockouts.</p>
                    </div>
                </div>
                <div className="flex gap-4 items-center mb-8 md:mb-0">
                    <HiBellAlert className="text-gray-700 text-9xl" />
                    <div>
                        <h1 className="text-2xl font-bold text-gray-700 mb-2">Customizable Alert</h1>
                        <p>Set up customizable alerts for various inventory events, such as low stock, expired items, or unusual sales patterns</p>
                    </div>
                </div>
                <div className="flex gap-4 items-center mb-8 md:mb-0">
                    <FaMobileAlt className="text-gray-700 text-6xl" />
                    <div>
                        <h1 className="text-2xl font-bold text-gray-700 mb-2">Mobile Accessibility</h1>
                        <p>Enable access to inventory data from mobile devices for on-the-go management</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;