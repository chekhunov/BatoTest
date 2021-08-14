import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const Menu = ({multiSelect = false, menuItems, activeId, setActiveId, activePopup}) => {
  const [selection, setSelection] = React.useState([]);
  
  function handleOnClick(item) {
    if (!selection.some((current) => current.id === item.id)) {
      if (!multiSelect) {
        setSelection([item]);
      } else if (multiSelect) {
        setSelection([...selection, item]);
      }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter((current) => current.id !== item.id);
      setSelection([...selectionAfterRemoval]);
    }
  }

  function clickItem(val) {
    setActiveId(val);
  }

  return (
    <nav className={classNames("menu", activePopup && 'active')}>
      {menuItems && menuItems.map((item, index) => (
        <Link key={item.id} to={`/${item.link}`}>
          <li
            className={classNames("menu__item", item.id === activeId ? "active" : '')}
            key={item.id}>
            <div
              type="link"
              className="dd-list-link"
              onClick={(e) => {
                handleOnClick(item);
                clickItem(index);
              }}>
              <span className={"menu__left"}>{item.value}</span>
            </div>
          </li>
        </Link>
      ))}
    </nav>
  );
};

export default Menu;
