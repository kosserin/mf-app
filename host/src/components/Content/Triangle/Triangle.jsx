import React, {useRef, useContext} from 'react';
import { ContentContext } from '../../../store/content-context';
import InputGroup from 'remote/InputGroup';
import SubmitButton from 'remote/SubmitButton';
import DisplayText from 'remote/DisplayText';
import useHttp from '../../../hooks/use-http';

import styles from '../Content.module.css';

const Triangle = () => {

    const shown = useContext(ContentContext).shown;
    const baseRef = useRef();
    const heightRef = useRef();
    const displayedContent = shown ? styles.show : '';
    const {isLoading, error, result, sendRequest: sendData} = useHttp();

    const submitHandler = e => {
        e.preventDefault();
        const baseValue = baseRef.current.value;
        const heightValue = heightRef.current.value;
        if(baseValue.length === 0 || heightValue.length === 0) {
            return;
        } else {
            const newRes = (baseValue*heightValue)/2;
            sendData({url: 'https://koss-mf-default-rtdb.europe-west1.firebasedatabase.app/triangle.json',
            body: JSON.stringify(newRes),
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            }});
        }
    }

  return (
    <div className={`${styles.content} ${displayedContent}`}>
        <img src="https://i.postimg.cc/bJswGJry/a.png" alt="triangle" />
        <form onSubmit={submitHandler} className={styles.inputs}>
            <InputGroup label="base" ref={baseRef} />
            <InputGroup label="height" ref={heightRef} />
            <SubmitButton isLoading={isLoading} />
            <DisplayText isLoading={isLoading} error={error} result={result} />
        </form>
    </div>
  )
}

export default Triangle