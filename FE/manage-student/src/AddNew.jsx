import React from 'react';
import { Modal, Button, Form, FormLabel } from 'react-bootstrap'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Service from './Service.jsx';
import '../css/AddNew.css';

class AddNew extends React.Component {
    constructor() {
        super();
        this.state = {
            show: true,
            date: new Date(),
            namevalid: true,
            addressvalid: true
        }
        this.handleDateChange = this.handleDateChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    handleDateChange = date => {
        this.setState({
            date: date
        });
    }

    render() {
        const { date } = this.state;
        return (
            <Modal
                show={this.state.show}
                onHide={e => this.onSave(e)}
                centered
                size='lg'
                onSubmit={e => this.onSave(e)}
                backdrop='static'>

                <Modal.Header closeButton>
                    <Modal.Title>New student</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form id='add-new'>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder='Enter name' name='name' required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder='Enter address' name='address' required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Sex</Form.Label>
                            <Form.Check defaultChecked type="radio" name="sex" value='Male' label='Male' />
                            <Form.Check type="radio" name="sex" label='Female' value='Female' />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Date of birth</Form.Label>
                            <DatePicker required selected={date} onChange={this.handleDateChange} name='dateofbirth' />
                        </Form.Group>
                        <Modal.Footer>
                                <Button variant="secondary" onClick={(e) => this.onSave(e)}>Cancel</Button>
                                <Button type="submit" variant="primary">Save changes</Button>
                            </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
                )
            }
        
    onSave = (e) => {
        const elements = document
                    .getElementById('add-new')
                    .elements;
                const Name = elements.name.value;
                const Address = elements.address.value;
                let sex;
        for (let i = 0; i < elements.sex.length; i++) {
            if (elements.sex[i].checked) {
                    sex = elements.sex[i].value;
                break;
            }
        }
        const Dob = elements.dateofbirth.value;
        const model = {
                    Name,
                    Address,
                    sex,
                    Dob
                };
        this.setState({show: false }, () => {
                    Service.createNew(model);
                this.props.onAddNew(model);
            })
    
        }
    }
    
export default AddNew;