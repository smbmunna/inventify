import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
//react rating
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'



const Testimonials = () => {
    const [reviews, setReviews]= useState([]);
    //load reviews
    useEffect(()=>{
        fetch('https://inventify-server.vercel.app/reviews')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper text-center">                
                {
                    reviews.map(review=> <SwiperSlide key={review._id}>
                        <Rating className="mx-auto" style={{ maxWidth: 150}} value={review.rating} />
                        <p>{review.details}</p>
                        <h2 className="text-3xl font-bold text-yellow-600">{review.name}</h2>
                    </SwiperSlide> )
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;