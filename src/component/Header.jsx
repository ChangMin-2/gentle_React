/*eslint-disable*/  //노란줄을 없애줌
import React, { useState } from 'react'
import './common.css';
// react-icons
import { GrSearch, GrMenu } from "react-icons/gr"
// npm install react-router-dom@6
import { Link, useNavigate } from "react-router-dom";
import { tab } from './data';

export default function Header() {

  const navigate = useNavigate()


  let state = false
  function toggle(){
    const gnb = document.querySelector('.gnb')
    if(state == false){
      gnb.style.display = 'block';
      state = true
    }else if(state == true){
      gnb.style.display = 'none';
      state = false
    }
  }

  return (
    <header className='header'>
      <div className='inner'>
        <div className='logo' onClick={()=>{navigate('/')}}>
          GENTLE MONSTER
        </div>

        <div className='gnb-area'>
          <div className='search-area'>
            <input type="text" placeholder='상품 검색'/>
            <GrSearch className='header__icon'/>      
          </div>
          <div className='gnb__btn' onClick={toggle}>
            <GrMenu className='header__icon menu__btn'/>
          </div>
        </div>

        <div className='gnb'>
          <div className='login'>
            <a className='sign-in' href='#!'>로그인</a>
            <a className='sign-up' href='#!'>회원가입</a>
          </div>
          <a href="#!" onClick={()=>{navigate('/cart')}}>장바구니</a>
          <a href="#!">위시리스트</a>
          <a href="#!">배송확인</a>
        </div>{/*gnb*/}
        
      </div> {/*inner*/}



      <div className='lnb'>
        <div className='inner'>
          {
            tab.map((value, index)=>{
              return(
                <div className='tab' key={value.id} onClick={()=>{navigate(`${value.navigate}`)}}>
                  <img src={`./images/tab_${index+1}.jpg`}></img>
                  <p>{value.title}</p>
                </div>
              )
            })
          }
        </div>
      </div>


    </header>
  )
}
