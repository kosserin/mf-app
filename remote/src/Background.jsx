import React from 'react';

import styles from './Background.module.css';

const Background = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className={styles.background}></div>
  )
});

export default Background