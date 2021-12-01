import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import myPic from '../../../images/123.png'
import myCv from '../../../images/SAKHAWAT_ HOSEN_WEB_DEVOLOPER_MY_RESUME .pdf'
import Slide from 'react-reveal/Slide';

const About = () => {
    return (
        <Container>
        <Row className="mt-5">
          <h2 className="text-center fw-bold mt-3 pt-3 pb-5">About Me</h2>
        <Col  sm><Image src={myPic} fluid   /></Col>
          <Col className="m-auto" sm>
              <div className="ps-3">
              <Slide bottom>
              <h3>HI THERE,</h3>
<h2>I Am Roton MirzaWeb DesignerWeb DeveloperPhotographer</h2>
<p>I’m a Front End Web developer who is passionate about making error-free websites with 100% client satisfaction. I love to solve real-world problems. I am strategic, goal-oriented, and always work with an end goal in mind. I pride myself on doing quality work and maintaining excellent communication. Most of the time I work with JavaScript ReactJS</p>
<Button variant="success"><a className="text-decoration-none text-white fw-bolder" href={myCv} download>Download Resume</a></Button>
        </Slide>
              
              </div>
</Col>    
        </Row>
      </Container>
    );
};

export default About;