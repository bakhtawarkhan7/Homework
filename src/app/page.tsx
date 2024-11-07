import Head from 'next/head';
import Header from './components/header';
import FirstSection from './components/FirstSection';
export default function Home() {
  return (
    <>
      <Head>
        <title>Manzzari - Assignment 5</title>
      </Head>
      <Header />
      <main>
        <FirstSection />
      </main>
    </>
  );
};
