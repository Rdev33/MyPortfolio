import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom';

/*
 component responsible for sending the child components to the top of the page through scrolling
*/

export default ({children}) => {
    const location = useLocation();

    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);

    return children
}