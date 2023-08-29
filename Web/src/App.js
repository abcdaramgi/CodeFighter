/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Login from './components/views/LoginPage/Login';
import Submit from './components/views/SubmitPage/Submit';
import SubmitSignup from './components/views/SubmitPage/SubmitSignup';
import SubmitAgree from './components/views/SubmitPage/SubmitAgree';
import Home from './components/views/HomePage/Home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

// return 안에는 병렬로 태그 2개 이상 기입 금지
function App() {

  // let post = '강남 우동 맛집';
  // const [글제목, 글제목변경] = useState(['남자코드 추천', '강남 우동맛집', '파이썬독학']) // ['남자 코트 추천', 함수] 이렇게 된다 변경시 자동으로 렌더링 되기 때문에 자주 바뀌는 것에만 쓰면됨

  // let num = [1, 2];

  // let [a, c] = [1, 2];
  // 이거랑 같은거임 distructuring이라고 한다
  // let a = num[0];
  // let c = num[1];

  // const [따봉, 따봉변경] = useState(0)

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register/submit' element={<Submit />}/>
          <Route path='/register/submit/agree' element={<SubmitAgree />}/>
          <Route path='/register/submit/signup' element={<SubmitSignup />}/>
        </Routes>
      </BrowserRouter>
      /* <button onClick={() => { // state변경함수 특징 기존state==신규state의 경우 변경안해줌
        let copy = [...글제목]; // [array/object특징] 포인터개념임 안에 화살표(주소)만 저장됨
        // ...이라는 문법은 괄호 벗겨주세요
        copy[0] = '여자코트 추천'; // copy를 수정했지만 변수에 있던 주소 수정이 안되었다
        글제목변경(copy); // shallowcopy를 만들어서 해라~ 이거는 그냥 이게 낫다고 생각하고 해라~
      }}>글수정
      </button> */
  );
}

export default App;
