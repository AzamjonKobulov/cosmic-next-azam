import Image from 'next/image';

import India from '../../../assets/images/home/img-india.svg';

const Why = () => {
  return (
    <section class="bg-white">
      <div class="max-w-base mx-auto font-base px-5 xl:px-24 py-12 md:py-28">
        <div class="grid xl:grid-cols-3 items-center">
          <div class="xl:col-span-2 text-center xl:text-left">
            <h3 class="font-bold text-3xl text-brand-green-200 md:text-4xl lg:text-5xl">
              Why India? (Or India Advantage)
            </h3>
            <p class="font-bold md:text-lg lg:text-xl mt-6 md:mt-10">
              Choosing an India-based remote sales team offers numerous
              advantages for your organization. India&apos;s cost-effective, highly
              skilled workforce, strong education system, and large talent pool
              of sales and business development professionals make it an ideal
              choice. Graduates from prestigious business schools like the
              Indian Institutes of Management (IIMs) bring in-depth knowledge
              and expertise to the table. Additionally, India&apos;s strong English
              proficiency, technological advancements, cultural adaptability,
              and time zone benefits ensure seamless communication, integration,
              and round-the-clock productivity. By selecting a remote sales team
              from India, you&apos;ll access top talent, advanced tools, and
              cost-saving benefits to help your business thrive.
            </p>
          </div>
          <div class="max-w-lg mx-auto w-full">
            <Image src={India} alt="india" class="w-full aspect-square" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
