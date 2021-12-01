import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import myPic from '../../../images/123.png'
import Slide from 'react-reveal/Slide'

const HederBanner = () => {
    return (
        <Container>
        <Row className="text-black fw-bold">
          <Col className="m-auto" sm>
         <div className="ps-5">
         <Slide left>
         <h3>HI THERE,</h3>
         <h2>I Am Sakhawat Hosen</h2>
<h5>Front End Web developer</h5>

<Button variant="success">Hire Me</Button>
        </Slide>
         
         </div>
</Col>
          <Col sm><Image className="border border-5 border-info bg-warning" src={myPic} fluid   /></Col>
        </Row>
      </Container>
    );
};

export default HederBanner;