import React from "react";

import { Container, Row, Col, Image } from "react-bootstrap";

import "./Home.scss";
import Bob from "../assets/bob_home.png";

const Home = () => {
  return (
    <div className='container_two_object'>
      <Row className="box_all">
        <Col className="box_img">
          <Image src={Bob} alt="bob slaughter" id="home_image" />
        </Col>
        <Col id="col-text" className="box_text_container">
          <h1>Who am I?</h1>
          <p>Hello, my name is Guilherme and welcome to my website!</p>
          <p>
            I am a 3D artist trained in Game Design and Digital Entertainment. 
            I work with character modeling, rigging and animation.
          </p>
          <p>
          Here you can see my best works in the area and in the bar below, you have my email and the link to my Vimeo profile if you are 
          interested in knowing or contacting me.
          </p>
          <p>Feel free to get in touch:</p>
          <p id="email">gui.x.scoz@gmail.com</p>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
