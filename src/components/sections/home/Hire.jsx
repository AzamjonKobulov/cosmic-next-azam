import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/shared/Button';

import Image1 from '../../../assets/images/home/icon-hire-1.svg';
import Image2 from '../../../assets/images/home/icon-hire-2.svg';
import Image3 from '../../../assets/images/home/icon-hire-3.svg';
import Image4 from '../../../assets/images/home/icon-hire-4.svg';
import Image5 from '../../../assets/images/home/icon-hire-5.svg';

const Hire = () => {
  return (
    <section class="max-w-base mx-auto font-base px-5 xl:px-0 py-12 md:py-32">
      <div class="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 xl:gap-0">
        <div class="sm:col-span-2 xl:pl-24 text-center xl:text-left pb-12 md:pb-24">
          <h2 class="max-w-lg mx-auto xl:mx-0 capitalize text-brand-darkblue text-2xl md:text-3xl lg:text-4xl font-bold lg:leading-[4rem]">
            We help you
            <span class="block text-brand-green-100 lg:text-5xl">
              hire, train & manage
            </span>
            your sales dream team
          </h2>
          <Link href="/" className="group">
            <Button
              pill
              className="inline-flex gap-3 font-mont font-semibold mt-10 md:mt-20"
            >
              <span>Get Started Now</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 group-hover:translate-x-2 transition duration-300"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </Button>
          </Link>
        </div>

        <div class="relative bg-brand-lightblue-100 px-4 py-14 md:px-9 duration-150 text-center xl:text-left group hover:shadow-2xl hover:z-10">
          <div class="w-14 h-14 mx-auto xl:mx-0">
            <Image src={Image1} alt="icon" class="w-full h-full" />
          </div>
          <h3 class="capitalize text-brand-green-100 font-semibold text-lg md:text-2xl mt-3">
            Sales Executives
          </h3>
          <p class="text-brand-darkblue text-sm mt-3">
            Sales executives have a proven track record of working remotely and
            exceeding sales targets, working with clients through virtual
            meetings and phone calls, and executing effective sales strategies
            with the help of AI and ChatGPT.
          </p>
          <a
            href="#"
            class="absolute right-5 bottom-3 md:right-10 md:bottom-6 w-10 h-10 rounded-full bg-white flex justify-center items-center group-hover:bg-brand-orange group-hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </a>
        </div>
        <div class="relative bg-white px-4 py-14 md:px-9 duration-200 text-center xl:text-left group hover:shadow-2xl hover:z-10">
          <div class="w-14 h-14 mx-auto xl:mx-0">
            <Image src={Image2} alt="icon" class="w-full h-full" />
          </div>
          <h3 class="capitalize text-brand-green-100 font-semibold text-lg md:text-2xl mt-3">
            Account Managers
          </h3>
          <p class="text-brand-darkblue text-sm mt-3">
            Account managers focus on nurturing long-term relationships with
            clients remotely, maximizing revenue opportunities through video
            calls and email, and ensuring seamless collaboration between your
            business and your customers.
          </p>
          <a
            href="#"
            class="absolute right-5 bottom-3 md:right-10 md:bottom-6 w-10 h-10 rounded-full bg-white flex justify-center items-center group-hover:bg-brand-orange group-hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </a>
        </div>
        <div class="hidden xl:block"></div>
        <div class="relative bg-brand-lightblue-100 px-4 py-14 md:px-9 duration-200 text-center xl:text-left group hover:shadow-2xl hover:z-10">
          <div class="w-14 h-14 mx-auto xl:mx-0">
            <Image src={Image3} alt="icon" class="w-full h-full" />
          </div>
          <h3 class="capitalize text-brand-green-100 font-semibold text-lg md:text-2xl mt-3">
            Sales Managers
          </h3>
          <p class="text-brand-darkblue text-sm mt-3">
            Cosmic&apos;s seasoned sales managers are adept at leading and
            motivating remote sales teams, analyzing performance metrics, and
            developing strategies to drive sales growth from a distance..
          </p>
          <a
            href="#"
            class="absolute right-5 bottom-3 md:right-10 md:bottom-6 w-10 h-10 rounded-full bg-white flex justify-center items-center group-hover:bg-brand-orange group-hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </a>
        </div>
        <div class="relative bg-white px-4 py-14 md:px-9 duration-200 text-center xl:text-left group hover:shadow-2xl hover:z-10">
          <div class="w-14 h-14 mx-auto xl:mx-0">
            <Image src={Image4} alt="icon" class="w-full h-full" />
          </div>
          <h3 class="capitalize text-brand-green-100 font-semibold text-lg md:text-2xl mt-3">
            Business Development
          </h3>
          <p class="text-brand-darkblue text-sm mt-3">
            We find the best business development representatives who excel at
            identifying new market opportunities through digital channels,
            conducting online market research, and generating high-quality leads
            to fuel your remote sales pipeline.
          </p>
          <a
            href="#"
            class="absolute right-5 bottom-3 md:right-10 md:bottom-6 w-10 h-10 rounded-full bg-white flex justify-center items-center group-hover:bg-brand-orange group-hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </a>
        </div>
        <div class="relative bg-brand-lightblue-100 px-4 py-14 md:px-9 duration-200 text-center xl:text-left group hover:shadow-2xl hover:z-10">
          <div class="w-14 h-14 mx-auto xl:mx-0">
            <Image src={Image5} alt="icon" class="w-full h-full" />
          </div>
          <h3 class="capitalize text-brand-green-100 font-semibold text-lg md:text-2xl mt-3">
            Operations Specialists
          </h3>
          <p class="text-brand-darkblue text-sm mt-3">
            Our sales operations specialists are experts in streamlining remote
            processes, managing sales data, and utilizing sales and AI tools and
            software to improve efficiency and productivity while working
            remotely.
          </p>
          <a
            href="#"
            class="absolute right-5 bottom-3 md:right-10 md:bottom-6 w-10 h-10 rounded-full bg-white flex justify-center items-center group-hover:bg-brand-orange group-hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hire;
