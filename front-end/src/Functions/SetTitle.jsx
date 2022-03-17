// create a react title component using react helmet
import React from 'react';
import Helmet from 'react-helmet';


const Title = ({ page }) => {
    return (
        <Helmet>
            <title>{page}</title>
        </Helmet>
    );
}


export default Title;