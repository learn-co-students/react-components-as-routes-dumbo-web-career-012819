import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import Home from './Home'
import Login from './Login'
import About from './About'
import SignUp from './SignUp'
import Messages from './Messages'

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white'
}

const NavBar = () =>
    <div>
        <NavLink to="/" style={link} activeStyle={{ background: 'darkblue'}}>Home</NavLink>
        <NavLink to="about" style={link} activeStyle={{ background: 'darkblue'}}>About</NavLink>
        <NavLink to="login" style={link} activeStyle={{ background: 'darkblue'}}>Login</NavLink>
        <NavLink to="signup" style={link} activeStyle={{ background: 'darkblue'}}>Sign-Up</NavLink>
        <NavLink to="messages" style={link} activeStyle={{ background: 'darkblue'}}>Messages</NavLink>
    </div>





ReactDOM.render((
  <Router>
    <React.Fragment>
        <NavBar />
        <Route exact path="/login" component={Login} />
        <Route exact path="/about" component={About}/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/messages" component={Messages}/>
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);
