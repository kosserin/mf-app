import React from 'react';
import LoadingText from './LoadingText';
import ErrorText from './ErrorText';
import ResultText from './ResultText';

const DisplayText = (props) => {
  return (
    <div>
        {props.result && !props.error && <ResultText>{props.result}</ResultText>}
        {props.isLoading && <LoadingText />}
        {props.error && <ErrorText>Error!</ErrorText>}
    </div>
  )
}

export default DisplayText