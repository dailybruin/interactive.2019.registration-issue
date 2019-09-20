import * as React from 'react'
import { css } from 'emotion'

import menu from './menu.svg'
import close from './close.svg'

const MOBILEBREAKPOINT = 800

class Header__MobileMenu extends React.PureComponent<{ sections: string[]; }, {}> {
  constructor(props) {
    super(props)
    this.state = {
      isExpanded: false,
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  setState() {
    var offset = document.getElementById('Header__MobileMenuList').offsetWidth
    document.getElementById('Header__MobileMenu').style.left = this.state
      .isExpanded
      ? '0'
      : `-${offset}px`
    document.getElementById('Header__MenuIcon').style.display = this.state
      .isExpanded
      ? 'none'
      : `block`
    document.getElementById('Header__CloseIcon').style.display = this.state
      .isExpanded
      ? 'block'
      : `none`
  }

  componentDidMount() {
    this.setState()
  }

  toggleMenu() {
    this.state.isExpanded = !this.state.isExpanded
    this.setState()
  }

  render() {
    return (
      <div
        id="Header__MobileMenu"
        className={css`
          position: fixed;
          top: 140px;
          z-index: 10;
          transition: left 200ms;
        `}
      >
        <nav
          id="Header__MobileMenuList"
          className={css`
            padding: 10px;
            text-align: center;
            display: inline-block;
            background-color: #ddd;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

            a {
              display: block;
              font-family: 'Lato', serif;
              font-style: normal;
              font-weight: normal;
              font-size: 22px;
              line-height: 26px;
              text-align: center;

              color: #363636;
              text-decoration: none;
              font-weight: bold;
              margin: 10px;
              border-bottom: 1px solid #000;
              padding: 2px 0 8px;
            }
          `}
        >
          {this.props.sections.map(section => (
            <a key={section} href={`#${section}`}>{section}</a>
          ))}
        </nav>
        <div
          onClick={this.toggleMenu}
          className={css`
            cursor: pointer;
            display: inline-block;
            background-color: #ddd;
            vertical-align: top;
            width: 48px;
            height: 48px;
            padding: 6px;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

            img {
              width: 100%;
            }
          `}
        >
          <img id="Header__MenuIcon" src={menu} />
          <img id="Header__CloseIcon" src={close} />
        </div>
      </div>
    )
  }
}

export default Header__MobileMenu
