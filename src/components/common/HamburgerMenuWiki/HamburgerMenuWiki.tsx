import React, { useState } from 'react'
import styles from './HamburgerMenuWiki.module.scss'
import hamburgerIcon from './assets/hamburgerIcon.svg'
import Image from 'next/image'
import cn from 'classnames'
import DonatButton from '../Header/DonatButton/DonatButton'
import { wikiArr } from '../../Wiki/Wiki.config'
import logo from './assets/logo.svg'
import arrowRight from './assets/arrowRight.svg'
import Link from 'next/link'

const HamburgerMenuWiki = ({
    getDonat
}: {
    getDonat: React.Dispatch<React.SetStateAction<boolean>>
}) => {

    const [isActive, setActive] = useState<boolean>(false)
    const [activeMenuItem, setActiveMenuItem] = useState<number | null>(null)

    const onClick = (id: number) => {
        id === activeMenuItem ? setActiveMenuItem(null) : setActiveMenuItem(id)
    }

    const handleWeaponSelect = () => {
        setActive(false)
    }


    return (
        <div className={cn(styles.wrapper, isActive && styles.wrapperActive)}>
            <Image
                src={hamburgerIcon}
                alt='hamburgerIcon'
                width={26}
                height={17}
                className={styles.hamburgerIcon}
                onClick={() => setActive(prev => !prev)}
            />
            <div className={cn(styles.menuWrapper, isActive && styles.menuWrapperActive)}>
                <Image src={logo} alt='logo' className={styles.logo} />
                {
                    wikiArr.map(item => {
                        return (
                            <div
                                key={item.categoryId}
                                className={cn(styles.menuItem, item.categoryId === activeMenuItem && styles.menuItemActive)}
                                onClick={() => onClick(item.categoryId)}
                            >
                                <div className={styles.mainItem}>
                                    <div className={styles.menuTitle}>{item.categoryTitle}</div>
                                    <Image src={arrowRight} alt='arrowRight' className={styles.arrowRight} />
                                </div>
                                <div className={styles.subItems}>
                                    {activeMenuItem === item.categoryId &&
                                        item.categoryArr.map(weapon => {
                                            return (
                                                <Link key={weapon.id} href={`/wiki/${weapon.title}`} onClick={() => handleWeaponSelect()}>
                                                    <div className={styles.subItem}>
                                                        <Image src={weapon.icon} alt='icon' className={styles.icon} />
                                                        <div className={styles.title}>{weapon.title}</div>
                                                    </div>
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
                <DonatButton getDonat={getDonat} />
            </div>
        </div>
    )
}

export default HamburgerMenuWiki