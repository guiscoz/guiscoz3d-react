import React from 'react';

import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faVimeoV
} from '@fortawesome/free-brands-svg-icons';

import './Footer.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <a
                href='https://vimeo.com/guiscoz/'
                target='_blank'
                rel='noopener noreferrer'
            >
                <FontAwesomeIcon
                icon={faVimeoV}
                />
            </a>
            <p>gui.x.scoz@gmail.com</p>
        </div>
    );
};

export default Footer;