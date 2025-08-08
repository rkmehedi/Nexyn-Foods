import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import galleryImg1 from "../../assets/galleryimg (1).jpg";
import galleryImg2 from "../../assets/galleryimg (2).jpg";
import galleryImg3 from "../../assets/galleryimg (3).jpg";
import galleryImg4 from "../../assets/galleryimg (4).jpg";
import galleryImg5 from "../../assets/galleryimg (5).jpg";
import galleryImg6 from "../../assets/galleryimg (6).jpg";
import galleryImg7 from "../../assets/galleryimg (7).jpg";
import galleryImg8 from "../../assets/galleryimg (8).jpg";
import galleryImg9 from "../../assets/galleryimg (9).jpg";
import galleryImg10 from "../../assets/galleryimg (10).jpg";

import "./style.css";

const Banner = () => {
  return (
    <div className="p-5 mt-10 bg-base-200 dark:bg-gray-800 rounded-2xl shadow-md">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative w-full">
            <img
              src={galleryImg1}
              className="rounded-2xl shadow-md w-full h-[60vh] object-cover"
              alt="Delicious Food"
            />
            <div className="absolute inset-0 rounded-2xl"></div>
            <div className="absolute bottom-12 left-4 md:left-8 lg:left-12 text-white z-10">
              <h2 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
                FRESH FOODS
              </h2>
              <p className="text-lg md:text-2xl mt-2 drop-shadow-md">
                Handmade daily with the finest ingredients.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full">
            <img
              src={galleryImg2}
              className="rounded-2xl shadow-md w-full h-[60vh] object-cover"
              alt="Delicious Food"
            />
            <div className="absolute inset-0  rounded-2xl"></div>
            <div className="absolute bottom-12 left-4 md:left-8 lg:left-12 text-white z-10">
              <h2 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
                SPICY CURRY
              </h2>
              <p className="text-lg md:text-2xl mt-2 drop-shadow-md">
                A taste of tradition in every bite.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full">
            <img
              src={galleryImg3}
              className="rounded-2xl shadow-md w-full h-[60vh] object-cover"
              alt="Delicious Food"
            />
            <div className="absolute inset-0  rounded-2xl"></div>
            <div className="absolute bottom-12 left-4 md:left-8 lg:left-12 text-white z-10">
              <h2 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
                GOURMET FOOD
              </h2>
              <p className="text-lg md:text-2xl mt-2 drop-shadow-md">
                Juicy, delicious, and unforgettable.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full">
            <img
              src={galleryImg4}
              className="rounded-2xl shadow-md w-full h-[60vh] object-cover"
              alt="Delicious Food"
            />
            <div className="absolute inset-0  rounded-2xl"></div>
            <div className="absolute bottom-12 left-4 md:left-8 lg:left-12 text-white z-10">
              <h2 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
                ARTISAN PIE
              </h2>
              <p className="text-lg md:text-2xl mt-2 drop-shadow-md">
                Oven-baked to perfection.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full">
            <img
              src={galleryImg5}
              className="rounded-2xl shadow-md w-full h-[60vh] object-cover"
              alt="Delicious Food"
            />
            <div className="absolute inset-0  rounded-2xl"></div>
            <div className="absolute bottom-12 left-4 md:left-8 lg:left-12 text-white z-10">
              <h2 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
                HEALTHY SALADS
              </h2>
              <p className="text-lg md:text-2xl mt-2 drop-shadow-md">
                Fresh, crisp, and full of flavor.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full">
            <img
              src={galleryImg6}
              className="rounded-2xl shadow-md w-full h-[60vh] object-cover"
              alt="Delicious Food"
            />
            <div className="absolute inset-0  rounded-2xl"></div>
            <div className="absolute bottom-12 left-4 md:left-8 lg:left-12 text-white z-10">
              <h2 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
                DECADENT DESSERTS
              </h2>
              <p className="text-lg md:text-2xl mt-2 drop-shadow-md">
                The perfect sweet ending.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full">
            <img
              src={galleryImg7}
              className="rounded-2xl shadow-md w-full h-[60vh] object-cover"
              alt="Delicious Food"
            />
            <div className="absolute inset-0  rounded-2xl"></div>
            <div className="absolute bottom-12 left-4 md:left-8 lg:left-12 text-white z-10">
              <h2 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
                FRESH SUSHI
              </h2>
              <p className="text-lg md:text-2xl mt-2 drop-shadow-md">
                Expertly crafted, exceptionally fresh.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full">
            <img
              src={galleryImg8}
              className="rounded-2xl shadow-md w-full h-[60vh] object-cover"
              alt="Delicious Food"
            />
            <div className="absolute inset-0  rounded-2xl"></div>
            <div className="absolute bottom-12 left-4 md:left-8 lg:left-12 text-white z-10">
              <h2 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
                HEARTY SOUPS
              </h2>
              <p className="text-lg md:text-2xl mt-2 drop-shadow-md">
                Warmth and comfort in every spoonful.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full">
            <img
              src={galleryImg9}
              className="rounded-2xl shadow-md w-full h-[60vh] object-cover"
              alt="Delicious Food"
            />
            <div className="absolute inset-0  rounded-2xl"></div>
            <div className="absolute bottom-12 left-4 md:left-8 lg:left-12 text-white z-10">
              <h2 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
                SIZZLING STEAKS
              </h2>
              <p className="text-lg md:text-2xl mt-2 drop-shadow-md">
                Grilled to your desire.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full">
            <img
              src={galleryImg10}
              className="rounded-2xl shadow-md w-full h-[60vh] object-cover"
              alt="Delicious Food"
            />
            <div className="absolute inset-0  rounded-2xl"></div>
            <div className="absolute bottom-12 left-4 md:left-8 lg:left-12 text-white z-10">
              <h2 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
                TASTY TACOS
              </h2>
              <p className="text-lg md:text-2xl mt-2 drop-shadow-md">
                A fiesta of flavors.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
