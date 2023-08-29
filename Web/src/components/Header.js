// import React from 'react'
import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
    return (
        <header>
            <div className="header_nav">
                <div className="header_outer">
                    <div className="header_inner">
                        <div className="header_team">
                            <a href="/"><button id="bold">code_fighter</button></a>
                        </div>
                        <div className="header_logo">
                            <a href="/"><button id="boldest">eCommerce</button></a>
                        </div>
                        <div className="header_options">
                            <a href="/login"><button>로그인</button></a>
                        </div>
                    </div>
                </div>
                <nav claclassNamess="nav">
                    <div className="nav_containerWrap">
                        <div className="nav_container">
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;