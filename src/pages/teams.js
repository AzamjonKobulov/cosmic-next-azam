import AppLayout from '@/layouts/AppLayout';
import HeroTeams from '@/components/sections/teams/HeroTeams';
import ProcessTeams from '@/components/sections/teams/ProcessTeams';

const teams = () => {
  return (
    <AppLayout>
      <HeroTeams />
      <ProcessTeams />
    </AppLayout>
  );
};

export default teams;
