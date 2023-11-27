import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAuth from '../../../hooks/useAuth';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({amount,limit}) => {
    const navigate= useNavigate();
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState([]);
    const [transactionId, setTransactionId] = useState([]);
    const stripe = useStripe();
    const elements = useElements();
    const axiosPublic = useAxiosPublic();    //todo use axios secure
    const totalPrice = amount; //todo total price hardcoded
    const { user } = useAuth();
    // console.log(amount);
    // console.log(limit);

    useEffect(() => {
        axiosPublic.post('/create-payment-intent', { price: totalPrice })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })
    }, [axiosPublic, totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();

        //if no sufficient info then return
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('Payment error', error);
            setError(error.message);
        } else {
            console.log('Paymente method: ', paymentMethod);
            setError('');
        }

        //confirm payment
        const { paymentIntent, eror: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card, //we did "const card = elements.getElement(CardElement)" above"
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        //loggin error to see
        if (confirmError) {
            console.log('Payment confirm error');
        } else {
            console.log('Payment intent: ', paymentIntent);
            if (paymentIntent.status == 'succeeded') {
                //console.log('transaction id:', paymentIntent.id);
                setTransactionId(paymentIntent.id);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Payment Successful!",
                    showConfirmButton: false,
                    timer: 1500
                  });
                //update shop collection
                axiosPublic.patch(`/shops/updateLimit/${user.email}`, {productLimit:limit})
                .then(res=>{
                    //navigate to invoice page
                    navigate('/dashboard/invoice')
                })
            }
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-warning" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className="text-red-500">{error}</p>
            <p className="text-green-600 font-bold">Your Transaction id:{transactionId} </p>
        </form>
    );
};

export default CheckoutForm;