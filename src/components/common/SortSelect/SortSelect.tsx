import React, { useState } from 'react'
import styles from './SortSelect.module.scss'
import { sortSelectItems } from './SortSelect.config'
import cn from 'classnames'

const SortSelect = ({
    setSortId
}:{
    setSortId:React.Dispatch<React.SetStateAction<number>>
}) => {

    const [activeItem, setActiveItem] = useState<number>(1)
    const [isOpen, setOpen] = useState<boolean>(false)
    const selectedItem = sortSelectItems.find(item => item.id === activeItem)

    const handleClick = (id: number) => {
        setActiveItem(id)
        setOpen(prev => !prev)
        setSortId(id)
    }
    const handleSelectedItemClick = () => {
        setOpen(prev => !prev)
    }

    return (
        <div className={cn(styles.wrapper, isOpen && styles.wrapperActive)}>
            <div
                className={styles.selectedItem}
                onClick={() => handleSelectedItemClick()}
            >
                {selectedItem && React.createElement(selectedItem.icon, { isActive: activeItem === selectedItem.id } as any)}
                <div className={cn(styles.title, selectedItem && activeItem === selectedItem.id && styles.titleActive)}>{selectedItem && selectedItem.title}</div>
            </div>
            {isOpen &&
                sortSelectItems.map(item => {
                    return (
                        <div
                            key={item.id}
                            className={cn(styles.sortSelectItem, isOpen && styles.sortSelectItemActive)}
                            onClick={() => handleClick(item.id)}
                        >
                            {React.createElement(item.icon, { isActive: activeItem === item.id } as any)}
                            <div className={cn(styles.title, activeItem === item.id && styles.titleActive)}>{item.title}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SortSelect