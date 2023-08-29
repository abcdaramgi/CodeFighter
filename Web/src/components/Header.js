// import React from 'react'
import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
    const [activeIndicatorStyle, setActiveIndicatorStyle] = useState({});

  useEffect(() => {
    const buttons = document.querySelectorAll('.search_tagWrap button');

    const updateIndicator = () => {
      const activeButton = document.querySelector('.search_tagWrap button.active');
      if (activeButton) {
        const buttonRect = activeButton.getBoundingClientRect();
        setActiveIndicatorStyle({
          width: buttonRect.width,
          transform: `translateX(${buttonRect.left}px)`,
        });
      }
    };

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        updateIndicator();
      });
    });

    updateIndicator();
  }, []); 

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
                            <div className="nav_searchBox">
                                    <div className="search_tagWrap">
                                        <button className="search_tagBtn_item" type="button">영상</button>
                                        <button className="search_tagBtn_store" type="button">소환사</button>
                                        <div className="active_indicator" style={activeIndicatorStyle}></div>
                                    </div>
                                    <div className="search_inputWrap">
                                        <input type="text" className="search_input" placeholder=" 검색하는게 어떻노?"/>
                                    </div>
                                    <div className="search_btnWrap">
                                        <button className="search_btn">검색</button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;