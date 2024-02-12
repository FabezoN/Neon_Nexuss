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
                    <img src={ImgMorpion} className='ImgJeux' alt='ImgMorpion'></img>
                </a>
            </div>
            <div className="Right">
                <a href='/Pendu'>
                    <img src={ImgPendu} className='ImgJeux' alt='ImgPendu'></img>
                </a>
            </div>
        </div>
        <div className='BtnStat'>
            <a href="/Statistique">
                <button type="button" className="btn custom-primary-btn custom-hover" >Statistique</button>
            </a>
        </div>
    </div>

);

export default HomePage;

