import { Button } from 'react-bootstrap';
import React from 'react';
import AddNew from './AddNew.jsx';
import uuid from 'uuid';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/Header.css';

class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            canAdd: false
        };
        this.handleAddNew = this.handleAddNew.bind(this);
    }

    handleAddNew = model => {
        this.setState({canAdd:false},this.props.onAddNew(model))
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
                <FontAwesomeIcon icon={faPlusCircle} size='3x' onClick={activeModal}/>
                {canAdd && <AddNew key={uuid()} onAddNew={this.handleAddNew} />}
            </React.Fragment>
        )
    }
}

export default Header;