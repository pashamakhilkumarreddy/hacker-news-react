import React, { Fragment } from 'react';
import { FooterWrapper } from '../selectors/StoryStyles';

const Footer = () => {
  return (
    <Fragment>
      <FooterWrapper>
        <div className={`content has-text-centered`}>
          <p>
            <strong>Hacker News</strong>
          </p>
        </div>
      </FooterWrapper>
    </Fragment>
  )
}

export default Footer;
