import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Footer from '../components/common/Footer/Footer'
import Advantages from '@/components/Advantages/Advantages'
import About from '@/components/About/About'
import HowToStart from '@/components/HowToStart/HowToStart'
import SocialMedia from '@/components/SocialMedia/SocialMedia'
import FAQ from '@/components/FAQ/FAQ'
import Header from '@/components/common/Header/Header'
import HamburgerMenu from '@/components/common/HamburgerMenu/HamburgerMenu'
import {useState, useEffect} from 'react'
import AdvantagesMobile from '@/components/mobile/AdvantagesMobile/AdvantagesMobile'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    const updateMobileView = () => {
      setMobileView(window.innerWidth < 1000);
    };

    // Вызовем updateMobileView при монтировании компонента
    updateMobileView();

    // Добавим слушатель события resize, чтобы обновлять mobileView при изменении размеров окна
    window.addEventListener('resize', updateMobileView);

    // Удалим слушатель при размонтировании компонента
    return () => {
      window.removeEventListener('resize', updateMobileView);
    };
  }, []);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel='stylesheet' href='index.css' />
      </Head>
      <header className={styles.header}>
        {
          mobileView ? <HamburgerMenu /> : <Header />
        }
      </header>
      <main className={`${styles.main} ${inter.className}`}>
        <About />
        {
          mobileView ? <AdvantagesMobile /> : <Advantages />
        }
        
        <HowToStart />
        <SocialMedia />
        <FAQ />
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </>
  )
}
