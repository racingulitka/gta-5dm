import React, {useState} from 'react'
import styles from './DonatButton.module.scss'
import Image from 'next/image'
import donatIcon from './assets/donatIcon.svg'
import cn from 'classnames'

const DonatButton = () => {

    const [isMouseDown, setMouseDown] = useState<boolean>(false)
    const [isMouseUnder, setMouseUnder] = useState<boolean>(false)

    return(
        <div
            className={cn(styles.wrapper, isMouseUnder && styles.wrapperHover, isMouseDown && styles.wrapperClicked)}
            onClick={() => console.log('donat')}
            onMouseDown={() => setMouseDown(true)}
            onMouseUp={() => setMouseDown(false)}
            onMouseEnter={() => setMouseUnder(true)}
            onMouseLeave={() => setMouseUnder(false)}
        >
            <Image src={donatIcon} alt='donatIcon' className={styles.icon} />
            <span>Донат</span>
        </div>
    )
}

export default DonatButton