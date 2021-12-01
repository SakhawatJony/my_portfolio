import React from 'react';
import { Col, Container, ProgressBar, Row } from 'react-bootstrap';

const MySkill = () => {
    return (
        <>
          <div>
              <h3  className="text-Black fw-bold mt-3 pt-3 pb-5 text-center text-decoration-underline" >My Skill</h3>
        
<Container>
        <Row className="text-black fw-bold">
          <Col className="m-auto" sm>
         
</Col>
          <Col sm>
              <div className="p-5">
              <ProgressBar striped variant="success" now={90} /><br />
              <p>90% (HTML,CSS)</p>
  <ProgressBar striped variant="info" now={90} /><br />
  <p>90% (REACT.JS)</p>
  <ProgressBar striped variant="warning" now={90} /><br />
  <p>90% (JAVASCRIPT,ES6)</p>
  <ProgressBar striped variant="danger" now={90} /><br />
  <p>90% (React-Bootstrap)</p>
    
         </div></Col>
        </Row>
      </Container>
            </div>
            
        </>
    );
};

export default MySkill;