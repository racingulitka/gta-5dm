import React from 'react'
import styles from './SideMenu.module.scss'
import cn from 'classnames'
import SideMenuIcon from './assets/SideMenuIcon'

const SideMenu = ({
    array,
    activeCategory,
    setActiveCategory,
}: {
    array: { id: number, category: string }[],
    activeCategory:number,
    setActiveCategory:React.Dispatch<React.SetStateAction<number>>,
}) => {
    return (
        <aside className={styles.wrapper}>
            {
                array.map(item => {
                    return (
                        <div
                            key={item.id}
                            className={cn(styles.category, activeCategory === item.id && styles.activeCategory)}
                            onClick={() => setActiveCategory(item.id)}
                        >
                            <SideMenuIcon active={activeCategory === item.id}/>
                            <div className={styles.menuItemText}>{item.category}</div>
                        </div>
                    )
                })
            }
        </aside>
    )
}

export default SideMenu