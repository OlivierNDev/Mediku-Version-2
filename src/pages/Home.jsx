import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <h1>Welcome to Mediku</h1>
            <p>Please log in to continue.</p>
            <button onClick={() => window.location.href = '/login'}>Log In</button>
        </div>
    );
}

export default Home;
