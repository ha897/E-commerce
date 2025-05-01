import React from "react";
import { useState, useRef } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const ProductZoom = (props) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const zoomSliderBig = useRef();
  const zoomSliderSml = useRef();

  const goTo = (index) => {
    setSlideIndex(index);
    zoomSliderBig.current.swiper.slideTo(index, 0);
    zoomSliderSml.current.swiper.slideTo(index, 0);
  };

  // يجب استبدال هذا المصفوفة ببيانات حقيقية من الـ props
  const slides = [
    props.src,
    "https://serviceapi.spicezgold.com/download/1742463096956_hbhb2.jpg",
    props.src,
    props.src,
    props.src,
    props.src,
  ];

  return (
    <>
      <div className="productZoomContainer w-[15%]">
        <div className="flex gap-3">
          <Swiper
            ref={zoomSliderSml}
            slidesPerView={5}
            spaceBetween={10}
            navigation={true}
            direction="vertical"
            modules={[Navigation]}
            className="productsSwiper h-[425px]"
          >
            {slides.map((src, index) => (
              <SwiperSlide key={index} className="!h-fit">
                <div
                  className="item rounded-md overflow-hidden cursor-pointer"
                  onClick={() => goTo(index)}
                >
                  <img
                    // className="w-[100%] block transition"
                    className={`w-[100%] block transition ${slideIndex === index ? "opacity-100" : "opacity-30"}`}

                    alt="product image"
                    src={src}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="zoomContainer w-[85%] rounded-md overflow-hidden">
        <Swiper
          ref={zoomSliderBig}
          slidesPerView={1}
          spaceBetween={0}
          className="productViewSwiper"
        >
          {slides.map((src, index) => (
            <SwiperSlide key={index}>
              <Zoom>
                <img
                  className="w-[100%] block transition"
                  alt="product image"
                  src={src}
                />
              </Zoom>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ProductZoom;