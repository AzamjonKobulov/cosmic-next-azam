import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';

import Image1 from '../../../assets/images/home/img-trusted-1.png';
import Image2 from '../../../assets/images/home/img-trusted-2.png';
import Quote from '../../../assets/images/shared/icon-quote.svg';
import Line from '../../../assets/images/home/line.svg';

const data = [
  {
    id: 1,
    label:
      '“We found no issues that come with managing a remote team usually. This worked out way smoother than we anticipated.”',
    img: Image1,
    name: 'Curejoy',
    job: 'Karthik L, CؑO',
  },
  {
    id: 2,
    label:
      '“They had the right expertise in developing a training program for us and brought on board the best candidates who were ready to be in the trenches۔”',
    img: Image2,
    name: 'Oriental Rug Repair',
    job: 'Paul, Owner',
  },
  {
    id: 3,
    label:
      '“We found no issues that come with managing a remote team usually. This worked out way smoother than we anticipated.”',
    img: Image2,
    name: 'Curejoy',
    job: 'Karthik L, CؑO',
  },
  {
    id: 4,
    label:
      '“They had the right expertise in developing a training program for us and brought on board the best candidates who were ready to be in the trenches۔”',
    img: Image1,
    name: 'Oriental Rug Repair',
    job: 'Paul, Owner',
  },
];

export default function App() {
  return (
    <section className="bg-brand-lightblue-200">
      <div className="max-w-base mx-auto font-base text-center px-5 xl:px-40 py-12 md:py-28">
        <h2 className="max-w-md mx-auto font-semibold text-2xl md:text-3xl lg:text-4xl">
          Trusted by leading brands and startups
        </h2>
        <div className="mt-12 md:mt-16">
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
            }}
            pagination={(true, { clickable: true })}
            navigation={
              (true,
              {
                nextEl: '.next',
                prevEl: '.prev',
              })
            }
            modules={[Navigation, Pagination]}
            loop={true}
            className="mySwiper"
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="h-full flex flex-col justify-between bg-white border-2 border-brand-lightblue-300 rounded-3xl px-5 md:px-10 py-8">
                  <div>
                    <div className="w-8 h-8 mx-auto">
                      <Image src={Quote} alt="icon" className="w-full h-full" />
                    </div>
                    <p className="font-medium text-lg lg:text-2xl mt-6">
                      {item.label}
                    </p>
                  </div>
                  <div>
                    <div className="max-w-xs mx-auto mt-6">
                      <Image src={Line} alt="line" className="w-full h-full" />
                    </div>
                    <div className="flex shrink-0 gap-3 justify-center items-center text-left mt-6">
                      <div className="w-14 h-14 rounded-full">
                        <Image src={item.img} alt="banner w-full h-full" />
                      </div>
                      <div className="font-general">
                        <h3 className="font-medium">Curejoy</h3>
                        <p className="mt-1">Karthik L, CؑO</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="relative sm:-top-12 flex gap-10 sm:gap-32 justify-center sm:mt-6 z-20">
            <button className="prev w-7 h-7 border-2 border-black rounded-full flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4 text-black"
              >
                0
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <button className="next w-7 h-7 border-2 border-black rounded-full flex justify-center items-center group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4 text-black"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
