import React from 'react';

import styles from './ResultText.module.css';

const ResultText = (props) => {
  return (
    <p className={styles['result-text']}>The result is: <span>{props.children}</span></p>
  )
}

export default ResultText