import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header.js';
import Main from './Main.js';

function App() {
  return (
    <div className="App">
      <div id="skip-link">
        <a href="#main-content" class="element-invisible element-focusable toc-filter-processed">Skip to main content</a>
      </div>
      <Header></Header>
      <a href="#skip-link" id="main-content" class="element-invisible toc-filter-processed">Go to top of page</a>
      <section class="intro" aria-label="Breadcrumb trail, headings and introduction">
          <div class="container">
              <ul class="breadcrumbs clearfix"><li><a href="/">Home</a></li><li>Brighton Town Hall</li></ul>
                      
              <div class="tabs"></div>                    </div>
      </section>
      <Main></Main>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
