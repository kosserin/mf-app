import React from 'react';

import styles from './Template.module.css';

const Template = (props) => {
  return (
    <div className={styles.template}>{props.children}</div>
  )
}

export default Template