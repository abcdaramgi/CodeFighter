import React from 'react';
import Button from '@mui/material/Button';
import './finish.css';

function finish() {

    const handleBuy = () => {
        window.location.href = '/';
    }

    return (
        <div className='layout'>
                <div className='container'>
                    <div className='component'>
                        <div className='hello'>주문완료 되었습니다.</div>
                        <div className='home_btn'>
                        <Button fullWidth variant="outlined" size='large' onClick={handleBuy}>홈으로</Button>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default finish;