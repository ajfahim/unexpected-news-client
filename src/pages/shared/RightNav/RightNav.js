import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaTwitter, FaTwitch, FaWhatsapp, FaFacebook } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightNav = () => {
    return (
        <div>
            <ButtonGroup className='w-100' vertical size='lg'>
                <Button variant="outline-primary" className='mb-2'> <FaGoogle></FaGoogle> Login via Google</Button>
                <Button variant="outline-dark" className='mb-2'> <FaGithub></FaGithub> Login via Github</Button>
            </ButtonGroup>
            <h4 className='mt-4'>Find us on</h4>
            <ListGroup>
                <ListGroup.Item> <FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                <ListGroup.Item> <FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                <ListGroup.Item> <FaWhatsapp></FaWhatsapp> WhatsApp</ListGroup.Item>
                <ListGroup.Item> <FaTwitch></FaTwitch> Twitch</ListGroup.Item>
            </ListGroup>
            <BrandCarousel></BrandCarousel>
        </div>
    );
};

export default RightNav;