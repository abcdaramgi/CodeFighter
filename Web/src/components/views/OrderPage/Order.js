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
                        <div className='hello'>롤로세움 시작하기</div>
                        <TextField fullWidth id="userId" label="이름" variant="outlined" margin='normal'/>
                        <TextField fullWidth id="userPw" label="전화번호" variant="outlined" margin='dense'/>
                        <TextField fullWidth id="userPw" label="주소" variant="outlined" margin='dense'/>

                        {/* <FormControlLabel control={<Checkbox defaultChecked />} label="자동 로그인" /> */}
                        <div className='btn_component'>
                        구매하시겠습니까?<Button fullWidth variant="outlined" size='large' onClick={handleBuy}>구매하기</Button>
                        </div>
                        {/* <div className='footer_component'>
                            <Link to='/register/submit' className='footer_link'>
                                회원가입
                            </Link>
                            <br/>
                            <Link to='/login/findPW' className='footer_link'>
                                비밀번호 찾기
                            </Link>
                        </div> */}
                        {/* <div className='separator'></div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Order;