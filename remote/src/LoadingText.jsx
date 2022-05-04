import React from 'react';

import styles from './LoadingText.module.css';

const LoadingText = () => {
  return (
    <div className={styles['loading-text']}>Processing... <div className={styles["lds-ripple"]}><div></div><div></div></div></div>
  )
}

export default LoadingText