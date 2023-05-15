import Image from 'next/image';

import Button from '@/components/shared/Button';
import Logo from '../assets/images/shared/logo.svg';
import Line from '../assets/images/home/line-footer.svg';
import Facebook from '../assets/images/home/icon-facebook.svg';
import Linkedin from '../assets/images/home/icon-linkedin.svg';
import Twitter from '../assets/images/home/icon-twitter.svg';
import Instagram from '../assets/images/home/icon-insta.svg';

const AppFooter = () => {
  return (
    <footer className="bg-brand-green-200">
      <div className="max-w-base mx-auto font-base text-brand-lightgray px-5 xl:px-28">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 xl:items-center gap-6 py-12 justify-center sm:justify-between md:py-24">
          <div>
            <div>
              <Image src={Logo} alt="logo" />
            </div>
            <p className="font-semibold mt-4">
              We Help You Build a Stellar Sales Team At 1/3rd The Cost.
            </p>
          </div>

          <div className="font-semibold">
            <div className="flex flex-col md:flex-row gap-2 md:gap-10 md:justify-center">
              <a href="#" className="duration-200 hover:text-brand-orange">
                Find Talent
              </a>
              <a href="#" className="duration-200 hover:text-brand-orange">
                Clients
              </a>
              <a href="#" className="duration-200 hover:text-brand-orange">
                Blog
              </a>
            </div>
            <div className="flex flex-col md:flex-row gap-2 md:gap-10 mt-2 md:mt-8 md:justify-center">
              <a href="#" className="duration-200 hover:text-brand-orange">
                FAQ
              </a>
              <a href="#" className="duration-200 hover:text-brand-orange">
                About Us
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-brand-orange">Newsletter</h3>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 shrink-0 mt-4 lg:mt-8">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email here"
                className="py-3 md:py-4 px-8 rounded-full font-semibold bg-white/10 outline-none"
              />
              <Button className="inline-flex btnPrimary rounded-full justify-center">
                Send
              </Button>
            </div>
          </div>
        </div>

        <div>
          <Image src={Line} alt="line" className="w-full" />
        </div>

        <div className="py-6">
          <div className="flex flex-wrap gap-6 justify-center sm:justify-between items-center shrink-0">
            <p>© 2023 Cosmic® Global Inc.</p>

            <div className="flex gap-3 items-center">
              <a
                href="#"
                className="w-10 h-10 flex justify-center items-center rounded-full border border-brand-lightgray py-3 px-2 hover:bg-brand-orange hover:border-white"
              >
                <Image src={Facebook} alt="" className="w-full h-full" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex justify-center items-center rounded-full border border-brand-lightgray py-3 px-3 hover:bg-brand-orange hover:border-white"
              >
                <Image src={Linkedin} alt="" className="w-full h-full" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex justify-center items-center rounded-full border border-brand-lightgray py-3 px-3 hover:bg-brand-orange hover:border-white"
              >
                <Image src={Twitter} alt="" className="w-full h-full" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex justify-center items-center rounded-full border border-brand-lightgray py-3 px-3 hover:bg-brand-orange hover:border-white"
              >
                <svg
                  width="14"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.707 1.60836C13.6279 1.31057 13.472 1.03875 13.255 0.820094C13.0379 0.601436 12.7672 0.443597 12.47 0.362359C11.379 0.0683593 7 0.0683594 7 0.0683594C7 0.0683594 2.622 0.0683593 1.53 0.362359C1.23279 0.443811 0.962098 0.601705 0.74489 0.820316C0.527683 1.03893 0.371536 1.31063 0.292 1.60836C0 2.70736 0 5.00036 0 5.00036C0 5.00036 0 7.29336 0.292 8.39236C0.371321 8.69009 0.527412 8.96178 0.744666 9.18026C0.96192 9.39874 1.23272 9.55636 1.53 9.63736C2.622 9.93236 7 9.93236 7 9.93236C7 9.93236 11.378 9.93236 12.469 9.63736C12.7663 9.55667 13.0372 9.39914 13.2543 9.18059C13.4714 8.96205 13.6272 8.6902 13.706 8.39236C14 7.29336 14 5.00036 14 5.00036C14 5.00036 14 2.70736 13.707 1.60836ZM5.568 7.08236V2.91836L9.228 5.00036L5.568 7.08236Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex justify-center items-center rounded-full border border-brand-lightgray py-3 px-3 hover:bg-brand-orange hover:border-white"
              >
                <Image src={Instagram} alt="" className="w-full h-full" />
              </a>
            </div>

            <div className="flex gap-10">
              <a
                href="#"
                className="font-medium duration-200 hover:text-brand-orange"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="font-medium duration-200 hover:text-brand-orange"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
