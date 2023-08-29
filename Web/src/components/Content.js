import React from 'react'
import './Content.css';

function Content() {
    return (
        <>
            <div className="content_main">
                <a href="/item1">
                <div className="content_item1">
                    <img src="https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg" alt="item1" />
                    <div className="content_item1_text">
                        <h3>아이템1</h3>
                        <p>아이템1 설명</p>
                    </div>
                </div>
                </a>
                <a href="/item2">
                <div className="content_item2">
                    <img src="https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg" alt="item2" />
                    <div className="content_item2_text">
                        <h3>아이템2</h3>
                        <p>아이템2 설명</p>
                    </div>
                </div>
                </a>
                <a href="/item3">
                <div className="content_item3">
                    <img src="https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg" alt="item3" />
                    <div className="content_item3_text">
                        <h3>아이템3</h3>
                        <p>아이템3 설명</p>
                    </div>    
                </div>
                </a>
            </div>
        </>
    );
}

export default Content;