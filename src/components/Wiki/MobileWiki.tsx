import React from 'react'
import styles from './MobileWiki.module.scss'
import Image from 'next/image'
import bigAk from './mobileAssets/bigAK.png'
import gun from './mobileAssets/gun.png'
import baseball from './mobileAssets/baseball.png'
import logo from './mobileAssets/logo.svg'
import smallAk from './mobileAssets/smallAK.png'
import smallCross from './mobileAssets/smallCross.svg'
import unionImage from './assets/Union.svg'
import { wikiArrInfo, wikiArr } from './Wiki.config'
import WeaponCategory from './WeaponCategory/WeaponCategory'

const MobileWiki = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.hero}>
                <div className={styles.circle}>
                    <Image src={unionImage} alt='unionImage' className={styles.img} />
                </div>
                <Image src={bigAk} alt='bigAk' className={styles.bigAk} />
                <Image src={smallAk} alt='smallAk' className={styles.smallAk} />
                <Image src={gun} alt='gun' className={styles.gun} />
                <Image src={baseball} alt='baseball' className={styles.baseball} />
                <Image src={smallCross} alt='smallCross' className={styles.smallCross} />
            </div>
            <div className={styles.titleBlock}>
                    <div className={styles.title}>
                        <span>ОРУЖИЕ</span>
                        <span>GTA5</span>
                        <span>DM </span>
                        <span>WIKI</span>
                    </div>
                    <div className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    <div className={styles.info}>
                        {
                            wikiArrInfo.map(item => {
                                return (
                                    <div key={item.id} className={styles.infoItem}>
                                        <div className={styles.infoValue}>{item.value}</div>
                                        <div className={styles.infoTitle}>{item.title}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={styles.categories}>
                    {
                        wikiArr.map(item => {
                            return(
                                <WeaponCategory
                                    key={item.categoryId}
                                    wikiArr={item}
                                />
                            )
                        })
                    }
                </div>
        </div>
    )
}

export default MobileWiki