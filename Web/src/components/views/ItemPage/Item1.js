import React from 'react';
import Button from '@mui/material/Button';
import './Item.css';

function Item1() {
    
    const handleBuy = () => {
        window.location.href = '/item1/order';
    }

    return (
        <>
            <div className='layout_item'>
                <div className='container_item'>
                    <div className='component_item'>
                        <div className='item'>
                            <div className='item_img'>
                                <img className='item_img' src="https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg" alt="item1" />
                            </div>
                        </div>
                            <div className='item_buy'>
                                <div className='item_buy_price'>
                                    <h2>아이템1</h2>
                                    <p>1000원</p>
                                    <p>아이템1 설명</p>
                                </div>
                                <div className='item_buy_btn'>
                                    <Button fullWidth variant="outlined" size='large' onClick={handleBuy}>구매하기</Button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Item1;