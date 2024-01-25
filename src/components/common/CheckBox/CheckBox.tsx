import React from 'react'
import styles from './CheckBox.module.scss'
import cn from 'classnames'

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

        </div>
    )
}

export default CheckBox