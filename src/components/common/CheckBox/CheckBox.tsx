import React from 'react'
import styles from './CheckBox.module.scss'
import cn from 'classnames'
import checkBoxIcon from './assets/checkBoxIcon.svg'
import Image from 'next/image'

const CheckBox = ({
    isActive,
    setActive
}:{
    isActive:boolean,
    setActive:React.Dispatch<React.SetStateAction<boolean>>
}) => {
    return(
        <div
            className={cn(styles.wrapper, isActive && styles.wrapperActive)}
            onClick={() => setActive(prev => !prev)}
        >
            {
                isActive &&
                <Image src={checkBoxIcon} alt='checkBoxIcon' />
            }
        </div>
    )
}

export default CheckBox