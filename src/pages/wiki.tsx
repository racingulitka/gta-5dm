import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Footer from '../components/common/Footer/Footer'
import WikiHeader from '../components/common/WikiHeader/WikiHeader'
import HamburgerMenuWiki from '@/components/common/HamburgerMenuWiki/HamburgerMenuWiki'
import { useState, useEffect } from 'react'
import PaymentModal from '@/components/common/PaymentModal/PaymentModal'
import Wiki from '@/components/Wiki/Wiki'
import { handleNavigation } from '@/utils/handleNavigation'
import MobileWiki from '@/components/Wiki/MobileWiki'

const inter = Inter({ subsets: ['latin'] })

// import { initDB } from '@/server/models/index';


// export const getServerSideProps = async () => {
//   await initDB()
//   return {props:{}}
// };

export default function WikiMain() {
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
      <Head>
        <meta itemScope={true} itemType="http://schema.org/Header" />
        <title itemProp='headline'>Wiki</title>
        <meta itemProp='description' name=" description" content="gta 5 dm wiki" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="gta 5 dm, dm server gta 5, дм сервера гта 5, dm в гта 5" />
        <link rel="icon" href="/favicon.ico" />
        <link rel='stylesheet' href='index.css' />
        <link rel="alternate" hrefLang="ru" href="https://www.yourwebsite.com/" />
      </Head>
      <header className={styles.header}>
        {
          mobileView ?
            <HamburgerMenuWiki
              getDonat={setShowPaymentModal}
            />
            : <WikiHeader
              getDonat={setShowPaymentModal}
            />
        }
      </header>
      <main className={`${styles.main} ${inter.className}`}>
        {
          mobileView ?
            <MobileWiki /> : <Wiki />
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
    </>
  )
}
