import React from 'react';
import './AppDownload.css';
import { assets } from '../../assets/assets/assets'; // Adjust the import path based on your actual project structure

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For a Better experience, download the MoonLight App</p>
      <div className='app-download-platforms'>
        <img src={assets.play_store} alt="Google Play Store" />
        <img src={assets.app_store} alt="Apple App Store" />
      </div>
    </div>
  );
}

export default AppDownload;
