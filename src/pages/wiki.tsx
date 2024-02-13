import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Footer from '../components/common/Footer/Footer'
import WikiHeader from '../components/common/WikiHeader/WikiHeader'
import HamburgerMenu from '@/components/common/HamburgerMenu/HamburgerMenu'
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
        <title>Wiki</title>
        <meta name=" descripti on" content="Ge nerated   by  create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel='stylesheet' href='index.css' />
      </Head>
      <header className={styles.header}>
        {
          mobileView ?
            <HamburgerMenu
              getDonat={setShowPaymentModal}
              handleNavigation={handleNavigation}
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
