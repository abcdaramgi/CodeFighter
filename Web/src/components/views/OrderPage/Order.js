import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import './Order.css'

function Order() {

    const handleBuy = () => {
        window.location.href = '/order/finish';
    }

    // Button을 클릭했을때 TextField에 입력한 값들을 가져와서 서버에 보내주는 함수
    const handleBuyTest = () => {
        const userId = document.getElementById('userId').value;
        const productCount = document.getElementById('productCount').value;
        const userAddress = document.getElementById('userAddress').value;
        const userPhone = document.getElementById('userPhone').value;

        // rest api를 사용해 서버에 보내주는 코드
        fetch('/api/order', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                userId: userId,
                userPhone: userPhone,
                userAddress: userAddress,
                productCount: productCount
            })
        })
        .then(res => res.json())
        .then(data => {
            if(data.success) {
                window.location.href = '/order/finish';
            } else {
                alert('주문 실패')
            }
        }
        )
    }

    return (
        <>
            <div className='layout'>
                <div className='container'>
                    <div className='component'>
                        <div className='hello'>주문하기</div>
                            <TextField fullWidth id="userId" label="이름" variant="outlined" margin='normal'/>
                            <TextField fullWidth id="userPhone" label="전화번호" variant="outlined" margin='dense'/>
                            <TextField fullWidth id="userAddress" label="주소" variant="outlined" margin='dense'/>
                            <TextField fullWidth id="productCount" label="상품 구매 갯수" variant="outlined" margin='dense'/>
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