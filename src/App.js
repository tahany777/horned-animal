import React, { Component } from 'react';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';

class App extends Component {
  render(){
    return(
      <>
      <Header />
      <Main />
      <Footer />
      </>
    );
  }
}

export default App;
