import Image from 'next/image';

import Img1 from '../../../assets/images/home/icon-process-1.svg';
import Img2 from '../../../assets/images/home/icon-process-2.svg';
import Img3 from '../../../assets/images/home/icon-process-3.svg';
import Img4 from '../../../assets/images/home/icon-process-4.svg';
import Img5 from '../../../assets/images/home/icon-process-5.svg';
import Img6 from '../../../assets/images/home/icon-process-6.svg';
import Google from '../../../assets/images/teams/brand-google.svg';
import Microsoft from '../../../assets/images/teams/brand-microsoft.svg';
import Airbnb from '../../../assets/images/teams/brand-airbnb.svg';
import Pinterest from '../../../assets/images/teams/brand-pinterest.svg';

const data = [
  {
    id: 1,
    img: Img1,
    label: 'Centralized Communication',
    text: 'We provide a centralized communication platform where your remote team and in-house team can collaborate effectively. This ensures seamless information sharing, coordination, and progress tracking.',
  },
  {
    id: 2,
    img: Img2,
    label: 'Training & Skill Development',
    text: 'Our remote sales professionals receive regular training and skill development to stay up-to-date with the latest sales techniques, tools, and industry trends. This helps them remain at the top of their game and contribute effectively to your organization&apos;s success.',
  },
  {
    id: 3,
    img: Img3,
    label: 'Performance Management',
    text: 'We regularly monitor the performance of your remote team, providing feedback and support to ensure they meet your expectations and contribute positively to your business outcomes.',
  },
  {
    id: 4,
    img: Img4,
    label: 'Goal Alignment & Strategy',
    text: 'We work with you to set clear objectives and expectations for your remote sales team, aligning their efforts with your overall business strategy. This ensures they focus on the right tasks and contribute effectively to your organization&apos;s growth.',
  },
  {
    id: 5,
    img: Img5,
    label: 'Team Building & Engagement',
    text: 'To promote team cohesion and morale, we facilitate team-building activities, virtual meet-ups, and other engagement initiatives. This ensures your remote team feels connected to your organization and remains motivated to perform at their best.',
  },
  {
    id: 6,
    img: Img6,
    label: 'HR Functions & Compliance',
    text: 'We take care of all the HR functions and compliance requirements for your remote sales team, including payroll, benefits, legal matters, and more. This allows you to focus on your core business operations without worrying about the administrative aspects of managing remote employees.',
  },
];

const ProcessTeams = () => {
  return (
    <section>
      <div class="max-w-base mx-auto font-base px-5 xl:px-24 py-12 md:py-28">
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-14 text-center sm:text-left mt-14">
          {data.map((item) => (
            <div key={item.id} class="relative">
              <div class="w-16 h-16 mx-auto sm:mx-0 px-2 py-2 bg-brand-orange rounded-2xl">
                <Image src={item.img} alt="icon" class="w-full h-full" />
              </div>
              <h3 class="font-bold text-brand-dark-100 capitalize text-lg md:text-2xl mt-5">
                {item.label}
              </h3>
              <p class="text-brand-gary leading-7 mt-5">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="bg-[#E4F2F0] text-center text-lg md:text-2xl font-urbanist font-medium rounded-xl md:rounded-[1.875rem] mt-10 md:mt-20 px-5 py-7 md:px-11 md:py-8">
          By managing your remote work team, Cosmic empowers you to focus on
          your core business functions, driving growth and success while we take
          care of the day-to-day challenges of remote team management.
        </div>
      </div>
      <div className="bg-brand-light-100">
        <div className="max-w-base mx-auto flex flex-col xl:flex-row gap-10 xl:gap-0 items-center justify-between px-5 xl:px-24 py-10 md:py-20">
          <p className="text-brand-lightgray text-lg md:text-2xl">
            Trusted by:
          </p>
          <div className="grid place-items-center sm:grid-cols-2 lg:grid-cols-4 items-center gap-14">
            <Image src={Google} alt="Google" />
            <Image src={Microsoft} alt="Microsoft" />
            <Image src={Airbnb} alt="Airbnb" />
            <Image src={Pinterest} alt="Pinterest" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTeams;
