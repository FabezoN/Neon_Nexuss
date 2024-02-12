import React from 'react';
import  './Layout.css';
import Logo from '../../assets/LogoSansFond.png';
import { Link } from 'react-router-dom';

const Layout: React.FC = () => (
    <div className="Layout">
          <Link to="/">
          <img alt="Logo" className="Logo"src={Logo}></img>
          </Link>
        <h1 className='Text'>NEON NEXUS</h1>
  </div>
);

export default Layout;
