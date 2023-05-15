import Image from 'next/image';

import Img1 from '../../../assets/images/home/icon-process-1.svg';
import Img2 from '../../../assets/images/home/icon-process-2.svg';
import Img3 from '../../../assets/images/home/icon-process-3.svg';
import Img4 from '../../../assets/images/home/icon-process-4.svg';
import Img5 from '../../../assets/images/home/icon-process-5.svg';
import Img6 from '../../../assets/images/home/icon-process-6.svg';
import Bg1 from '../../../assets/images/home/one.svg';
import Bg2 from '../../../assets/images/home/two.svg';
import Bg3 from '../../../assets/images/home/three.svg';
import Bg4 from '../../../assets/images/home/four.svg';
import Bg5 from '../../../assets/images/home/five.svg';
import Bg6 from '../../../assets/images/home/six.svg';

const data = [
  {
    id: 1,
    img: Img1,
    bg: Bg1,
    label: 'Online Questionnaire',
    text: 'Fill-out the survey, sharing your business needs, sales goals, and specific requirements. We will assess your requirements and start developing a tailored solution.',
  },
  {
    id: 2,
    img: Img2,
    bg: Bg2,
    label: 'Talent Matching',
    text: 'We handpick the best-suited professionals from our diverse talent pool, considering their skills, expertise, and industry experience to match your business objectives.',
  },
  {
    id: 3,
    img: Img3,
    bg: Bg3,
    label: 'Technology Enablement & Training',
    text: 'While most of the professionals working with us are pre-trained on cutting edge tools like Salesforce, Apollo, Hubspot and AI and ChatGPT, we train them specifically for your company and business',
  },
  {
    id: 4,
    img: Img4,
    bg: Bg4,
    label: 'Onboarding & Integratione',
    text: 'organization to seamlessly onboard and integrate our remote sales talent, ensuring smooth collaboration from the start.',
  },
  {
    id: 5,
    img: Img5,
    bg: Bg5,
    label: 'Ongoing Support & Performance',
    text: 'Cosmic continuously provides support and guidance to both your team and our remote sales professionals. We monitor performance and offer insights for continuous improvement.',
  },
  {
    id: 6,
    img: Img6,
    bg: Bg6,
    label: 'Growth & Scalability',
    text: 'As your business evolves, we help you scale your remote sales team accordingly. Cosmic adapts to your changing needs, ensuring ongoing success and maximum ROI.',
  },
];

const Process = () => {
  return (
    <section class="bg-brand-lightblue-200">
      <div class="max-w-base mx-auto font-base px-5 xl:px-24 py-12 md:py-28">
        <div class="text-center text-brand-green-200">
          <h2 class="font-bold text-3xl md:text-4xl lg:text-5xl">
            Our Process
          </h2>
          <h3 class="font-semibold text-2xl md:text-3xl lg:text-4xl mt-3">
            Get up and gunning with your Sales targets
          </h3>
          <p class="max-w-4xl mx-auto text-lg md:text-xl mt-3">
            Our streamlined process ensures a hassle-free experience as you
            partner with Cosmic to unlock the potential of your remote sales
            dream team:
          </p>
        </div>
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
              <div class="absolute right-4 bottom-0">
                <Image src={item.bg} alt="number" />
              </div>
            </div>
          ))}
        </div>
        <p class="font-bold text-center mt-12">
          By following this structured process, Cosmic guarantees a smooth
          collaboration, allowing you to focus on achieving outstanding sales
          results while we handle the rest.
        </p>
      </div>
    </section>
  );
};

export default Process;
