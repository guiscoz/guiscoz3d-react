import React from 'react';
import { Container, Row } from "react-bootstrap";
import './Animations.scss';

const Animations = () => {
    return (
        <div className='container_videos'>
            <Container>
                <Row id='row_animations'>
                    <h3>Animations</h3>
                    <p>On this page you will see in the video below the best animations made by me with 3D characters.<br/>Some models and rigs in the video were made by myself and others by third parties, but all animations were made by me.</p>
                    <iframe title="Animation Reel" src="https://player.vimeo.com/video/397008809" allowfullscreen="true" width="640" height="360" frameborder="0" ></iframe>
                </Row>        
            </Container>
        </div>
    );
};

export default Animations;