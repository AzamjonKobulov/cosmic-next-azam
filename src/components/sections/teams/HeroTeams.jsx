import Link from 'next/link';

import Button from '@/components/shared/Button';

const Hero = () => {
  return (
    <section className="bg-brand-green-200">
      <div className="max-w-base mx-auto bg-heroBg bg-no-repeat bg-top">
        <div className="relative text-white px-5 xl:px-28 pt-28 md:pt-40 pb-24 md:pb-56">
          <div className="text-center">
            <h1 className="max-w-3xl mx-auto text-3xl md:text-5xl lg:text-6xl font-pop font-semibold lg:leading-[4.375rem]">
              Managed Remote Teams
            </h1>
            <p className="max-w-[68.75rem] mx-auto font-urban md:leading-10 text-lg md:text-28 mt-9">
              At Cosmic, we go beyond just providing you with exceptional remote
              sales professionals. We also take care of managing your remote
              team, ensuring a smooth and hassle-free experience so you can
              focus on your business goals. Here&apos;s an overview of how we
              manage your remote work team
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
