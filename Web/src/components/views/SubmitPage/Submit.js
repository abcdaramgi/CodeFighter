import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './Submit.css'

function Submit() {
    return (
        <>
            <div className='layout'>
                    <div className='container'>
                        <div className='component'>
                            <div className='hello'>이메일로 회원가입</div>
                            <TextField fullWidth id="outlined-basic" label="이메일 주소" variant="outlined" margin='normal'/>
                            <TextField fullWidth id="outlined-basic" label="비밀번호" variant="outlined" margin='dense'/>
                            {/* <TextField fullWidth id="outlined-basic" label="닉네임" variant="outlined" margin='normal'/> */}
                            <div className='btn_component'>
                                <Link to='/register/submit/agree' className='btn_link'>
                                    <Button fullWidth variant="outlined" size='large'>
                                        가입하기
                                    </Button>
                                </Link>
                            </div>
                            <div className='footer_component'>
                                {/* <Link to='/login/submit' className='footer_link'>
                                    회원가입
                                </Link> */}
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
    );
}

export default Submit;