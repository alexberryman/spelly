import React from 'react';
import './header.css';

import sLogo from './assets/s-logo.png';
import pLogo from './assets/p.png';
import eLogo from './assets/e.png';
import lLogo from './assets/l.png';
import yLogo from './assets/y.png';

export const Header = ({user, onLogin, onLogout, onCreateAccount}) => (
    <header>
        <div className="wrapper">
            <div>
                <img src={sLogo} alt='spelly logo' width='52px' height='52px'/>
                <img src={pLogo} alt='spelly logo' width='52px' height='52px'/>
                <img src={eLogo} alt='spelly logo' width='52px' height='52px'/>
                <img src={lLogo} alt='spelly logo' width='52px' height='52px'/>
                <img src={lLogo} alt='spelly logo' width='52px' height='52px'/>
                <img src={yLogo} alt='spelly logo' width='52px' height='52px'/>
            </div>
        </div>
    </header>
);

Header.propTypes = {};

Header.defaultProps = {};
