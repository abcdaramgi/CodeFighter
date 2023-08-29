import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function SubmitSignUp() {
    return (
        <>
            <div className='layout'> 
                    <div className='container'>
                        <div className='component'>
                            <div className='hello'>약관동의할깝쇼?</div>
                            <TextField fullWidth id="outlined-basic" label="닉네임" variant="outlined" margin='normal'/>
                            <TextField fullWidth id="outlined-basic" label="진짜네임" variant="outlined" margin='dense'/>
                            <div className='btn_component'>
                                <Link to='/' className='btn_link'>
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
                        </div>
                    </div>
                </div>
        </>
    );
}

export default SubmitSignUp;