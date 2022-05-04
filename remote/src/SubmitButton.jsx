import React from 'react';

import styles from './SubmitButton.module.css';

const SubmitButton = (props) => {
  return (
    <button className={`${props.isLoading && styles['disabled-button']} ${styles['submit-button']}`} type="submit" disabled={props.isLoading}>Calculate</button>
  )
}

export default SubmitButton;