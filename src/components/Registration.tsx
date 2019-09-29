
import axios from 'axios';
import * as React from 'react';
import { Form } from 'react-bootstrap';

// import useForm from 'react-hook-form';

class Registration extends React.Component {
    state = {
        emailId: '',
        // isLaptop: false,
        password: '',
        seatPreference: '',
        validated: false,
    };
    constructor(props: any) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // public handleSubmit(event: { currentTarget: any; preventDefault: () => void; stopPropagation: () => void; }) {
    public handleSubmit(event: any) {
        event.preventDefaualt();
        const form = event.currentTarget;
        const data = new FormData(event.currentTarget);
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.setState(
            {
                emailId: form.emailId.value,
                // isLaptop: form.isLaptop.value,
                password: form.password.value,
                seatPreference: form.seatpreference.value,
                validated: true
            });
        data.get("emailId");
        fetch('http://localhost:49694/api/registration', {
            method: 'GET'
        }).then(res => {
            console.log(res);
        });
        // axios.post("http://localhost:49694/Help/Api/POST-api-Values", this.state.emailId)
        // .then(res => {
        //     console.log(res);
        //     console.log(res.data);
        // })
        axios.get("http://localhost:49694/api/registration")
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
        // <AlertAnyRecord key ='FormStatus' variant='success'>Form Submitted!!!</Alert>;
        alert("Form Submitted!!!");
    }


    public render() {
        // const  validated  = this.state;
        return (
            <Form onSubmit={(e: any) => this.handleSubmit(e)}>
                <Form.Row>
                    <Form.Group controlId="emailId">
                        <Form.Label>Email Id</Form.Label>
                        <Form.Control required type="text" placeholder="Email Id" />
                    </Form.Group>
                    <Form.Group controlId='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control required type="password" placeholder="password" />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group controlId="seatpreference">
                        <Form.Label>Seat Preference</Form.Label>
                        <Form.Control type="text" placeholder="Seat Preference (optional)" />
                    </Form.Group>
                </Form.Row>
                <Form.Group controlId="isLaptop">
                    <Form.Label>Do you have Laptop?</Form.Label>
                    <Form.Check type="radio" name="isLaptop" label="Yes" />
                    <Form.Check type="radio" name="isLaptop" label="No" />
                </Form.Group>

                <input type="submit" value="Submit" />
            </Form>
        )
    }
};

export default Registration;