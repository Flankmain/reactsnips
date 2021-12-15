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

                <Link to="/posts">Posts</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">register</Link>
                
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