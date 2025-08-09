import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

import user1 from '../../assets/user1.jpg';
import user2 from '../../assets/user2.jpg';
import user3 from '../../assets/user3.jpg';
import user4 from '../../assets/user4.jpg';
import user5 from '../../assets/user5.jpg';

const testimonialsData = [
    {
        name: 'Tom Thomas',
        title: 'Food Critic',
        image: user1,
        quote: "The best food I've had in years! The quality and flavor are unmatched. I'll definitely be back for more."
    },
    {
        name: 'John Smith',
        title: 'Loyal Customer',
        image: user2,
        quote: "A fantastic experience from start to finish. The website is easy to use, and the food arrived hot and fresh. Highly recommended!"
    },
    {
        name: 'Emily White',
        title: 'First-time Visitor',
        image: user3,
        quote: "I was blown away by the incredible service and the delicious menu. The Spicy Ramen is a must-try!"
    },
    {
        name: 'Michael Brown',
        title: 'Event Planner',
        image: user4,
        quote: "We ordered catering for a large event, and Nexyn Foods exceeded all our expectations. The food was a huge hit with all our guests."
    },
    {
        name: 'Sam Wilson',
        title: 'Weekly Regular',
        image: user5,
        quote: "This is my go-to spot for a delicious and reliable meal. The staff is always friendly, and the food never disappoints."
    }
];

const Testimonials = () => {
    return (
        <div className="py-16 bg-base-200 rounded-3xl">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-12">What Our Customers Say</h2>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {testimonialsData.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col items-center text-center max-w-2xl mx-auto p-8">
                                <div className="avatar mb-4">
                                    <div
                                        className="w-24 h-24 md:w-32 md:h-32 rounded-full ring ring-offset-base-100 ring-offset-2 overflow-hidden"
                                        style={{ ringColor: '#004952' }}
                                    >
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="!w-full !h-full !object-cover"
                                        />
                                    </div>
                                </div>
                                <FaQuoteLeft className="text-3xl mb-4" style={{color: '#e7717d'}} />
                                <p className="italic text-lg text-gray-600 dark:text-gray-400 mb-4">"{testimonial.quote}"</p>
                                <div className="flex justify-center text-yellow-500 mb-4 ">
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                </div>
                                <h3 className="font-bold text-xl">{testimonial.name}</h3>
                                <p className="text-sm text-gray-500">{testimonial.title}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;
