import Image from 'next/image';

import Image1 from '../../../assets/images/home/icon-high-1.svg';
import Image2 from '../../../assets/images/home/icon-hight-2.svg';
import Image3 from '../../../assets/images/home/icon-high-3.svg';
import Image4 from '../../../assets/images/home/icon-high-4.svg';

const data = [
  {
    id: 1,
    img: Image1,
    label: 'Spend Less',
    text: 'Cut costs on hiring and HR functions, redirecting resources to what matters most for your business.',
  },
  {
    id: 2,
    img: Image2,
    label: 'Sell More',
    text: 'Boost sales performance by leveraging our AI-powered remote sales teams expertise and efficiency.',
  },
  {
    id: 3,
    img: Image3,
    label: 'Grow Easily',
    text: 'Scale your remote sales team effortlessly as your business needs evolve, ensuring continuous expansion.',
  },
  {
    id: 4,
    img: Image4,
    label: 'Stay Ahead',
    text: 'Embrace cutting-edge AI technologies like ChatGPT to maintain a competitive edge in an ever-changing landscape.',
  },
];

const High = () => {
  return (
    <section className='bg-brand-lightblue-200'>
      <div className='max-w-base mx-auto font-base text-center px-5 xl:px-24 py-12 md:py-28'>
        <h2 className='max-w-6xl mx-auto text-2xl md:text-4xl lg:text-5xl lg:leading-[3.625rem] font-bold'>
          A high caliber remote team can help you reduce costs without missing
          your targets
        </h2>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8 text-white mt-12'>
          {data.map((item) => (
            <div
              key={item.id}
              className='bg-brand-green-200 rounded-lg text-center px-4 py-6'>
              <div className='w-16 h-16 mx-auto'>
                <Image src={item.img} alt='/' />
              </div>
              <h3 className='font-bold uppercase text-lg md:text-xl mt-3'>
                {item.label}
              </h3>
              <p className='max-w-lg mx-auto mt-5 text-sm'>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default High;
