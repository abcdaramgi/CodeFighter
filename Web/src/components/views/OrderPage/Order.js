import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import './Order.css'

function Order() {

    const handleBuy = () => {
        window.location.href = '/order/finish';
    }

    return (
        <>
            <div className='layout'>
                <div className='container'>
                    <div className='component'>
                        <div className='hello'>주문하기</div>
                            <TextField fullWidth id="userId" label="이름" variant="outlined" margin='normal'/>
                            <TextField fullWidth id="userPw" label="전화번호" variant="outlined" margin='dense'/>
                            <TextField fullWidth id="userPw" label="주소" variant="outlined" margin='dense'/>
                        <div className='btn_component'>
                        <Button fullWidth variant="outlined" size='large' onClick={handleBuy}>구매하기</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Order;