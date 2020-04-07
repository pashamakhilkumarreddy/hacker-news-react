import React, { Fragment } from 'react';
import StoriesContainer from './containers/StoriesContainer';
import { GlobalStyle } from './selectors/StoriesContainerStyles';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <main className="container">
        <StoriesContainer />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
