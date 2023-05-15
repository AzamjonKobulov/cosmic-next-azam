import AppLayout from '@/layouts/AppLayout';
import Hero from '@/components/sections/home/Hero';
import High from '@/components/sections/home/High';
import Hire from '@/components/sections/home/Hire';
import Trusted from '@/components/sections/home/Trusted';
import Ways from '@/components/sections/home/Ways';
import Process from '@/components/sections/home/Process';
import Team from '@/components/sections/home/Team';
import Why from '@/components/sections/home/Why';
import Calculator from '@/components/sections/home/Calculator';
import Experts from '@/components/sections/home/Experts';
import Find from '@/components/sections/home/Find';

const Home = () => {
  return (
    <AppLayout>
      <Hero />
      <High />
      <Hire />
      <Trusted />
      <Ways />
      <Process />
      <Team />
      <Why />
      <Calculator />
      <Experts />
    </AppLayout>
  );
};

export default Home;
