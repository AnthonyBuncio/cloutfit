import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppNavbar from './components/AppNavbar';
import Search from './components/Search';
import Suggestions from './components/Suggestions';
import ImageGallery from './components/ImageGallery';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
            <AppNavbar />
            <Search /> 
            <Suggestions />
            <ImageGallery />
        </div>
      </Provider>
    );
  }
}

export default App;
