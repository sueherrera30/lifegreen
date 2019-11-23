import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/containers/home.scss';
import world from '../assets/static/greenWorld.png';
import MainSlider from '../components/Catousel';
import HomeCategories from '../components/HomeCategories';
import SlideTips from '../components/CatouselTips';

const Home = () => (
  <div className='home'>
    <div className='home__main'>
      <div className='home__main--container '>
        <div>
          <h4>buy consciously</h4>
          <p>Be friendly with home</p>
          <button type='button'>
            <Link to='/product' className='home--button-link'>Let`s take a look</Link>
          </button>
        </div>
        <img id='worldSpinning' src={world} alt='world-green' />
      </div>
    </div>
    <MainSlider />
    <HomeCategories />
    <SlideTips />
  </div>
);
export default Home;
