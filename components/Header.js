import React from 'react';
import Link from 'next/link';
import MenuLink from '../components/MenuLink';
import headerStyles from '../public/styles/modules/components/header.module.css';
import API from '../services/Api'
import Cookies from 'js-cookie'

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      menu_open: false,
      fixed_menu_visible: false
    };
  }

  _toggleMenu = () => {
    if( this.state.menu_open ) {
      //document.querySelector('html').classList.remove('menu-open');
    } else {
      //document.querySelector('html').classList.add('menu-open');
    }
    this.setState(state => ({
      menu_open: !state.menu_open
    }));
  };

  _handleEscape = (e) => {
    if (e.which == 27) {
      this._toggleMenu();
    }
  }

  componentDidUpdate() {

  }

  componentDidMount() {
    window.addEventListener('scroll', this._toggleCompactMenu );
  }

  _toggleCompactMenu = () => {
    if( process.browser ) {
      if( window ) {
        if( window.scrollY >= 100 ) {
          if( this.state.fixed_menu_visible == false ) {
            this.setState( {
              fixed_menu_visible: true
            })
          }
        } else {
          if( this.state.fixed_menu_visible == true ) {
            this.setState( {
              fixed_menu_visible: false
            })
          }
        }
      }
    }
  }

  _renderBurgerClass = () => {
    if( this.state.menu_open ) {
      return `${headerStyles.burger} ${headerStyles.open}`
    } else {
      return `${headerStyles.burger}`
    }
  }

  _renderCompactMenu = (menu_items) => {
    if( !this.state.menu_open ) {
      return null;
    } else {
      return(
        <>
        <div onClick={() => { this._toggleMenu()}} className={headerStyles.openMenuBackground}></div>
        <div className={headerStyles.compactMenu}>
          <ul>
            {menu_items.map(item =>
              <li key={item.name}>
                <MenuLink
                  href={item.path}
                >
                  <a>{item.name}</a>
                </MenuLink>
                {this._renderSubMenuItems(item.children)}
              </li>
            )}
          </ul>
        </div>
        </>
      )
    }
  }

  _renderSubMenuItems = (children) => {
    if( children ) {
      if( children.length >= 1 ) {
        return(
          <>
          <ul className={headerStyles.subMenu}>
            {children.map(function(child, i) {
              return(
                <li key={child.name}>
                 <MenuLink href={child.path}>
                   <a>{child.name}</a>
                 </MenuLink>
               </li>
              )
            })}
          </ul>
          </>
        );
      }
    }
  }

  _renderFixedMenu = (menu_items) => {
    if( this.state.fixed_menu_visible == true || this.state.menu_open ) {
      return(
        <header className={`clearfix ${headerStyles.header} ${headerStyles.fixed}`}>
          <div className={headerStyles.fixedLogo}>
            <Link href="/">
              <img src="/images/logo-small.svg" alt="" />
            </Link>
          </div>
          <button
            onClick={(e) => {
              this._toggleMenu();
            }}
            className={headerStyles.menuToggle} aria-controls="primary-menu" aria-expanded="false">
            <div className={this._renderBurgerClass()}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          <div className={`clearfix ${headerStyles.menuWrap}`}>
            <ul className={`menu ${headerStyles.menu}`}>
              {menu_items.map(item =>
                <li key={item.name}>
                  <MenuLink
                    href={item.path}
                  >
                    <a>{item.name}</a>
                  </MenuLink>
                  {this._renderSubMenuItems(item.children)}
                </li>
              )}
            </ul>
          </div>
        </header>
      )
    } else {
      return null;
    }
  }

  render() {
    const menus = require('../data/Menus.json');
    const menu_items = menus.header_menu;
    return(
      <>
      <div className={headerStyles.maintenanceBlock}></div>
      <header className={headerStyles.header}>
        <div className={headerStyles.logo}>
          <Link href="/">
            <img src="/images/logo-large.svg" alt="" />
          </Link>
        </div>
        <button
          onClick={(e) => {
            this._toggleMenu();
          }}
          className={headerStyles.menuToggle} aria-controls="primary-menu" aria-expanded="false">
          <div className={this._renderBurgerClass()}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <div className={`clearfix ${headerStyles.menuWrap}`}>
          <ul className={`menu ${headerStyles.menu}`}>
            {menu_items.map(item =>
              <li key={item.name}>
                <MenuLink
                  href={item.path}
                >
                  <a>{item.name}</a>
                </MenuLink>
                {this._renderSubMenuItems(item.children)}
              </li>
            )}
          </ul>
        </div>
        {this._renderCompactMenu(menu_items)}
      </header>
      {this._renderFixedMenu(menu_items)}
      <div id="no-ie">
        <h4>Your browser is not compatible with this application. Please use the latest version of Google Chrome, Mozilla Firefox, Microsoft Edge or Safari.</h4>
      </div>
      </>
    );
  }

}

export default Header;
