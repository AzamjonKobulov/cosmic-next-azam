import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/shared/Button';
import Person1 from '../../../assets/images/home/img-person-1.svg';
import Person2 from '../../../assets/images/home/img-person-2.svg';
import Person3 from '../../../assets/images/home/img-person-3.svg';
import Message from '../../../assets/images/home/img-arrow.svg';
import RoundLg from '../../../assets/images/home/img-round-big.svg';
import RoundMd from '../../../assets/images/home/img-round-medium.svg';
import RoundSm from '../../../assets/images/home/img-round-sm.svg';
import Flower from '../../../assets/images/home/img-flower.svg';

const Hero = () => {
  return (
    <section className="bg-brand-green-200">
      <div className="max-w-base mx-auto bg-heroBg bg-no-repeat bg-top md:pb-16">
        <div className="relative text-white px-5 xl:px-28 pt-28 md:pt-48 pb-24 md:pb-56">
          <div className="text-center">
            <h1 className="max-w-3xl mx-auto text-3xl md:text-5xl lg:text-6xl font-pop font-semibold lg:leading-[4.375rem]">
              Hire Remote Sales Talent From The
              <span className="ml-3">Top 5%</span>
            </h1>
            <p className="font-mont font-semibold text-lg md:text-xl mt-7">
              We Help You Build a Stellar Sales Team At 1/3rd The Cost
            </p>
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
            <p className="font-mont md:text-lg mt-4">
              30-day moneyback guarantee
            </p>
          </div>

          <div className="absolute md:bottom-64 lg:top-64 xl:top-48 left-5 xl:left-32 w-28 hidden md:block">
            <Image src={Person1} alt="Person Image" />
          </div>
          <div className="absolute right-72 top-32 hidden md:block">
            <Image src={Message} alt="Person Image" />
          </div>
          <div className="absolute bottom-0 left-40 xl:left-52 hidden lg:block">
            <Image src={Person2} alt="Person Image" />
          </div>
          <div className="absolute right-5 xl:right-32 bottom-32 lg:bottom-72 hidden md:block">
            <Image src={Person3} alt="Person Image" />
          </div>
          <div className="absolute bottom-0 right-2/3 lg:right-36 hidden md:block">
            <Image src={Flower} alt="Person Image" />
          </div>
          <div className="absolute left-5 md:left-36 bottom-48 md:bottom-72">
            <Image src={RoundSm} alt="Person Image" />
          </div>
          <div className="absolute right-20 md:right-80 bottom-5 lg:bottom-64">
            <Image src={RoundLg} alt="Person Image" />
          </div>
          <div className="absolute right-10 md:right-28 top-16 md:top-36">
            <Image src={RoundMd} alt="Person Image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
