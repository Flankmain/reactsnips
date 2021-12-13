import './css/App.css';

import React from 'react';
import AppBar from './components/AppBar';
import Container from './components/Container';
import Posts from './components/Posts';
import About from './components/About';
import Comments from './components/Comments';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import PostPage from './components/PostPage';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <AppBar/>
      <div className="App">
        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <Routes>
          <Route path="*"           element={<h1>404, not found.</h1>} />
          <Route path="/"           element={<Container/>}/>
          <Route path="/posts/:id"  element={<PostPage/>}/>
          <Route path="/posts/"     element={<Posts/>}/>
          <Route path="/comments"   element={<Comments/>}/>
          <Route path="/about"      element={<About/>}/>
          <Route path="/login"      element={<LoginForm/>}/>
          <Route path="/register"   element={<RegisterForm/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
