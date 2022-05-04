import React, {useState} from 'react';

export const ContentContext = React.createContext({
    onShowTriangle: bool => {},
    shown: true,
});

export default props => {

    const [isTriangleShown, setIsTriangleShown] = useState(true);

    const showTriangleHandler = (bool) => {
    setIsTriangleShown(bool);
    }

    return (
        <ContentContext.Provider value={{
            onShowTriangle: showTriangleHandler,
            shown: isTriangleShown,
        }}>
            {props.children}
        </ContentContext.Provider>
    )
}