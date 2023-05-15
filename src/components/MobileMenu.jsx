import Link from 'next/link';

import Accordion from '../components/Accordion';
import Button from './shared/Button';

const links = [
  { id: 1, label: 'why us', href: '/' },
  { id: 2, label: 'cost calculator', href: '/calculator' },
  { id: 3, label: 'about us', href: '/about' },
  { id: 4, label: 'how it works', href: '/' },
  { id: 5, label: 'contact', href: '/' },
];

const MobileMenu = () => {
  return (
    <div className="min-h-screen flex flex-col gap-6 pt-20 bg-brand-light-100 absolute inset-x-0 top-[62px] md:top-20 px-4">
      <div className="flex flex-col items-center text-black/70 capitalize text-xl font-medium space-y-7">
        {links.map((link) => (
          <Link
            className=" active:text-brand-orange transition duration-200"
            key={link.id}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <Accordion />
      <Button
        pill
        className="max-w-sm mx-auto w-full block text-base transition duration-200"
      >
        Hire Now!
      </Button>
    </div>
  );
};

export default MobileMenu;
