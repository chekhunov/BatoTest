import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/header/logo.png';

export default function LogoCompany() {

  return (
    <>
        <Link to={'/'}>
              <div className={"header__img"} >
                <img className={"header__img"} height="24" width="75" src={logo} alt="logo company" />
              </div>
        </Link>
    </>
  );
}
