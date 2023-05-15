import Calculator from '@/components/sections/home/Calculator';
import AppNav from '@/layouts/AppNav';
import AppFooter from '@/layouts/AppFooter';

const calculator = () => {
  return (
    <div>
      <AppNav className="bg-brand-green-100" />
      <div className="mb-16"></div>
      <Calculator className="pt-20" />
      <AppFooter />
    </div>
  );
};

export default calculator;
