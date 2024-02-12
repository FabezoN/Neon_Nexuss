import React from 'react';
import './HomePage.css';
import Layout from '../components/Layout/Layout';
import ImgMorpion from '../assets/Morpion.png'
import ImgPendu from '../assets/Pendu.png'
import { Link } from 'react-router-dom';


const HomePage: React.FC = () => (
    <div className="BackGroundImage">
        <Layout>
        </Layout>
        <div className='Games'>
            <div className="Left">
                <Link to="/Morpion">
                    <img src={ImgMorpion} className='ImgJeux' alt='ImgMorpion'></img>
                </Link>
            </div>
            <div className="Right">
                <Link to="/Pendu">
                    <img src={ImgPendu} className='ImgJeux' alt='ImgPendu'></img>
                </Link>
            </div>
        </div>
        <div className='BtnStat'>
            <Link to="/Statistique">
                <button type="button" className="btn custom-primary-btn custom-hover" >Statistique</button>
            </Link>
        </div>
    </div>

);

export default HomePage;

