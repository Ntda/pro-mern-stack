import React from 'react';
import Div1 from './Div1.jsx';
import Div2 from './Div2.jsx';
import { Button, Glyphicon } from 'react-bootstrap';

class Layout extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Div1 />
                <Div2 />
                <Button>ABc</Button>
            </div>
        );
    }
}

export default Layout;