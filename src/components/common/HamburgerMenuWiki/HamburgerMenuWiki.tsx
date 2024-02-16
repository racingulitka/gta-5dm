import React, { useState, useEffect } from 'react'
import styles from './HamburgerMenuWiki.module.scss'
import hamburgerIcon from './assets/hamburgerIcon.svg'
import Image from 'next/image'
import cn from 'classnames'
import DonatButton from '../Header/DonatButton/DonatButton'
import { wikiArr } from '../../Wiki/Wiki.config'
import logo from './assets/logo.svg'
import arrowRight from './assets/arrowRight.svg'
import Link from 'next/link'
import { useRouter } from 'next/router'

const HamburgerMenuWiki = ({
    getDonat
}: {
    getDonat: React.Dispatch<React.SetStateAction<boolean>>
}) => {

    const [isActive, setActive] = useState<boolean>(false)
    const [activeMenuItem, setActiveMenuItem] = useState<number | null>(null)
    const [isListVisible, setListVisible] = useState<boolean>(false)
    const router = useRouter()
    const [activeWeapon, setActiveWeapon] = useState<string | string[] | null>(null)

    const onClick = (id: number) => {
        console.log('click')
        /*id === activeMenuItem ? setActiveMenuItem(null) : */setActiveMenuItem(id)
        id === activeMenuItem ? setListVisible(prev => !prev) : setListVisible(true)
    }

    const handleWeaponSelect = (event:any) => {
        event.stopPropagation()
        setListVisible(false)
        setActive(false)
    }

    useEffect(() =>{
        console.log(isListVisible)
    }, [isListVisible])

    
    useEffect(() => {
        router.query.slug && setActiveWeapon(router.query.slug)
        console.log(router.query.slug)
    }, [router.query.slug])

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
                                    {isListVisible && activeMenuItem === item.categoryId &&
                                        item.categoryArr.map(weapon => {
                                            return (
                                                <Link
                                                    key={weapon.id}
                                                    onClick={(event) => handleWeaponSelect(event)}
                                                    href={`/wiki/${weapon.title}`}
                                                    style={{width:'100%'}}
                                                >
                                                    <div className={cn(styles.subItem, weapon.title === activeWeapon && styles.subItemActive)}>
                                                        <Image src={weapon.icon} alt='icon' className={styles.icon} />
                                                        <div className={cn(styles.title, weapon.title === activeWeapon && styles.titleActive)}>{weapon.title}</div>
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