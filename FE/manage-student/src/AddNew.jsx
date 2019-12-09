import React from 'react';
import { Modal, Button, Form, FormLabel } from 'react-bootstrap'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

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
        const { date, namevalid, addressvalid } = this.state;
        return (
            <Modal
                show={this.state.show}
                onHide={() => this.onSave()}
                centered
                size='lg'
                backdrop='static'>
                <Modal.Header closeButton>
                    <Modal.Title>New student</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form id='add-new'>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder='Enter name' name='name' required />
                            {
                                !namevalid && <Form.Label className='validation'>This field required</Form.Label>
                            }
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder='Enter address' name='address' required />
                            {
                                !addressvalid && <Form.Label className='validation'>This field required</Form.Label>
                            }
                        </Form.Group>
                        <Form.Group controlId="formBasicRadio">
                            <Form.Label>Sex</Form.Label>
                            <Form.Check defaultChecked type="radio" name="sex" value='Male' label='Male' />
                            <Form.Check type="radio" name="sex" label='Female' value='Female' />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Date of birth</Form.Label>
                            <FormLabel>
                                <DatePicker selected={date} onChange={this.handleDateChange} name='dateofbirth' />
                            </FormLabel>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={(e) => this.onSave(e)}>Close</Button>
                    <Button variant="primary" onClick={(e) => this.onSave(e)}>Save changes</Button>
                </Modal.Footer>
            </Modal>
        )
    }

    onSave = (e) => {
        e.preventDefault();
        const elements = document
            .getElementById('add-new')
            .elements;
        const name = elements.name.value;
        const address = elements.address.value;
        let sex;
        for (let i = 0; i < elements.sex.length; i++) {
            if (elements.sex[i].checked) {
                sex = elements.sex[i].value;
                break;
            }
        }
        const date = elements.dateofbirth.value;
        const model={
            name,
            address,
            sex,
            date
        };
        axios.post('http://localhost:3000/api/add-new',{model})
            .then(res=>{
                console.log(res);
            })
    }
}

export default AddNew;