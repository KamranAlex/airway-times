import React from 'react';
import logo from '../../assets/Logo-blue.png';
import logo_white from '../../assets/Logo-white.png';
import './Header.css';
import FormControlLabel from '@mui/material/FormControlLabel';
import { MaterialSwitch } from './MaterialSwitch';
import { useSelector, useDispatch } from 'react-redux';
import { setDark } from '../../features/reducers/Theme';

function Header() {
  const currentTheme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();

  console.log(currentTheme);
  return (
    <div className={currentTheme ? 'header_dark' : 'header'}>
      <div className='container d-flex justify-content-between align-items-center'>
        <div className='col-md-3 header__logo'>
          <img src={currentTheme ? logo_white : logo} alt='' />
        </div>
        <div
          className={
            (currentTheme ? 'header__menu_dark' : 'header__menu') +
            ' col-md-6 d-flex justify-content-center align-items-center'
          }
        >
          <a href='/' className='nav-btn'>
            Home
          </a>
          <a href='/' className='nav-btn'>
            about
          </a>
          <a href='/' className='nav-btn'>
            contact
          </a>
        </div>

        <div className='col-md-3 header__switch-mode text-end'>
          <FormControlLabel
            control={
              <MaterialSwitch
                sx={{ m: 1 }}
                onChange={() => dispatch(setDark())}
              />
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
