import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer/Footer';
import Header from '../pages/shared/Header/Header';
import LeftNav from '../pages/shared/LeftNav/LeftNav';
import RightNav from '../pages/shared/RightNav/RightNav';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg="2" className='d-none d-lg-block'><LeftNav></LeftNav></Col>
                    <Col lg="7"><Outlet></Outlet></Col>
                    <Col lg="3"><RightNav></RightNav></Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;