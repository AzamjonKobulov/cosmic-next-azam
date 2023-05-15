import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';

import Img1 from '../../../assets/images/home/img-team-1.png';
import Img2 from '../../../assets/images/home/img-team-2.png';
import Img3 from '../../../assets/images/home/img-team-3.png';
import Img4 from '../../../assets/images/home/img-team-4.png';
import Img5 from '../../../assets/images/home/img-team-5.png';
import Img6 from '../../../assets/images/home/img-team-6.png';

const data = [
  {
    id: 1,
    img: Img1,
    name: 'Manish Verma',
    job: 'Jr. Sales Support',
    experience: 'BBA Sales & Mktg, Exp: 1+ Yrs',
  },
  {
    id: 2,
    img: Img2,
    name: 'Mitali Jain',
    job: 'Business Development Exec',
    experience: 'MBA International Business, Exp: 2+ Yrs',
  },
  {
    id: 3,
    img: Img3,
    name: 'Niti Bose',
    job: 'Sr Digital Marketer',
    experience: 'MBA Mktg, Exp: 4+ Yrs',
  },
  {
    id: 4,
    img: Img4,
    name: 'Sudama P',
    job: 'Sr. Sales Support',
    experience: 'MBA Mktg & Finance, Exp: 3+ Yrs',
  },

  {
    id: 5,
    img: Img5,
    name: 'Asif Shaikh',
    job: 'Pre-Sales Exec',
    experience: 'MBA Business Analytics, Exp: 2+ Yrs',
  },
  {
    id: 6,
    img: Img6,
    name: 'Amol Gupta',
    job: 'Business Development Manager',
    experience: 'MBA Marketing & Strategy , Exp: 7+ Yrs',
  },
];

const Team = () => {
  return (
    <section className="bg-brand-light-200">
      <div className="max-w-base mx-auto font-base px-5 xl:px-24 py-12 md:py-28">
        <h2 className="font-bold text-brand-dark-200 text-center text-3xl md:text-4xl lg:text-5xl">
          Team Spotlight
        </h2>
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 12,
            },
            500: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          pagination={
            (true,
            {
              clickable: true,
              el: `swiper-container swiper-container-testClass`,
              bulletClass: `swiper-pagination-bullets2 swiper-pagination-testClass`,
            })
          }
          navigation={
            (true,
            {
              nextEl: '.next1',
              prevEl: '.prev1',
            })
          }
          modules={[Navigation, Pagination]}
          loop={true}
          className="mySwiper mt-10 md:mt-14"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id} className="flex justify-center">
              <div className="w-full h-full bg-white rounded-xl p-4">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <Image
                    src={item.img}
                    alt="png"
                    className="w-full h-full object-cover -mt-0.5"
                  />
                </div>
                <div className="px-2 pt-3 pb-4">
                  <h3 className="capitalize text-brand-dark-200 font-medium text-xl md:text-xl">
                    {item.name}
                  </h3>
                  <p className="font-bold text-brand-orange">{item.job}</p>
                  <p className="font-medium text-brand-gary text-sm mt-4">
                    {item.experience}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div class="relative mt-8 sm:mt-12 md:mt-10 lg:mt-14 flex space-x-10 justify-center z-30">
          <button class="prev1 w-7 h-7 border-2 border-black rounded-full flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4 text-black"
            >
              0
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <button class="next1 w-7 h-7 border-2 border-black rounded-full flex justify-center items-center group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4 text-black"
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
    </section>
  );
};

export default Team;
