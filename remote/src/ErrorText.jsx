import React from 'react';

import styles from './ErrorText.module.css';

const ErrorText = (props) => {
  return (
    <p className={styles.error}>{props.children}</p>
  )
}

export default ErrorText