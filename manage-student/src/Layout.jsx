import React from 'react';
import ReactDOM from 'react-dom'
import Div1 from './Div1.jsx';
import Div2 from './Div2.jsx';

class Layout extends React.Component {
    render() {
        return (
            <div>
                <Div1 />
                <Div2 />
            </div>
        );
    }
}

export default Layout;