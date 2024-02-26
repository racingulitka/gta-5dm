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
        <div className={styles.wrapper} itemScope itemType="http://schema.org/Organization">
            <Image src={logo} alt='logo' className={styles.logo} itemScope itemType="http://schema.org/ImageObject"/>
            <div className={styles.secondBlock}>
                <div className={styles.brightText} itemProp="description">
                GTA 5 DM is not affiliated with or endorsed by Take-Two, Rockstar North Interactive, or any other rights holder. All the used trademarks belong to their respective owners.
                </div>
                <div className={styles.text} itemProp="address">
                Professional Gaming Solutions Limited (13565439) UK, London, Palliser House, Palliser Road, W149EB
                </div>
            </div>
            <div /*style={{display:'flex', flexFlow:'row nowrap', columnGap:'72px'}}*/ className={styles.justBlock}>
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
            <div className={styles.paySystems} itemScope itemType="http://schema.org/PaymentMethod">
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