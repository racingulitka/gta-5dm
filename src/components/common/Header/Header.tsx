import React, { useState } from 'react'
import styles from './Header.module.scss'
import Image from 'next/image'
import logo from './assets/logo.svg'
import { MenuItems, menuItems } from './Header.config'
import cn from 'classnames'
import DonatButton from './DonatButton/DonatButton'
import ServerBlock from './ServerBlock/ServerBlock'

const Header = ({
    getDonat
}:{
    getDonat:React.Dispatch<React.SetStateAction<boolean>>
}) => {

    const [activeItem, setActiveItem] = useState<MenuItems>(MenuItems.advantages)

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <Image src={logo} alt='logo' className={styles.logo} />
                <div className={styles.menu}>
                    {
                        menuItems.map(item => {
                            return (
                                <div
                                    key={item.id}
                                    className={cn(styles.menuItem, item.id === activeItem && styles.menuItemActive)}
                                    onClick={() => setActiveItem(item.id)}
                                >
                                    {item.title}
                                </div>
                            )
                        })
                    }
                </div>
                <ServerBlock />
                <DonatButton getDonat={getDonat}/>
            </div>
        </div>
    )
}

export default Header