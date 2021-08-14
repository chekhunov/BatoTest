import React from 'react';
import classNames from 'classnames';
import logo from '../../assets/header/logo.png';

import HeaderMenuPopup from './headerMenuPopup';
import LogoCompany from './logoCompany';

export default function Header({appState}) {
  const [activeId, setActiveId] = React.useState(null);
  const [activePopup, setActivePopup] = React.useState(false);
  const [activeFind, setActiveFind] = React.useState(false);
  const [bgColor, setBgColor] = React.useState('#000');

  function isActivePopup(){
    setActivePopup(!activePopup)
  }
  function isActiveFind(){
    setActiveFind(!activeFind)
  }
  
  function addedOverflowForBody(){
    
    !activePopup ? document.body.classList.add('overflowe'):(document.body.classList.remove('overflowe'));
  }
  
  
  function isColor(){
    !activePopup ? setBgColor('rgba(20, 51, 224, 1)') : setBgColor("#000")
  }

  const isBgColor = {
    backgroundColor: bgColor,
  }

  return (
    <header style={isBgColor} className={classNames("header")}>
      <div className="container">
        <div className={classNames("header__inner", activePopup && 'active')}>
          <div className={"header__box"}>
            {!activePopup && <LogoCompany logo={logo} />}
           
            {!activePopup && 
          
          <div className="header__serch">
              <input className={classNames("search-input", activeFind && 'active')} id="u-search" type="text" placeholder="Search" />
         
              <button className={classNames("icon-search header__search", activeFind && 'active')} onClick={(e)=>{isActiveFind();}}></button>
          </div>
            }
            
            <button className={classNames("header__popup", activePopup && 'active')} onClick={(e)=>{isActivePopup();addedOverflowForBody(); isColor();}}><span className="header__popup-line"></span></button>
           
            {activePopup && <HeaderMenuPopup activePopup={activePopup} menuItems={appState.menuItems} activeId={activeId} setActiveId={setActiveId} />}
          
          </div>
        </div>
      </div>
    </header>
  );
}
