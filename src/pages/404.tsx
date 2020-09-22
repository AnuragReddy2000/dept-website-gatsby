import React from 'react';
import InfoView from '../components/infoview/infoview';

class ErrorPage extends React.Component{

    render(){
        return(
            <div style={{height: '100%', width: '100%'}}>
                <InfoView title='Oops...' titleColor='darkblue' info={["Sorry, looks like the page you were looking for doesn't exist. Checkout our other pages..."]} link='/' linkText='To homepage'/>
            </div>
        )
    }
}

export default ErrorPage;