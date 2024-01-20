import React from 'react'
import styles from './Header.module.scss'
import Image from 'next/image'
import logo from './assets/logo.svg'

const Header = () => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <Image src={logo} alt='logo' className={styles.logo} />
            </div>
        </div>
    )
}

export default Header