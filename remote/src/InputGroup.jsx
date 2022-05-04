import React from 'react';

import styles from './InputGroup.module.css';

const InputGroup = React.forwardRef((props, ref) => {
  return (
    <div className={styles['input-group']}>
        <label>Enter {props.label}</label>
        <input type='number' ref={ref} />
    </div>
  )
});

export default InputGroup