import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
const Login = () => {

    const [error, setError] = useState(null);
    const { emailLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        emailLogin(email, password)
            .then(result => {
                form.reset();
                setError(null);
                navigate("/")
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            })
    }

    return (
        <div>
            <div className='my-5'>
                <h3 className='mb-3'>Login</h3>
                <Form onSubmit={handleLogin}>

                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" required />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" required />
                    </Form.Group>

                    <Form.Group className="mb-3">

                        <Form.Text className="text-danger">
                            {error ? error : null}
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Login;