import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/shared/Button';

import Image1 from '../../../assets/images/condidate/icon-hire-1.svg';
import Image2 from '../../../assets/images/condidate/icon-hire-2.svg';
import Image3 from '../../../assets/images/condidate/icon-hire-3.svg';
import Image4 from '../../../assets/images/condidate/icon-hire-4.svg';
import Image5 from '../../../assets/images/condidate/icon-hire-5.svg';

const HireCondidates = () => {
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
            Quality Education
          </h3>
          <p class="text-brand-darkblue text-sm mt-3">
            All our candidates hold a degree in business studies from reputable
            colleges and universities, ensuring a strong educational foundation
            in sales and business development, as well as the expertise required
            to excel in their roles.
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
            Skill Assessment
          </h3>
          <p class="text-brand-darkblue text-sm mt-3">
            We carefully evaluate each candidate&apos;s sales and business
            development skills, industry knowledge, and technical expertise to
            ensure they&apos;re a strong fit for your needs.
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
            Background Check
          </h3>
          <p class="text-brand-darkblue text-sm mt-3">
            To ensure integrity and reliability, we conduct thorough background
            checks, verifying education, employment history, and references for
            every potential team member.
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
            AI Aptitude
          </h3>
          <p class="text-brand-darkblue text-sm mt-3">
            Our candidates are put through a rigorous assessment of their
            ability to utilize AI tools, like ChatGPT, and other cutting-edge
            sales technologies, ensuring they can effectively harness these
            solutions to deliver results.
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
            Culture Compatibility
          </h3>
          <p class="text-brand-darkblue text-sm mt-3">
            Finally, we evaluate each candidate&apos;s adaptability, communication
            skills, and ability to integrate with your company culture, ensuring
            seamless collaboration and peak performance within your team.
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

export default HireCondidates;
