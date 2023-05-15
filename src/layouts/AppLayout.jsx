import Head from 'next/head';

import AppFooter from './AppFooter';
import AppNav from './AppNav';
import Find from '@/components/sections/home/Find';

const AppLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Cosmic</title>
      </Head>
      <AppNav />
      <main>{children}</main>
      <Find />
      <AppFooter />
    </>
  );
};

export default AppLayout;
