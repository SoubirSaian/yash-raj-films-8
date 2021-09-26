import React from 'react';
import './Header.css';

//    header section 

const Header = () => {
    return (
        <div className="navbar">
             {/* navigation bar and logo */}
           <div className="navbar-header">
                <div className="navbar-logo">
                    <h1><i>yash raj films</i></h1>
                </div>
    
                <nav className="navbar-nav">
                    <a href="./home">Home</a>
                    <a href="./movies">Movies</a>
                    <a href="./about">About</a>
                    <a href="./contact">Contact</a>
                </nav> 
           </div>
           
                {/* announcement section in the header  */}
           <div className="announcement-section">
                    <div>
                        <h2>upcoming movie : <strong>Ram-leela</strong></h2>
                    </div>
                    <div>
                        <h2>Total Budget : 50 Cr.</h2>
                    </div>
                </div>
        </div>
    );
};

export default Header;