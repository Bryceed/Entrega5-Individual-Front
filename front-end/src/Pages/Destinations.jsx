import { useEffect } from 'react';
import Title from '../Functions/SetTitle';
import App from '../App';
import { Helmet } from 'react-helmet';


export default () => {
    useEffect(() => {
        return(
            <>
                <Helmet>
                    <title>Destinos</title>
                </Helmet>
                <h1>Destinos</h1>
                <h3>Destinations</h3>
            </>
        )
    }, []);
}