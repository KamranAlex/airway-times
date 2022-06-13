import React from 'react';
import logo from '../../assets/Logo-blue.png';
import './Header.css';
import FormControlLabel from '@mui/material/FormControlLabel';
import { MaterialSwitch } from './MaterialSwitch';

function Header() {
  return (
    <div className='header'>
      <div className='container d-flex justify-content-between align-items-center'>
        <div className='col-md-3 header__logo'>
          <img src={logo} alt='' />
        </div>
        <div className='col-md-6 header__menu d-flex justify-content-center align-items-center'>
          <button className='nav-btn'>Search</button>
          <button className='nav-btn'>Search</button>
          <button className='nav-btn'>Search</button>
        </div>

        <div className='col-md-3 header__switch-mode text-end'>
          <FormControlLabel
            control={<MaterialSwitch sx={{ m: 1 }} defaultChecked />}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
