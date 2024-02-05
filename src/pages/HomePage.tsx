import React from 'react';
import './HomePage.css';
import Layout from '../components/Layout/Layout';
import ImgMorpion from '../assets/Morpion.png'
import ImgPendu from '../assets/Pendu.png'


const HomePage: React.FC = () => (
    <div className="BackGroundImage">
        <Layout>
        </Layout>
        <div className='Games'>
            <div className="Left">
                <a href='/Morpion'>
                    <img src={ImgMorpion} className='ImgJeux'></img>
                </a>
            </div>
            <div className="Right">
                <a href='/pendu'>
                    <img src={ImgPendu} className='ImgJeux'></img>
                </a>
            </div>
        </div>
        <div className="Stastique">
            
        </div>
    </div>

);

export default HomePage;

