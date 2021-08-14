import React from 'react';
import Menu from '../../menu';

export default function HeaderMenuPopup({activePopup, menuItems, activeId, setActiveId}) {

  return (
    <div className="menu-mobile">
      <div className="menu-inner">
      
      <Menu activePopup={activePopup} menuItems={menuItems} activeId={activeId} setActiveId={setActiveId} />

      </div>
      
    </div>
  );
}
