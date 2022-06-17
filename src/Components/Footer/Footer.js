import React from 'react';
import './Footer.css';
import logo from '../../assets/Logo-white.png';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className='footer text-center'>
      <div className='footer-logo mb-2'>
        <img src={logo} alt='' />
      </div>
      <p className='footer-text mb-2'>@{year}. All rights reserved.</p>
      <p className='footer-text mb-2'>
        Designed & Developed by{' '}
        <a target='_blank' rel='noreferrer' href='http://kkamran.info'>
          K.KAMRAN
        </a>{' '}
      </p>
    </div>
  );
}

export default Footer;
