import React, { useState } from 'react'
import styles from './WikiHeader.module.scss'
import Image from 'next/image'
import logo from './assets/logo.svg'
import DonatButton from '../Header/DonatButton/DonatButton'
import ServerBlock from './ServerBlock/ServerBlock'
import MenuItem from './MenuItem/MenuItem'
import { wikiArr } from '../../Wiki/Wiki.config'
import Link from 'next/link'

const Header = ({
    getDonat,
}: {
    getDonat: React.Dispatch<React.SetStateAction<boolean>>
}) => {

    const [activeItem, setActiveItem] = useState<number | null>(null)
    const [activeCategoryId, setActiveCategoryId] = useState<number | null>(null)
    const [selectedWeapon, setSelectedWeapon] = useState<number | null>(null)

    const onClick = (id: number) => {
        id === activeItem ? setActiveItem(null): setActiveItem(id)
    }

    return (
        <div className={styles.wrapper} itemScope itemType="http://schema.org/WPHeader">
            <div className={styles.header}>
                <Link href='/'><Image src={logo} alt='logo' className={styles.logo} /></Link>
                <nav className={styles.menu} itemScope itemType="http://schema.org/SiteNavigationElement">
                    {
                        wikiArr.map(item => {
                            return (
                                <MenuItem
                                    key={item.categoryId}
                                    activeCategoryId={activeCategoryId}
                                    setActiveCategoryId={setActiveCategoryId}
                                    arr={item}
                                    onClick={onClick}
                                    activeItem={activeItem}
                                    selectedWeapon={selectedWeapon}
                                    setSelectedWeapon={setSelectedWeapon}
                                />
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