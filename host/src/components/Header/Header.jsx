import React, {useEffect, useRef, useContext} from 'react';
import {ContentContext} from '../../store/content-context';
import Button from 'remote/Button';
import Actions from 'remote/Actions';
import Background from 'remote/Background';

import styles from './Header.module.css';

const Header = () => {

    const onShowTriangle = useContext(ContentContext).onShowTriangle;
    const bckgrRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            const firstButton = bckgrRef.current.nextElementSibling;
            backgroundPosition(firstButton);
        }, 100);
    }, [])

    const triangleHandler = (e) => {
        backgroundPosition(e.target);
        onShowTriangle(true);
    }

    const circleHandler = (e) => {
        backgroundPosition(e.target);
        onShowTriangle(false);
    }

    const backgroundPosition = (obj) => {
        bckgrRef.current.style.height = obj.clientHeight + 'px';
        bckgrRef.current.style.width = obj.clientWidth + 'px';
        bckgrRef.current.style.top = obj.offsetTop + 'px';
        bckgrRef.current.style.left = obj.offsetLeft + 'px';
    }

  return (
    <header className={styles.header}>
        <Actions>
        <Background ref={bckgrRef} />
        <Button onClick={triangleHandler}>Triangle surface</Button>
        <Button onClick={circleHandler}>Circle diameter</Button>
        </Actions>
    </header>
  )
}

export default Header