import React from 'react'
import styles from './Container.module.css'
function Container({children}) {
  return (
    <div className={styles.ParentContainer}>
      {children}
    </div>
  )
}

export default Container
