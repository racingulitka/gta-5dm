import React, { useState } from 'react'
import styles from './Wiki.module.scss'
import { wikiArrInfo, wikiArr } from './Wiki.config';
import WeaponCategory from './WeaponCategory/WeaponCategory';
import unionImage from './assets/Union.svg'
import Image from 'next/image';

export default function Wiki() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.overlayContainer}>
                <div className={styles.circle}></div>
                <Image src={unionImage} alt='unionImage' className={styles.img} />
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
            {
                wikiArr.map(item => {
                    return (
                        <WeaponCategory key={item.categoryId} wikiArr={item} />
                    )
                })
            }
        </div>
    )
}