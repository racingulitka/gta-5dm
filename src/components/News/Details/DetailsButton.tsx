import React from 'react'
import styles from './DetailsButton.module.scss'

const DetailsButton = ({backgroundColor}:{backgroundColor?:string}) => {
    return(
        <div className={styles.wrapper} style={{background:backgroundColor|| 'rgba(228, 165, 32, 0.5)'}}>
            Подробнее
        </div>
    )
}

export default DetailsButton