import Image from 'next/image';

import Img1 from '../../../assets/images/home/img-panel-1.jpeg';
import Img2 from '../../../assets/images/home/img-panel-2.jpeg';
import Img3 from '../../../assets/images/home/img-panel-3.jpeg';
import Img4 from '../../../assets/images/home/img-panel-4.jpeg';

const data = [
  {
    id: 1,
    img: Img1,
    name: 'Christian Steinmann',
    job: 'Business Development Expert',
  },
  {
    id: 2,
    img: Img2,
    name: 'Jake',
    job: 'B2B Sales Expert',
  },
  {
    id: 3,
    img: Img3,
    name: 'Naveen Picardo',
    job: 'Sales and Biz Dev Expert',
  },
  {
    id: 4,
    img: Img4,
    name: 'Srini Sharma',
    job: 'Growth Expert',
  },
];

const Experts = () => {
  return (
    <section className="bg-white">
      <div className="max-w-base mx-auto font-base px-5 xl:px-28 py-12 md:py-24">
        <h2 className="font-bold text-brand-dark-200 text-center text-3xl md:text-4xl lg:text-5xl">
          Our Panel Experts
        </h2>
        <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6 mt-12 md:mt-16">
          {data.map((item) => (
            <div key={item.id} className="flex justify-center">
              <div className="w-full rounded-xl xl:p-4">
                <div className="aspect-square">
                  <Image
                    src={item.img}
                    alt="png"
                    className="w-full h-full object-cover rounded-[0.625rem]"
                  />
                </div>
                <h3 className="capitalize text-brand-dark-200 font-medium text-lg md:text-2xl mt-3">
                  {item.name}
                </h3>
                <p className="font-bold text-brand-orange">{item.job}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experts;
