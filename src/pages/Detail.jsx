import React from 'react'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";
import './Detail.css'
import { useDispatch } from 'react-redux'
import { addItem } from './store'

const BuyButton = styled.button`
  width: 398px;
  height: 50px;
  line-height: 50px;
  border: 1px solid #666;
  background-color: ${(props)=>(props.best? '#333':'#f7f7f7')};
  color: ${(props)=>(props.best? '#fff':'#000')};
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  font-size: 12px;
  transition: all 0.2s;
  &:hover{  
    background-color : #fff;
    color : #000
  }
`

export default function Detail() {
  const navigate = useNavigate();
  let dispatch = useDispatch();

  function toggle1(){
    const toggles = document.querySelectorAll('.toggle')
    const toggle1 = document.querySelector('.toggle1')
    toggles.forEach((toggle)=>{
      if(toggle.classList.contains('on')){
        toggle.classList.remove('on');
      }
      toggle1.classList.add('on')
    })
  }
  function toggle2(){
    const toggles = document.querySelectorAll('.toggle')
    const toggle2 = document.querySelector('.toggle2')
    toggles.forEach((toggle)=>{
      if(toggle.classList.contains('on')){
        toggle.classList.remove('on');
      }
      toggle2.classList.add('on')

    })
  } 
  function toggle3(){
    const toggles = document.querySelectorAll('.toggle')
    const toggle3 = document.querySelector('.toggle3')
    toggles.forEach((toggle)=>{
      if(toggle.classList.contains('on')){
        toggle.classList.remove('on');
      }

      toggle3.classList.add('on')
    })
  }  
  function toggle4(){
    const toggles = document.querySelectorAll('.toggle')
    const toggle4 = document.querySelector('.toggle4')
    toggles.forEach((toggle)=>{
      if(toggle.classList.contains('on')){
        toggle.classList.remove('on');
      }

      toggle4.classList.add('on')
    })
  }  
  function toggle5(){
    const toggles = document.querySelectorAll('.toggle')
    const toggle5 = document.querySelector('.toggle5')
    toggles.forEach((toggle)=>{
      if(toggle.classList.contains('on')){
        toggle.classList.remove('on');
      }
      toggle5.classList.add('on')
    })
  }
  return (
    <>
      <section className='detail_sec'>
        <div className="inner">
          <div className='root'>
            <div onClick={()=>{navigate('/')}}>Home</div>
            <div onClick={()=>{navigate('/all')}}>전체보기</div>
            <div>론디</div>
          </div>
          <div className='product_detail'>
            <div className="img-area">
              <img src="./images/black_1.jpg" alt="black"/>
              <img src="./images/black_2.jpg" alt="black"/>
              <img src="./images/black_3.jpg" alt="black"/>
              <img src="./images/black_4.jpg" alt="black"/>
              <img src="./images/black_5.jpg" alt="black"/>
            </div>
            <div className="text-area">
              <div className='name'>
                <p className='title'>론디</p>
                <p className='price'>259,000원</p>
              </div>
              <p className='color-text'>other color +</p>
              <div className='other-color'>
                <img src="./images/londi_1.jpg" alt="black"/>
                <img src="./images/londi_2.jpg" alt="black"/>
                <img src="./images/londi_3.jpg" alt="black"/>
                <img src="./images/londi_4.jpg" alt="black"/>
                <img src="./images/londi_5.jpg" alt="black"/>
              </div>
              <p className='info'>
                론디 01은 사각 형태의 블랙 플랫바 선글라스입니다. <br/>
                라운딩 처리된 프런트가 부드러운 분위기를 연출합니다.<br/>
                슬림한 프런트와 템플의 실버 메탈 장식 디테일이 매력적인 제품입니다.<br/>
                99.9% UV 차단이 되는 블랙 자이스 렌즈를 사용하였습니다.<br/>
              </p>
              
              <div className="button-area">
                <p>무료배송 및 무료 반품 서비스, 무이자 할부 서비스</p>
                <BuyButton best='true'>구매하기</BuyButton>
                <BuyButton onClick={()=>{
                  if(window.confirm('장바구니에 추가 되었습니다. 장바구니로 바로 이동하시겠습니까?')){
                    navigate('/cart');
                  }
                  dispatch(addItem({id:'product_circle_tint_01', title:'랭', count:1, price:249000, img:'./images/product_1.jpg', priceT:'249,000'}))
                }}>장바구니</BuyButton>
                <BuyButton>위시리스트</BuyButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='sns_sec'>
        <div className="inner">
          <div className='sns'>
            <p>더 다양한 론디 01 제품의 스타일을 확인해보세요.</p>
            <p>인스타그램에 @gentlemonster을 태그하여 당신의 스타일을 공유해보세요.</p>
            <div className='sns-img'>
              <div><img src="./images/sns_1.jpg" alt="sns" /><p>@gentlemonster</p></div>
              <div><img src="./images/sns_2.jpg" alt="sns" /><p>@gentlemonster</p></div>
              <div><img src="./images/sns_3.jpg" alt="sns" /><p>@gentlemonster</p></div>
            </div>
          </div>
          <div className="buy_info">
            <div className="toggle toggle1 on" onClick={toggle1}>
              <ul>
                <p>제품 세부 정보</p>
                <li>스퀘어 아세테이트 프레임.</li>
                <li>템플 메탈 장식 디테일</li>
                <li>프레임 정면: 151.1mm, 템플 길이: 145.6mm, 렌즈 가로: 65.1mm, 렌즈 높이: 46.9mm 브릿지: 18mm</li>
                <li>제조국: 중국</li>
                <li>제조자 및 수입자: IICOMBINED CO.,LTD.</li>
              </ul>
            </div>
            <div className="toggle toggle2" onClick={toggle2}>
              <ul>
                <p>무료 선물 포장 서비스</p>
                <li>젠틀몬스터 공식 온라인 스토어에서 구매하는 모든 분들께 선물 포장 서비스를 제공해 드립니다.</li>
              </ul> 
            </div>
            <div className="toggle toggle3" onClick={toggle3}>
              <ul>
                <p>기본 피팅 서비스</p>
                <li>온라인에서 주문하시는 젠틀몬스터의 모든 제품은 기본 피팅 후 발송됩니다.</li>
              </ul>
            </div>
            <div className="toggle toggle4" onClick={toggle4}>
              <ul>
                <p>배송 & 반품</p>
                <li>무료 배송 - 오늘 주문한 상품을 영업일 기준 1-3일내에 받아보세요</li>
                <li>무료 반품 - 무료 반품 서비스를 이용하세요. 구매하신 제품은 수령하신 날로부터 7일 이내에 접수해 주셔야 합니다. 제품은 사용되지 않은 상태를 유지해야 하며, 모든 구성품을 포함하고 있어야 합니다. </li>
              </ul>
            </div>
            <div className="toggle toggle5"  onClick={toggle5}>
              <ul>
                <p>도움이 필요하신가요?</p>
                <p>전문 어드바이저가 도와드리겠습니다.</p>
                <li>라이브챗: 문의하기</li>
                <li>전화 문의: 전화하기 1600-2126</li>
                <li>이메일 문의: 문의하기</li>
                <p>* 라이브챗, 고객센터 운영 시간</p>
                <p>월요일-금요일, 09:30-17:00(공휴일 제외)</p>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='recommend_sec'>
      <div className="inner">
          <div className='recommend'>
            <p>더 다양한 론디 01 제품의 스타일을 확인해보세요.</p>
            <p>인스타그램에 @gentlemonster을 태그하여 당신의 스타일을 공유해보세요.</p>
            <div className='recommend-img'>
              <div><img src="./images/recommend_1.jpg" alt="sns" /><p>랭</p></div>
              <div><img src="./images/recommend_2.jpg" alt="sns" /><p>릴리트</p></div>
              <div><img src="./images/recommend_3.jpg" alt="sns" /><p>로셀</p></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
