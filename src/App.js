import React from 'react';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import './App.css';
// import './Base.css';

function App() {
  return (
    <div className="App f11 f11v6">
      <div className="f11w1">
          <Header className="App-header" />
          <Body />
          <Footer />
      </div>
    </div>
  );
}

export default App;
