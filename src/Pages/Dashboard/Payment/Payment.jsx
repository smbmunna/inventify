import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";



//Todo: add a publishable key
const stripePromise= loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);


const Payment = () => {
    const data= useParams();
    //const finalAMount= parseInt({amount});
    // const {amount, limit}= data;
    // console.log('amoung: ',amount, 'limit: ', limit);
    //return
    return (
        <div>
            <h2 className="font-bold text-xl my-8">Please provide the card info</h2>


            <Elements stripe={stripePromise}>
                <CheckoutForm amount={data.amount} limit={data.limit}/>
            </Elements>
        </div>
    );
};

export default Payment;