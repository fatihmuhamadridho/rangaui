import React, { useState } from 'react';
import classes from './Menu.module.css';

interface MenuItem {
  label: string;
  onClick: () => void;
}

interface MenuProps {
  items: MenuItem[];
  className?: string;
}

const Menu = ({ items, className = '' }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleItemClick = (onClick: () => void) => {
    onClick();
    setIsOpen(false);
  };

  return (
    <div className={`${classes.menuContainer} ${className}`}>
      <button className={classes.menuButton} onClick={toggleMenu}>
        Menu
      </button>
      {isOpen && (
        <ul className={classes.menuList}>
          {items.map((item, index) => (
            <li
              key={index}
              className={classes.menuItem}
              onClick={() => handleItemClick(item.onClick)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Menu;
