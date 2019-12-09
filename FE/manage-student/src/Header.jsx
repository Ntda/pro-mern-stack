import { Button } from 'react-bootstrap';
import React from 'react';
import AddNew from './AddNew.jsx';
import uuid from 'uuid';

class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            canAdd: false
        };
        
    }

    activeModal = () => {
        this.setState({
            canAdd: true
        }, () =>
            console.log('Active model')
        );
    }

    render() {
        const { canAdd } = this.state;
        const { activeModal } = this;
        return (
            <React.Fragment>
                <Button variant="success" active onClick={activeModal}>Add</Button>
                {canAdd && <AddNew key={uuid.v4()}/>}
            </React.Fragment>
        )
    }
}

export default Header;