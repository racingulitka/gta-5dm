import React, { useState } from 'react'
import styles from './Header.module.scss'
import Image from 'next/image'
import logo from './assets/logo.svg'
import { MenuItems, menuItems } from './Header.config'
import cn from 'classnames'
import DonatButton from './DonatButton/DonatButton'
import ServerBlock from './ServerBlock/ServerBlock'
import Link from 'next/link'

const Header = ({
    getDonat,
    handleNavigation
}: {
    getDonat: React.Dispatch<React.SetStateAction<boolean>>
    handleNavigation: (sectionId: string) => void
}) => {

    const [activeItem, setActiveItem] = useState<MenuItems | null>(null)

    const onClick = (id: number) => {
        setActiveItem(id)
        const navigationName = menuItems.find(item => item.id === id)?.name ?? ''
        handleNavigation(navigationName)
    }

    return (
        <div className={styles.wrapper} itemScope itemType="http://schema.org/WPHeader">
            <div className={styles.header}>
                <Link href='/'><Image src={logo} alt='logo' className={styles.logo} /></Link>
                <nav className={styles.menu} itemScope itemType="http://schema.org/SiteNavigationElement">
                    {
                        menuItems.map(item => {
                            return (
                                <Link key={item.id} href={item.id === MenuItems.wiki ? '/wiki' : `/#${item.name}`}>
                                    <div
                                        className={cn(styles.menuItem, item.id === activeItem && styles.menuItemActive)}
                                        onClick={() => onClick(item.id)}
                                        itemProp="name"
                                    >
                                        {item.title}
                                    </div>
                                </Link>
                            )
                        })
                    }
                </nav>
                <ServerBlock />
                <DonatButton getDonat={getDonat} />
            </div>
        </div>
    )
}

export default Header