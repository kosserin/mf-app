import React, {useState, useCallback} from 'react';

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState();

  const sendRequest = useCallback(async (requestConfig) => {
      try{
        setIsLoading(true);
        setError(null);
        setResult();
        const response = await fetch(requestConfig.url, {
          method: requestConfig.method ? requestConfig.method : 'GET',
          headers: requestConfig.headers ? requestConfig.headers : {},
          body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        });
        if (!response.ok) {
          throw new Error('Request failed!');
        }
        setTimeout(() => {
          setResult(() => {
            console.log(typeof requestConfig.body, requestConfig.body);
            let res = requestConfig.body;
            var value = parseFloat(res);
              return value;
          });
          setIsLoading(false);
        }, 10000);
      } catch (err) {
        setTimeout(() => {
          setIsLoading(false);
          setError(err.message || 'Something went wrong!');
        }, 10000);
      }
    }, []);

    return {
      isLoading,
      error,
      sendRequest,
      result,
    };
  };

export default useHttp;