import React from 'react';
import { Container, Row } from "react-bootstrap";
import './Rigging.scss';

const Rigging = () => {
    return (
        <div className='container_videos'>
            <Container>
                <Row id='row_rigging'>
                    <h3>Rigs</h3>
                    <p>Rigging is a technique that builds a series of 'bones' to a three-dimensional character, enabling their animations. In the video below you will see how this works when watching my best rigs.
                    <br/>Some models in the video were made by myself and others by third parties, but all the rigs are mine.</p>
                    <iframe  title="vimeo-player" src="https://player.vimeo.com/video/397008899"  width="640" height="360" frameborder="0" allowfullscreen></iframe>
                </Row>
            </Container>
        </div>
    );
};

export default Rigging;