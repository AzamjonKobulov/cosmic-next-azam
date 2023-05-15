import AppLayout from '@/layouts/AppLayout';
import HeroAbout from '@/components/sections/about/HeroAbout';
import Paragraphs from '@/components/sections/about/Paragraphs';
import ExpertsAbout from '@/components/sections/about/ExpertsAbout';

const about = () => {
  return (
    <AppLayout>
      <HeroAbout />
      <Paragraphs />
      <ExpertsAbout />
    </AppLayout>
  );
};

export default about;
