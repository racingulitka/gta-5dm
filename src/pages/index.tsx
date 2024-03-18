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
import useIsMobile from '@/utils/useIsMobile'
import toTheUpIcon from '@/pages/wiki/assets/toTheUpIcon.svg'
import Image from 'next/image'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {



  const mobileView = useIsMobile()
  const [showPaymentModal, setShowPaymentModal] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<number>(0)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(document.documentElement.scrollTop)
    }
    window.addEventListener('scroll', handleScroll)
    return () => removeEventListener('scroll', handleScroll)
  }, [])

  const onRequestClose = () => {
    setShowPaymentModal(false)
  }

  const onScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <ParallaxProvider>
        <Head>
          <meta itemScope={true} itemType="http://schema.org/Header" />
          <title itemProp='headline'>GTA 5 DM: DM сервер GTA 5 с рейтинговым режимом! | gta5dm.pro</title>
          <meta itemProp='description' name="description" content="GTA 5 DM - это гта 5 дм сервер, на которым ты сможешь показать всем свой скил стрельбы!, Проект сделан на базе игры GTA 5, платформа RAGE MP . У нас ты найдешь такие режимы как: Рейтинговые матчи, Ghetto Gangwars и другие. Присоединяйся к нам и покажи кто тут хозяин гетто!" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="keywords" content='gta 5 dm, dm server gta 5, дм сервера гта 5, dm в гта 5l' />
          <link rel="icon" href="/favicon.ico" />
          <link rel='stylesheet' href='index.css' />
          <link rel="alternate" hrefLang="ru" href="https://www.yourwebsite.com/" />
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
            isScrolled > 1080 && !mobileView &&
            <div className={styles.toTop} onClick={() => onScrollTop()}>
              <div className={styles.square}>
                <Image src={toTheUpIcon} alt='toTheUpIcon' className={styles.toTheUpIcon} />
              </div>
              <div className={styles.title}>Наверх</div>
            </div>
          }
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
