import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {

    const [error, setError] = useState(null)
    const { emailSignUp, updateUserProfile, verifyEmail } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegistration = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)

        emailSignUp(email, password)
            .then(result => {

                form.reset();
                setError(null);
                handleUpdateProfile(name, photo)

                handleVerifyEmail();
                toast.success("Verification mail sent. Please check your inbox ");
                navigate("/");
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
    }

    const handleUpdateProfile = (name, photo) => {
        const profile = {
            displayName: name,
            photoURL: photo
        }
        updateUserProfile(profile)
            .then(result => {


            })
            .catch(error => console.error(error))
    }

    const handleVerifyEmail = () => {
        verifyEmail()
            .then(result => { })
            .catch(console.error(error))
    }

    return (
        <div className='my-5'>
            <h3 className='mb-3'>Registration Form</h3>
            <Form onSubmit={handleRegistration}>
                <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control name='photo' type="text" placeholder="Enter your photo url" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" >

                    <Form.Text className="text-danger">
                        {error ? error : null}
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </div>

    );
};

export default Register;