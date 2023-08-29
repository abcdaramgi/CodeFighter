import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './Order.css'

function Order() {
    return (
        <>
            <div className='layout'>
                <div className='container'>
                    <div className='component'>
                        <div className='hello'>롤로세움 시작하기</div>
                        <TextField fullWidth id="userId" label="이메일" variant="outlined" margin='normal'/>
                        <TextField fullWidth id="userPw" label="비밀번호" variant="outlined" margin='dense'/>
                        {/* <FormControlLabel control={<Checkbox defaultChecked />} label="자동 로그인" /> */}
                        <div className='btn_component'>
                            <Button fullWidth variant="outlined" size='large'>로그인</Button>
                        </div>
                        <div className='footer_component'>
                            <Link to='/register/submit' className='footer_link'>
                                회원가입
                            </Link>
                            <br/>
                            <Link to='/login/findPW' className='footer_link'>
                                비밀번호 찾기
                            </Link>
                        </div>
                        {/* <div className='separator'></div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Order;