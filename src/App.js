import React from 'react';
import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage';

class App extends React.Component {
  render() {
    return(
      <div>
      <Header />
      <HomePage />
      </div>
    )
  }
}

export default App;