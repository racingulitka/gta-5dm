import React, { useState } from 'react'
import styles from './Wiki.module.scss'
import { wikiArrInfo, wikiArr } from './Wiki.config';
import WeaponCategory from './WeaponCategory/WeaponCategory';
import unionImage from './assets/Union.svg'
import Image from 'next/image';

import crossBlurSmall from './assets/crossBlurSmall.svg'
import crossSharpSmall from './assets/crossSharpSmall.svg'
import ak1 from './assets/ak1.png'
import ak2 from './assets/ak2.png'
import ak3 from './assets/ak3.png'
import ak4 from './assets/ak4.png'
import crossBlurLarge from './assets/crossBlurLarge.svg'
import baseball1 from './assets/baseball1.png'
import baseball2 from './assets/baseball2.png'
import gun1 from './assets/gun1.png'
import gun2 from './assets/gun2.png'
import crossSharpLarge from './assets/crossSharpLarge.svg'

export default function Wiki() {

    return (
        <div className={styles.wrapper}>

            <div className={styles.circle}>
                <Image src={unionImage} alt='unionImage' className={styles.img} />
            </div>
            <Image src={crossBlurSmall} alt='crossBlurSmall' className={styles.crossBlurSmall} />
            <Image src={crossSharpSmall} alt='crossBlurSmall' className={styles.crossSharpSmall1} />
            <Image src={crossSharpSmall} alt='crossBlurSmall' className={styles.crossSharpSmall2} />
            <Image src={crossSharpSmall} alt='crossBlurSmall' className={styles.crossSharpSmall3} />
            <Image src={crossSharpSmall} alt='crossBlurSmall' className={styles.crossSharpSmall4} />
            <Image src={ak1} alt='ak1' className={styles.ak1} />
            <Image src={ak2} alt='ak2' className={styles.ak2} />
            <Image src={ak3} alt='ak3' className={styles.ak3} />
            <Image src={ak4} alt='ak4' className={styles.ak4} />
            <Image src={crossBlurLarge} alt='crossBlurLarge' className={styles.crossBlurLarge1} />
            <Image src={crossBlurLarge} alt='crossBlurLarge' className={styles.crossBlurLarge2} />
            <Image src={crossBlurLarge} alt='crossBlurLarge' className={styles.crossBlurLarge3} />
            <Image src={baseball1} alt='baseball1' className={styles.baseball1} />
            <Image src={baseball2} alt='baseball2' className={styles.baseball2} />
            <Image src={gun1} alt='gun1' className={styles.gun1} />
            <Image src={gun2} alt='gun2' className={styles.gun2} />
            <Image src={crossSharpLarge} alt='crossSharpLarge' className={styles.crossSharpLarge} />

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
            {
                wikiArr.map(item => {
                    return (
                        <WeaponCategory
                            key={item.categoryId}
                            wikiArr={item}
                        />
                    )
                })
            }
        </div>
    )
}