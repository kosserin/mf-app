import React, {useState, useEffect, useRef, useContext} from 'react';
import { ContentContext } from '../../../store/content-context';
import CircleActions from '../Circle/CircleActions';
import InputGroup from 'remote/InputGroup';
import SubmitButton from 'remote/SubmitButton';
import DisplayText from 'remote/DisplayText';
import useHttp from '../../../hooks/use-http';

import styles from '../Content.module.css';

const Circle = () => {

  const shown = useContext(ContentContext).shown;
  const valueRef = useRef();
  const [selectedFormula, setSelectedFormula] = useState('radius');
  const bckgrRef = useRef();
  const displayedContent = !shown ? styles.show : '';
  const {isLoading, error, result, sendRequest: sendData} = useHttp();


  useEffect(() => {
      const firstButton = bckgrRef.current.nextElementSibling;
      backgroundPosition(firstButton);
  }, [])

  const radiusHandler = (e) => {
      backgroundPosition(e.target);
      setSelectedFormula('radius');
  }

  const circumferenceHandler = (e) => {
      backgroundPosition(e.target);
      setSelectedFormula('circumference');
  }

  const areaHandler = (e) => {
      backgroundPosition(e.target);
      setSelectedFormula('area');
  }

  const backgroundPosition = (obj) => {
      bckgrRef.current.style.height = obj.clientHeight + 'px';
      bckgrRef.current.style.width = obj.clientWidth + 'px';
      bckgrRef.current.style.top = obj.offsetTop + 'px';
      bckgrRef.current.style.left = obj.offsetLeft + 'px';
    }
    
    const submitHandler = e => {
      e.preventDefault();
      const value = valueRef.current.value;
      if(value.length === 0) {
        return;
      } else {
        let newRes = value*2;
        if(selectedFormula === 'circumference') {
          newRes = value*2*3.14159265359;
          newRes = parseFloat(newRes.toFixed(4));
        }
        if(selectedFormula === 'area') {
          newRes = value*value*3.14159265359;
          newRes = parseFloat(newRes.toFixed(4));
        }
        sendData({url: 'https://koss-mf-default-rtdb.europe-west1.firebasedatabase.app/circle.json',
        body: JSON.stringify(newRes),
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        }});
  }
}

  let label = selectedFormula;

  if(selectedFormula === 'area') {
    label = 'radius';
  }

  return (
    <div className={`${styles.content} ${displayedContent}`}>
        <img src='https://i.postimg.cc/MZMt8JxV/as.png' alt='circle'/>
        <form className={styles.inputs} onSubmit={submitHandler}>
            <CircleActions ref={bckgrRef} areaHandler={areaHandler} circumferenceHandler={circumferenceHandler} radiusHandler={radiusHandler} />
            <InputGroup label={label} ref={valueRef} />
            <SubmitButton isLoading={isLoading}  />
            <DisplayText isLoading={isLoading} error={error} result={result} />
        </form>
    </div>
  )
}

export default Circle