import Image from 'next/image';

import Button from '@/components/shared/Button';
import CalculatorImg from '../../../assets/images/home/img-calculator.png';
import SelectPosition from '../../shared/SelectPosition';
import SelectCountry from '../../shared/SelectCountry';

const Calculator = () => {
  return (
    <section className="bg-brand-light-200">
      <div className="max-w-base mx-auto font-base px-5 xl:px-[7.375rem] py-12 md:py-28">
        <div className="max-w-sm mx-auto sm:max-w-full flex flex-col sm:flex-row gap-5 lg:gap-8">
          <div className="max-w-lg w-full rounded-3xl">
            <Image
              src={CalculatorImg}
              alt="calculator"
              className="w-full h-full"
            />
          </div>
          <div className="">
            <SelectCountry />
            <SelectPosition />
            <input
              type="text"
              name="salary"
              id="salary"
              className="w-full outline-brand-orange rounded-2xl lg:text-xl py-3 lg:py-6 px-6 lg:px-9"
              placeholder="Approx estimated local Salary VS Cosmic Salary"
            />

            <input
              type="text"
              name="savings"
              id="savings"
              className="w-full outline-brand-orange rounded-2xl lg:text-xl py-3 lg:py-6 px-6 lg:px-9 mt-4 lg:mt-7"
              placeholder="% Savings with Cosmic"
            />

            <Button className="btnPrimary rounded-3xl mt-8 lg:mt-16">
              Calculate
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
