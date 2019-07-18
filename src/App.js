import React from 'react';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
// import Favicon from './favicon.png';
import './App.css';
// import './Base.css';

function App() {
  return (
    <div className="App f11 f11v6">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <meta name="viewport" content= "width=device-width, user-scalable=no"></meta>
      <script src="https://unpkg.com/react-tabs/dist/react-tabs.development.js" />
      {/* <link rel="shortcut icon" type="image/png" href={Favicon}/> */}
      <div className="f11w1">
          <Header className="App-header" />
          <Body />
          <Footer />
      </div>
    </div>
  );
}

export default App;