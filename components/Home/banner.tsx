import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import SwiperClass from "swiper/types/swiper-class";
import { useEffect, useState } from "react";
import { Placeholder } from "@/components/Placeholder";
import { Button } from "@/components/CatalystUi/button";

SwiperCore.use([Navigation, Autoplay, Pagination]);

const banners = [{
  title: "Custom Cut",
  subTitle: "Get Customized Glass and Mirror",
  button: {
    text: "Shop Now",
    link: "/"
  },
  img: "/image/home/h-1.webp"
}, {
  title: "Shower Door",
  subTitle: "Design Your Unique Glass Enclosure",
  button: {
    text: "Shop Now",
    link: "/"
  },
  img: "/image/home/h-2.webp"
}, {
  title: "Glass Table Top",
  subTitle: "Modern Dining & Coffee Table Top",
  button: {
    text: "Shop Now",
    link: "/"
  },
  img: "/image/home/h-3.webp"
}];

export default function HomeBanner() {
  const [swiperExample, setSwiperExample] = useState<SwiperClass>();
  const [spaceBetween, setSpaceBetween] = useState(20);
  const [slidesPerView, setSlidesPerView] = useState(3);
  useEffect(() => {
    // 监听页面尺寸变化
    const changeWidth = () => {
      if (window.innerWidth > 768) {
        setSpaceBetween(20);
        setSlidesPerView(3);
      } else {
        setSpaceBetween(0);
        setSlidesPerView(1);
      }
    };
    changeWidth();
    window.addEventListener("resize", () => {
      changeWidth();
    });
  }, []);
  return <Swiper
    onSwiper={setSwiperExample}
    className="w-full bg-white home-banner"
    spaceBetween={spaceBetween}
    slidesPerView={slidesPerView}
    loop={true}
    pagination={{
      clickable: true
    }}
    autoplay={
      {
        delay: 2000,
        disableOnInteraction: true
      }
    }
  >
    {
      banners.map((item, index) => {
        return <SwiperSlide key={index}>
          <div className="max-w-[525px] mx-auto relative max-h-[395px] c-flex overflow-hidden">
            <Placeholder src={item.img} imageWidth={525} imageHeight={395} />
            <div
              className="flex justify-between left-8 top-8 bottom-8 items-start absolute inset-0 flex-col">
              <div>
                <h2 className="text-main text-4xl font-bold">{item.title}</h2>
                <h3 className="max-w-[200px] text-base font-bold text-themeGray mt-1">{item.subTitle}</h3>
              </div>
              <div>
                <Button href={item.button.link}
                        className="!bg-[#ededed] hover:!bg-gray-200 cursor-pointer shadow !text-orange-500">{item.button.text}</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>;
      })
    }
  </Swiper>;
}
