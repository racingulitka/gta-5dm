import React from 'react'
import styles from './ServerBlock.module.scss'
import Image from 'next/image'
import personIcon from './assets/personIcon.svg'

const ServerBlock = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.yellowLine}></div>
            <div className={styles.title}>Сервер #1</div>
            <div className={styles.serverInfo}>
                <span>1645</span>
                <Image src={personIcon} alt='personIcon' width={16} height={16} />
                <div className={styles.indicatorBorder}>
                    <div className={styles.indicatorCenter}></div>
                </div>
            </div>
        </div>
    )
}

export default ServerBlock