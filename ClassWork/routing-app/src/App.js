import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar></Navbar>
          {/* <Home></Home>
          <About></About>
          <Contact></Contact> */}
          <Route exact path='/' component={Home}></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/contact' component={Contact}></Route>
          <Route path='/404' render={()=>{ return (<p className="center">Page Not Found</p>)}}/>{/*it is inline rendering, it is render as prop*/}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

/*
adding <BrowserRouter> tag enable our app to route and we can implement in index.js
it should have only child comp
*/

/*
              high order comp
basic.js => super charged comp => 
*/