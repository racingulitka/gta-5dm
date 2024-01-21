import React, { useState } from 'react'
import styles from './HamburgerMenu.module.scss'
import hamburgerIcon from './assets/hamburgerIcon.svg'
import Image from 'next/image'
import cn from 'classnames'
import { MenuItems, menuItems } from '../Header/Header.config'
import DonatButton from '../Header/DonatButton/DonatButton'

const HamburgerMenu = () => {

    const [isActive, setActive] = useState<boolean>(false)
    const [activeMenuItem, setActiveMenuItem] = useState<MenuItems>(MenuItems.advantages)

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
                {
                    menuItems.map(item => {
                        return (
                            <div
                                key={item.id}
                                className={cn(styles.menuItem, item.id === activeMenuItem && styles.menuItemActive)}
                                onClick={() => setActiveMenuItem(item.id)}
                            >
                                {item.title}
                            </div>
                        )
                    })
                }
                <DonatButton />
            </div>
        </div>
    )
}

export default HamburgerMenu