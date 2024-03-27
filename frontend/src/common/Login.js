import React from 'react';
import { Card, Button, Form } from 'react-bootstrap';

const Login = () => (
    <div className="d-flex justify-content-center mt-5">
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Login</Card.Title>
                <Form>
                    <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    </div>
);

export default Login;
