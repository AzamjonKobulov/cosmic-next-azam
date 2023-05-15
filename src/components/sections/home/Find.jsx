import Link from 'next/link';
import Button from '@/components/shared/Button';

const Find = () => {
  return (
    <section className="bg-brand-green-100">
      <div className="max-w-base mx-auto font-base text-white px-5 xl:px-28 py-12 md:py-24">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 shrink-0">
          <div className="text-center lg:text-left">
            <h3 className="font-bold text-2xl md:text-3xl lg:text-5xl">
              Find your next great opportunity!
            </h3>
            <p className="max-w-xl mt-4">
              We are taking action to help our freelancers, our clients, and the
              people of the world—and so can you.
            </p>
          </div>
          <Link href="/" className="group">
            <Button
              pill
              className="inline-flex gap-3 font-mont font-semibold mt-10 md:mt-20"
            >
              <span>Get Started</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Find;
