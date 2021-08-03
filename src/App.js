import React, { Component } from 'react';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



class App extends Component {
  render(){
    return(
      <div className="container container-sm container-md container-lg container-xl">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
