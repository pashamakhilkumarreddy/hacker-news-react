import styled, {
  createGlobalStyle
} from 'styled-components';

const GlobalStyle = createGlobalStyle `
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    position: relative;
    min-height: 100vh;
  }
`;

const StoriesContainerWrapper = styled.main `
  max-width: 1140px;
  padding: 20px 15px;
  margin: auto;
`;

export {
  GlobalStyle,
  StoriesContainerWrapper
}
