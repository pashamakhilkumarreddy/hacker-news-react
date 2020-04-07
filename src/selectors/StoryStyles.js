import styled from 'styled-components';

const StoryWrapper = styled.section `
  padding-top: 10px;
  margin-bottom: 20px;
  border-top: 1px solid #ccc;

  &:first-of-type {
    border-top: 0
  }

  &:last-of-type {
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

const HeaderWrapper = styled.header `
  border-bottom: 1px solid hsla(0, 0%, 47%, 0.7);
  box-shadow: 0 2px 4px 0 hsla(0, 0%, 47%, 0.7);
`;

const FooterWrapper = styled.footer `
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #fafafa;
  padding: 2rem 1.5rem;
  border-top: 1px solid #d7d7d7;
`;

const StoryTitle = styled.h1 `
  margin-bottom: 5px;
  font-size: 18px;
  line-height: 1.8;
  margin: 0;
  text-decoration: none;

  a {
    color: #2e2e2c;
    background-color: #f8dc3d;
    text-decoration: none;
  }
`;

const StoryMeta = styled.div `
  font-style: italic;

  > span(:first-child) {
    margin-right: 10px;
  }

  > span:not(:first-child):before {
    content: '.';
    margin: 0 7px;
  }

  .story__meta-bold {
    font-weight: bold;
  }
`;

const StoryMetaElement = styled.span `
  font-weight: bold;
  color: ${props => props.color || '#f00'};
`;

const TimeStamp = styled.p `
  font-style: italic;
  color: ${props => props.color || '#777'};
`;

const TimeStampGroup = styled.div `
  display: flex;
  flex-flow: row nowrap;
  
  > time:first-of-type {
    padding-right: 1rem;
  }
`;

export {
  StoryWrapper,
  HeaderWrapper,
  FooterWrapper,
  StoryTitle,
  StoryMeta,
  StoryMetaElement,
  TimeStamp,
  TimeStampGroup
}
