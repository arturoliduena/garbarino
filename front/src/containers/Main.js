import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from '../components/Home'
import Items from '../components/Items'
import '../styles/main.css';

const Main = () => (
  <Router>
    <div>
      <div className="main-header">
        <div className="logo"> <a href="https://www.garbarino.com"> </a></div>
      </div>
      <div className="category-menu">
      <ul>
        <li className="li-option"><Link to="/"><span className="category-text">Home</span></Link></li>
        <li className="li-option"><Link to="/items"><span className="category-text">productos</span></Link></li>
      </ul>
      </div>
      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/items" component={Items}/>
    </div>
  </Router>
)


export default Main;