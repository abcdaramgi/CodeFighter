import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function SubmitAgree() {
    return (
        <>
            <div className='layout'> 
                    <div className='container'>
                        <div className='component'>
                            <div className='hello'>약관동의할깝쇼?</div>
                            <div>전체 동의하기</div>
                            <div>어쩌고 동의</div>
                            <div>저쩌고 동의</div>
                            <div>이쩌고 동의</div>
                            <div className='btn_component'>
                                <Link to='/register/submit/signup' className='btn_link'>
                                    <Button fullWidth variant="outlined" size='large'>
                                        동의하기
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

export default SubmitAgree;