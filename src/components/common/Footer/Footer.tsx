import React from 'react'
import styles from './Footer.module.scss'
import logo from './assets/logo.svg'
import Image from 'next/image'
import applePay from './assets/applePay.svg'
import googlePay from './assets/googlePay.svg'
import mastercardPay from './assets/mastercardPay.svg'
import mirPay from './assets/mirPay.svg'
import oiPay from './assets/oiPay.svg'
import samsungPay from './assets/samsungPay.svg'
import visaPay from './assets/visaPay.svg'

const Footer = () => {

    const payArr = [oiPay, mirPay, mastercardPay, applePay, samsungPay, googlePay, visaPay]

    return(
        <div className={styles.wrapper}>
            <Image src={logo} alt='logo' className={styles.logo} />
            <div className={styles.secondBlock}>
                <div className={styles.brightText}>
                GTA 5 DM is not affiliated with or endorsed by Take-Two, Rockstar North Interactive, or any other rights holder. All the used trademarks belong to their respective owners.
                </div>
                <div className={styles.text}>
                Professional Gaming Solutions Limited (13565439) UK, London, Palliser House, Palliser Road, W149EB
                </div>
            </div>
            <div style={{display:'flex', flexFlow:'row nowrap', columnGap:'72px'}}>
            <div className={styles.linkBlock}>
                <div className={styles.title}>
                    Для пользователей
                </div>
                <div className={styles.links}>
                    <a href='#' className={styles.link}>
                        Условия пользования
                    </a>
                    <a href='#' className={styles.link}>
                        Пользовательское соглашение
                    </a>
                </div>
            </div>
            <div className={styles.linkBlock}>
                <div className={styles.title}>
                    Прочая информация
                </div>
                <div className={styles.links}>
                    <a href='#' className={styles.link}>
                        Правила сервера
                    </a>
                    <a href='#' className={styles.link}>
                        Техническая поддержка
                    </a>
                </div>
            </div>
            </div>
            <div className={styles.paySystems}>
                {
                    payArr.map(item => {
                        return(
                            <Image key={item} src={item} alt='payLogo' className={styles.payLogo}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Footer