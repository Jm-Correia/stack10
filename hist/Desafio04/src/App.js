import React from 'react';
import './App.css';

import NavBar from './components/NavBar'
import PostList from './components/PostList';

function App(){
    return (
        <>
            <NavBar/>
            <PostList/>
        </>
    );
}

export default App;