import { useRouter } from 'next/router'
import { wikiArr } from '@/components/Wiki/Wiki.config'
import React, { useState, useEffect } from 'react'
import styles from './id.module.scss'
import mainStyles from '@/styles/Home.module.css'
import WikiHeader from '../../../components/common/WikiHeader/WikiHeader'
import Footer from '@/components/common/Footer/Footer'
import PaymentModal from '@/components/common/PaymentModal/PaymentModal'
import Image from 'next/image'
import smallCross from './assets/smallCross.svg'
import middleCross from './assets/middleCross.svg'
import bigCross from './assets/bigCross.svg'
import BuyButton from '@/components/HowToStart/BuyButton/BuyButton'
import HamburgerMenuWiki from '@/components/common/HamburgerMenuWiki/HamburgerMenuWiki'
import Link from 'next/link'
import logo from './assets/logo.svg'
import Head from 'next/head'

export default function Page() {

    const [mobileView, setMobileView] = useState(false);

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

    const router = useRouter()

    const findSkin = () => {
        for (const category of wikiArr) {
            const foundWeapon = category.categoryArr.find(weapon => weapon.title === router.query.slug)
            if (foundWeapon) {
                if (foundWeapon.skins) {
                    const foundSkin = foundWeapon?.skins.find(skin => String(skin.id) === router.query.id)
                    if (foundSkin) return foundSkin
                }
            }
        }
    }

    const findWeapon = () => {
        for (const category of wikiArr) {
            const foundWeapon = category.categoryArr.find(weapon => weapon.title === router.query.slug)
            if (foundWeapon) return foundWeapon
        }
    }

    const skin = findSkin()
    const weapon = findWeapon()
    const [showPaymentModal, setShowPaymentModal] = useState<boolean>(false)

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
            <div className={styles.wrapper}>
                {!mobileView && <Image src={smallCross} alt='smallCross' className={styles.smallCross1} />}
                {!mobileView && <Image src={smallCross} alt='smallCross' className={styles.smallCross2} />}
                {!mobileView && <Image src={middleCross} alt='middleCross' className={styles.middleCross} />}
                {!mobileView && <Image src={bigCross} alt='bigCross' className={styles.bigCross1} />}
                <header className={styles.header}>
                    {
                        mobileView && <Image src={logo} alt='logo' className={styles.logo} />
                    }
                    {
                        mobileView ?
                            <HamburgerMenuWiki
                                getDonat={setShowPaymentModal}
                            />
                            : <WikiHeader getDonat={setShowPaymentModal} />
                    }
                </header>

                <main className={mainStyles.main}>
                    <div className={styles.activePage}><Link href={'/wiki'}>Главная</Link> / <span>{router.query.slug}</span></div>
                    {
                        showPaymentModal &&
                        <PaymentModal onRequestClose={onRequestClose} />
                    }
                    {weapon && skin &&
                        <div className={styles.contentContainer}>
                            <div className={styles.leftBlock}>
                                <div className={styles.skinCard}>
                                    <Image src={skin.icon} alt='skinIcon' className={styles.icon} />
                                    <div className={styles.title}>{skin.title}</div>
                                    <BuyButton width={222} />
                                </div>
                                {/* <div className={styles.skinClass}>
                                    <div className={styles.title}>Класс скина</div>
                                    <div className={styles.lines}>
                                        <div className={styles.leftLine}></div>
                                        <div className={styles.rightLine}></div>
                                    </div>
                                </div> */}
                                <div className={styles.description}>{weapon.description}</div>
                                {/* <div className={styles.spreadControl}>
                                    <div className={styles.title}>Контроль разброса</div>
                                    <Image src={weapon.spreadControl} alt='spreadImg' className={styles.spreadImg} />
                                </div> */}
                            </div>
                            <div className={styles.rightBlock}>
                                <div className={styles.title}>Описание</div>
                                <div className={styles.infoBlock}>
                                    {
                                        skin.info && skin.info.map((item, index) => {
                                            return (
                                                <div key={index} className={styles.content}>
                                                    <div className={styles.title}>{item.title}</div>
                                                    <div className={styles.description}>{item.description}</div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    }
                </main>
                <footer className={mainStyles.footer}>
                    <Footer />
                </footer>
            </div>
        </>
    )
}