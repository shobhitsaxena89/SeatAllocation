import * as React from 'react';
import { Form } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Notification from './Notification';

class Login extends React.Component {
    public state = {
        validated: false
    };

    public render() {
        return (
            <Form onSubmit={(e: any) => this.handleSubmit(e)}>
                <Form.Row>
                    <Form.Group controlId="emailId">
                        <Form.Label>Email Id</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            placeholder="Enter your Email Id" />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            placeholder="password" />
                    </Form.Group>
                </Form.Row>
                <input type="submit" value="Login" />
            </Form>

        )
    }

    private handleSubmit(e: any) {
        return <Router>
            <Route path='/notification' component={Notification} />
        </Router>;
    }
}

export default Login;

