import React from 'react';
import { Image, Carousel } from "react-bootstrap";

import './Models.scss';
import bobTrio from '../assets/bob_model.png';
import bombermanTrio from '../assets/bomberman_model.png';
import ulalaTrio from '../assets/ulala_model.png';
import jhonnyTrio from '../assets/jhonny_model.png';

import bobSingle from '../assets/bob_singleModel.png';
import bombermanSingle from '../assets/bomberman_singleModel.png';
import ulalaSingle from '../assets/ulala_singleModel.png';
import jhonnySingle from '../assets/jhonny_singleModel.png';

const Models = () => {  
    
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <Image
                        id='trio'
                        src={bobTrio}
                    />
                    <Image
                        id='single'
                        src={bobSingle}
                        height='900'
                    />
                    <Carousel.Caption>
                        <h4>Bob Slaugher</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        id='trio'
                        src={bombermanTrio}
                    />
                    <Image
                        id='single'
                        src={bombermanSingle}
                        height='900'
                    />
                    <Carousel.Caption>
                        <h4>Bomberman</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        id='trio'
                        src={ulalaTrio}
                    />
                    <Image
                        id='single'
                        src={ulalaSingle}
                        height='900'
                    />
                    <Carousel.Caption>
                        <h4>Ulala</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        id='trio'
                        src={jhonnyTrio}
                    />
                    <Image
                        id='single'
                        src={jhonnySingle}
                        height='900'
                    />
                    <Carousel.Caption>
                        <h4>Jhonny</h4>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Models;