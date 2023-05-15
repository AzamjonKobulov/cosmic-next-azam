import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/shared/Button';
import Logo from '../assets/images/shared/logo.svg';
import MobileMenu from '@/components/MobileMenu';
import DropDown from '../components/DropDown';

const AppNav = ({ className }) => {
  const [isOpen, setIsOpen] = useState();
  const [nav, setNav] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 1) {
        setNav(true);
      } else {
        setNav(false);
      }

      return () => {
        window.removeEventListener('scroll');
      };
    });
  }, []);

  useEffect(() => {
    const body = document.getElementById('body');

    isOpen
      ? body.classList.add('fixed__body')
      : body.classList.remove('fixed__body');
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 inset-x-0 ${className} xl:px-28 z-50 text-white ${
        nav ? 'bg-brand-green-200 shadow' : ''
      }`}
    >
      {isOpen && <MobileMenu />}
      <div className="max-w-base mx-auto w-full flex justify-between items-center  font-base font-semibold py-3 md:py-4 lg:py-5 px-5">
        <div>
          <Link href="/">
            <Image src={Logo} alt="Cosmic" />
          </Link>
        </div>
        <div className="flex items-center gap-10">
          <div className="hidden lg:flex gap-9">
            <Link href="/" className="duration-200 hover:text-brand-orange">
              Why Us
            </Link>
            <Link
              href="/calculator"
              className="duration-200 hover:text-brand-orange"
            >
              Cost Calculator
            </Link>
            <DropDown />
            <Link
              href="/about"
              className="duration-200 hover:text-brand-orange"
            >
              About Us
            </Link>
            <Link href="/" classN ame="duration-200 hover:text-brand-orange">
              How It Works
            </Link>
            <Link href="/" className="duration-200 hover:text-brand-orange">
              Contact
            </Link>
          </div>
          <Button rounded className="hidden md:block rounded-xl">
            Hire Now!
          </Button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="block lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default AppNav;
