import React, { useState } from 'react'
import styles from './HamburgerMenu.module.scss'
import hamburgerIcon from './assets/hamburgerIcon.svg'
import Image from 'next/image'
import cn from 'classnames'
import { MenuItems, menuItems } from '../Header/Header.config'
import DonatButton from '../Header/DonatButton/DonatButton'

const HamburgerMenu = ({
    getDonat,
    handleNavigation
}:{
    getDonat:React.Dispatch<React.SetStateAction<boolean>>
    handleNavigation:(sectionId:string) => void
}) => {

    const [isActive, setActive] = useState<boolean>(false)
    const [activeMenuItem, setActiveMenuItem] = useState<MenuItems | null>(null)

    const onClick = (id:number) =>{
        setActiveMenuItem(id)
        const navigationName = menuItems.find(item => item.id === id)?.name ?? ''
        handleNavigation(navigationName)
        setActive(false)
    }

    return (
        <nav className={cn(styles.wrapper, isActive && styles.wrapperActive)} itemScope itemType="http://schema.org/SiteNavigationElement" >
            <Image
                src={hamburgerIcon}
                alt='hamburgerIcon'
                width={26}
                height={17}
                className={styles.hamburgerIcon}
                onClick={() => setActive(prev => !prev)}
            />
            <div className={cn(styles.menuWrapper, isActive && styles.menuWrapperActive)} itemScope itemType="http://schema.org/ItemList" >
                {
                    menuItems.map(item => {
                        return (
                            <div
                                key={item.id}
                                className={cn(styles.menuItem, item.id === activeMenuItem && styles.menuItemActive)}
                                onClick={() => onClick(item.id)}
                                itemProp="name"
                            >
                                {item.title}
                            </div>
                        )
                    })
                }
                <DonatButton getDonat={getDonat} />
            </div>
        </nav>
    )
}

export default HamburgerMenu