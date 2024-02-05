import React from 'react';
import  './Layout.css';
import Logo from '../../assets/LogoSansFond.png';

const Layout: React.FC = () => (
    <div className="Layout">
        <img src={Logo}></img>
        <h1 className='Text'>NEON NEXUS</h1>
  </div>
);

export default Layout;
