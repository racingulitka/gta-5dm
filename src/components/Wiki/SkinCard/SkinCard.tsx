import React from 'react'
import styles from './SkinCard.module.scss'
import { StaticImageData } from 'next/image';
import Image from 'next/image';

const SkinCard = ({
    weaponTitle,
    skinTitle,
    icon,
    price,
}:{
    weaponTitle:string
    skinTitle:string
    icon:StaticImageData
    price:number[]
}) => {
    
    const leftPrice = price[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    //const rightPrice = price[1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    //const priceFormatted = leftPrice + ' $' + ' - ' + rightPrice + ' $'
    const priceFormatted = leftPrice + ' dmc'

    return(
        <div className={styles.wrapper}>
            {/* <div className={styles.header}>
                <div className={styles.leftLine}></div>
                <div className={styles.rightLine}></div>
            </div> */}
            <div className={styles.weaponTitle}>{weaponTitle}</div>
            <div className={styles.skinTitle}>{skinTitle}</div>
            <Image className={styles.icon} src={icon} alt='skinIcon' />
            <div className={styles.price}>{priceFormatted}</div>
        </div>
    )
}

export default SkinCard