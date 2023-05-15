import ExpertsCondidates from '@/components/sections/condidate/ExpertsCondidates';
import HeroCondidates from '@/components/sections/condidate/HeroCondidates';
import HireCondidates from '@/components/sections/condidate/HireCondidates';
import AppLayout from '@/layouts/AppLayout';

const condidate = () => {
  return (
    <AppLayout>
      <HeroCondidates />
      <HireCondidates />
      <ExpertsCondidates />
    </AppLayout>
  );
};

export default condidate;
