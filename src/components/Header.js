import React from 'react';
import { HeaderWrapper } from '../selectors/StoryStyles';

const Header = () => {
  return (
    <HeaderWrapper>
      <nav className={`navbar`} role="navigation" aria-label="main-navigation">
        <div className={`navbar-brand`}>
          <a href="/">
            <img className={`header-logo`} src="#" alt="Hacker News Logo" />
          </a>
          <a role="button" className={`navbar-burger burger`} aria-label="menu" aria-expanded="false" data-target="main-navbar">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      </nav>
    </HeaderWrapper>
  )
}

export default Header;
