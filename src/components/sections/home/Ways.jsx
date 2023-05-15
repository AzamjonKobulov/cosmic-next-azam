import Image from 'next/image';

import Tick from '../../../assets/images/home/icon-tick.svg';
import Stars from '../../../assets/images/home/icon-possible.svg';
import Circle from '../../../assets/images/home/bg-circle.svg';

const Ways = () => {
  return (
    <section className="relative bg-brand-green-200 font-base">
      <div className="relative max-w-base mx-auto py-12 md:py-28 px-5 xl:px-24 z-10">
        <h2 className="max-w-4xl mx-auto text-center capitalize text-white font-semibold text-2xl md:text-3xl lg:text-5xl">
          Possible Ways We Can Work Together
        </h2>
        <p className="max-w-6xl text-center text-white text-lg md:text-2xl mt-8">
          At Cosmic, we believe that every business is unique and so are its
          needs. Here are three ways we can collaborate, ensuring you get the
          best outcome.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-9 mt-12 md:mt-16">
          <div className="bg-brand-light-100 rounded-3xl py-8 px-6">
            <h3 className="text-center text-brand-green-100 font-bold text-xl md:text-3xl">
              Only Hiring
            </h3>
            <div className="flex gap-3 shrink-0 mt-5">
              <div className="w-5 h-5">
                <Image src={Tick} alt="" className="w-full h-full" />
              </div>
              <p className="flex-1">
                Looking for top talent without the extras? We&apos;ll put our
                headhunting skills to work and find you the perfect remote sales
                candidates to join your team directly.
              </p>
            </div>
            <div className="flex gap-3 shrink-0 mt-5">
              <div className="w-5 h-5">
                <Image src={Tick} alt="" className="w-full h-full" />
              </div>
              <p className="flex-1">
                Suited for companies with established payroll and HR functions
              </p>
            </div>
            <div className="flex gap-3 shrink-0 mt-5">
              <div className="w-5 h-5">
                <Image src={Tick} alt="" className="w-full h-full" />
              </div>
              <p className="flex-1">
                We charge 30% of the candidate&apos;s annual salary
              </p>
            </div>
          </div>

          <div className="bg-brand-light-100 rounded-3xl py-8 px-6">
            <h3 className="text-center text-brand-green-100 font-bold text-xl md:text-3xl">
              Hiring and Managing
            </h3>
            <div className="flex gap-3 shrink-0 mt-5">
              <div className="w-5 h-5">
                <Image src={Tick} alt="" className="w-full h-full" />
              </div>
              <p className="flex-1">
                Need a comprehensive solution? We&apos;ll not only source the
                best dedicated remote sales professionals for your business but
                also manage their payroll, compliances, and other HR functions,
                giving you complete peace of mind.
              </p>
            </div>
            <div className="flex gap-3 shrink-0 mt-5">
              <div className="w-5 h-5">
                <Image src={Tick} alt="" className="w-full h-full" />
              </div>
              <p className="flex-1">Suited for growing organizations</p>
            </div>
            <div className="flex gap-3 shrink-0 mt-5">
              <div className="w-5 h-5">
                <Image src={Tick} alt="" className="w-full h-full" />
              </div>
              <p className="flex-1">
                Starts from $1999/mo. (usually less than 1/3rd the cost of local
                hire)
              </p>
            </div>
          </div>

          <div className="bg-brand-light-100 rounded-3xl py-8 px-6">
            <h3 className="text-center text-brand-green-100 font-bold text-xl md:text-3xl">
              Part-Time Resources
            </h3>
            <div className="flex gap-3 shrink-0 mt-5">
              <div className="w-5 h-5">
                <Image src={Tick} alt="" className="w-full h-full" />
              </div>
              <p className="flex-1">
                Seeking short-term sales support? Just share your requirements,
                and we&apos;ll provide you with a list of carefully selected
                part-time candidates to choose from. We&apos;ll help you find
                the perfect fit for your temporary needs.
              </p>
            </div>
            <div className="flex gap-3 shrink-0 mt-5">
              <div className="w-5 h-5">
                <Image src={Tick} alt="" className="w-full h-full" />
              </div>
              <p className="flex-1">
                Suited for short-term projects or exploration tasks
              </p>
            </div>
            <div className="flex gap-3 shrink-0 mt-5">
              <div className="w-5 h-5">
                <Image src={Tick} alt="" className="w-full h-full" />
              </div>
              <p className="flex-1">Starts from $899/mo</p>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 xl:top-32 xl:right-44">
          <Image src={Stars} alt="icon" className="w-full h-full" />
        </div>
      </div>
      <div className="absolute -top-40 md:-top-96 right-0">
        <Image src={Circle} alt="Circle Bg" />
      </div>
    </section>
  );
};

export default Ways;
