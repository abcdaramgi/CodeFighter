import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Submit from '../SubmitPage/Submit';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import './Login.css'

function Login() {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [showSignup, setShowSignup] = useState(false);

    const handleLogin = async () => {
        try{
            const loginData = {
            id: id,
            pw: pw
        };
        
        const response = await axios.post('/spring', loginData);
        const responseData = response.data;
        } catch (error) {
            console.error('로그인 실패', error);
        }
    }

    const handleSignupClick = () => {
        setShowSignup(true); // 회원가입 버튼 클릭 시, showSignup 상태 변경
    };

    useEffect(() => {
       axios.get('/user_inform/login')
       .then(res => console.log(res))
       .catch()
    })

    const handleUserId  = (e) => {
        setId(e.target.value)
    };

    const handleUserPw = (e) => {
        setPw(e.target.value)
    }

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
                            <Button fullWidth variant="outlined" size='large' onClick={handleLogin}>로그인</Button>
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
    );
}

export default Login;