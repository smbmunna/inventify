import { BsFillCalculatorFill } from "react-icons/bs";

const WhyUs = () => {
    return (
        <div className="mx-4 md:mx-0 md:my-32">
            <h1 className="text-3xl font-bold text-gray-700 text-center my-8 md:mb-10">What makes us Special</h1>
            <div className="lg:grid lg:grid-cols-3 lg:justify-center lg:gap-28">
                <div className="flex gap-4 items-center mb-8 md:mb-0">
                    <BsFillCalculatorFill className="text-gray-700 text-6xl border" />
                    <h1 className="text-2xl font-bold text-gray-700 mb-2">Real-Time Inventory Tracking</h1>
                </div>
                <div className="flex gap-4 items-center mb-8 md:mb-0">
                    <BsFillCalculatorFill className="text-gray-700 text-6xl border" />
                    <h1 className="text-2xl font-bold text-gray-700 mb-2">Customizable Alert</h1>
                </div>
                <div className="flex gap-4 items-center mb-8 md:mb-0">
                    <BsFillCalculatorFill className="text-gray-700 text-6xl border" />
                    <h1 className="text-2xl font-bold text-gray-700 mb-2">Mobile Accessibility</h1>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;