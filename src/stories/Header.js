import React from 'react';
import './header.css';

import sLogo from './assets/alphabet-white/s-logo.png';
import pLogo from './assets/alphabet-white/p.png';
import eLogo from './assets/alphabet-white/e.png';
import lLogo from './assets/alphabet-white/l.png';
import yLogo from './assets/alphabet-white/y.png';

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
