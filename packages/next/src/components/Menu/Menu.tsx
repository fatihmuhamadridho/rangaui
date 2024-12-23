import React, { useState, ReactElement } from 'react';
import classes from './Menu.module.css';

const MenuTarget = ({ children }: { children: React.ReactNode }) => {
  return <div className={classes.menuTarget}>{children}</div>;
};

const MenuDropdown = ({ children }: { children: React.ReactNode }) => {
  return <div className={classes.menuDropdown}>{children}</div>;
};

const MenuLabel = ({ children }: { children: React.ReactNode }) => {
  return <div className={classes.menuLabel}>{children}</div>;
};

const MenuItem = ({
  children,
  leftSection,
  rightSection,
  color,
}: {
  children: React.ReactNode;
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
  color?: string;
}) => {
  const itemStyle = {
    color: color || 'inherit',
  };

  return (
    <div className={classes.menuItem} style={itemStyle}>
      {leftSection && <span className={classes.menuLeftSection}>{leftSection}</span>}
      <span className={classes.menuContent}>{children}</span>
      {rightSection && <span className={classes.menuRightSection}>{rightSection}</span>}
    </div>
  );
};

const MenuDivider = () => {
  return <div className={classes.menuDivider} />;
};

interface MenuProps {
  className?: string;
  children?: React.ReactNode;
  shadow?: string;
  width?: number;
}

const Menu = ({ className = '', children, shadow = 'md', width = 200 }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const dropdownStyle = {
    boxShadow: shadow === 'md' ? '0 4px 6px rgba(0, 0, 0, 0.1)' : '',
    width: `${width}px`,
  };

  return (
    <div className={`${classes.menuContainer} ${className}`}>
      <div onClick={toggleMenu} className={classes.menuTargetContainer}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type === MenuTarget) {
            return React.cloneElement(child as ReactElement<any>);
          }
          return null;
        })}
      </div>

      {isOpen && (
        <div className={classes.menuDropdownContainer} style={dropdownStyle}>
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child) && child.type === MenuDropdown) {
              return React.cloneElement(child as ReactElement<any>);
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
};

Menu.Target = MenuTarget;
Menu.Dropdown = MenuDropdown;
Menu.Label = MenuLabel;
Menu.Item = MenuItem;
Menu.Divider = MenuDivider;

export default Menu;
