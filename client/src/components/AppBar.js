import React from 'react';
import '../css/AppBar.css';
import {Link} from 'react-router-dom'
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Suspense } from 'react';

function MyAppBar(props) {

    return (
        <div className="AppBar">
        <AppBar position="static">
            <Toolbar variant="dense">

            <Typography className='Typography' variant="h6" color="inherit" component="div">

                <Link to="/">Home</Link>
                <Link to="/posts">All posts</Link>
                <Link to="/">All comments</Link>
                <Link to="/about">About</Link>

                <Link to="/login">Login</Link>
                <Link to="/register">register</Link>

                {/*
                <Button id='fi' onClick={()=> console.log('fi')}>FI</Button>
                <Button id='en' onClick= {()=> console.log('en')}>EN</Button>
                */}
            </Typography>

            </Toolbar>
        </AppBar>
        </div>
    );
}

//export default MyAppBar;

export default function App() {
    return (
        <Suspense fallback="loading">
            <MyAppBar/>
        </Suspense>
    )
}