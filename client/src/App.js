import './css/App.css';

import React from 'react';
import AppBar from './components/AppBar';
import Posts from './components/Posts';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import PostPage from './components/PostPage';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="ROOT">
        <AppBar/>
        <div className="App">
          <link rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <Routes>
            <Route path="*"           element={<h1>404, not found.</h1>} />
            <Route path="/"           element={<Posts/>}/>
            <Route path="/posts/:id"  element={<PostPage/>}/>
            <Route path="/posts/"     element={<Posts/>}/>
            <Route path="/login"      element={<LoginForm/>}/>
            <Route path="/register"   element={<RegisterForm/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
