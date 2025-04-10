import React from 'react';
import NewYorkTimesHomepage from './components/NewYorkTimesHomepage';
import Footer from './components/FooterPage';
import Content from './components/ContentPage'

function App() {
  return (
    <div className="App">
      <NewYorkTimesHomepage />
      <Footer />
      <Content />
    </div>
  );
}

export default App;