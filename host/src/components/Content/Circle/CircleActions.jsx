import React from 'react';
import Button from 'remote/Button';
import Actions from 'remote/Actions';
import Background from 'remote/Background';

const CircleActions = React.forwardRef((props, ref) => {
  return (
        <Actions>
            <Background ref={ref} />
            <Button onClick={props.radiusHandler}>Radius</Button>
            <Button onClick={props.circumferenceHandler}>Cimcumference</Button>
            <Button onClick={props.areaHandler}>Area</Button>
        </Actions>
  )
});

export default CircleActions