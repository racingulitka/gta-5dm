import React, { useState } from 'react'
import styles from './WeaponCategory.module.scss'
import cn from 'classnames'
import { CategoryArr, WikiArr } from '../Wiki.typings'
import Image from 'next/image'
import Link from 'next/link'
import arrowDown from './assets/arrowDown.svg'

const WeaponCategory = ({
    wikiArr
}: {
    wikiArr: WikiArr
}) => {

    const [isOpened, setOpened] = useState<boolean>(false)

    return (
        <div className={styles.categoryBlock}>
            <div
                className={styles.title}
                onClick={() => setOpened(prev => !prev)}
            >
                <div className={styles.text}>{wikiArr.categoryTitle}</div>
                <div className={styles.line}></div>
                <div className={styles.info}>
                    <span className={styles.span1}>Показать все {wikiArr.categoryArr.length} типов</span>
                    <span className={styles.span2}>Показать все</span>
                    <Image src={arrowDown} alt='arrowDown' className={styles.image}/>
                </div>
            </div>
            <div className={cn(styles.weapons, isOpened && styles.weaponsOpened)}>
                {
                    wikiArr.categoryArr.map(weapon => {
                        return (
                            <Link key={weapon.id} href={`/wiki/${weapon.title}`}>
                                <div
                                    className={styles.weapon}
                                >
                                    <Image src={weapon.icon} alt='weaponIcon' className={styles.image} />
                                    <div className={styles.weaponName}>{weapon.title}</div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default WeaponCategory