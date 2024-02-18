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
import { useState, useEffect } from 'react'
import AdvantagesMobile from '@/components/mobile/AdvantagesMobile/AdvantagesMobile'
import PaymentModal from '@/components/common/PaymentModal/PaymentModal'
import News from '@/components/News/News'
import { ParallaxProvider } from 'react-scroll-parallax'
import HowToStartMobile from '@/components/mobile/HowToStartMobile/HowToStartMobile'
import NewsMobile from '@/components/mobile/NewsMobile/NewsMobile'
import { handleNavigation } from '@/utils/handleNavigation'
import FAQMobile from '@/components/FAQ/FAQMobile'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {



  const [mobileView, setMobileView] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState<boolean>(false)
  useEffect(() => {
    const updateMobileView = () => {
      setMobileView(window.innerWidth < 767);
    };

    // Вызовем updateMobileView при монтировании компонента
    updateMobileView();

    // Добавим слушатель события resize, чтобы обновлять mobileView при изменении размеров окна
    window.addEventListener('resize', updateMobileView);

    // Удалим слушатель при размонтировании компонента
    return () => {
      window.removeEventListener('resize', updateMobileView);
    };
  }, [])

  const onRequestClose = () => {
    setShowPaymentModal(false)
  }

  return (
    <>
      <ParallaxProvider>
        <Head>
          <title>GTA 5 DM: DM сервер GTA 5 с рейтинговым режимом! | gta5dm.pro</title>
          <meta name="description" content="GTA 5 DM - это гта 5 дм сервер, на которым ты сможешь показать всем свой скил стрельбы!, Проект сделан на базе игры GTA 5, платформа RAGE MP . У нас ты найдешь такие режимы как: Рейтинговые матчи, Ghetto Gangwars и другие. Присоединяйся к нам и покажи кто тут хозяин гетто!" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <link rel='stylesheet' href='index.css' />
        </Head>
        <header className={styles.header}>
          {
            mobileView ?
              <HamburgerMenu
                getDonat={setShowPaymentModal}
                handleNavigation={handleNavigation} />
              : <Header
                getDonat={setShowPaymentModal}
                handleNavigation={handleNavigation}
              />
          }
        </header>
        <main className={`${styles.main} ${inter.className}`}>
          {
            mobileView ? <AdvantagesMobile /> : <Advantages />
          }
          {
            mobileView ? <NewsMobile /> : <News />
          }
          {
            mobileView ? <HowToStartMobile /> : <HowToStart />
          }
          <About />
          <SocialMedia />
          {
            mobileView ? <FAQMobile /> : <FAQ />
          }
          {
            showPaymentModal &&
            <PaymentModal
              onRequestClose={onRequestClose}
            />
          }
        </main>
        <footer className={styles.footer}>
          <Footer />
        </footer>
      </ParallaxProvider>
    </>
  )
}
