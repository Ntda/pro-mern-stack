import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import Header from './Header.jsx';

class Layout extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Header/>
            </div>
        );
    }
}

export default Layout;