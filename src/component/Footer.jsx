import React from 'react'
import { IoLogoFacebook,IoLogoInstagram,IoLogoYoutube,IoLogoTwitter } from "react-icons/io"

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='inner'>
        <div className='footer__top'>
          <div>
            <p>고객서비스</p>
            <ul className='customer'>
              <li>문의</li>
              <li>배송</li>
              <li>교환 및 반품</li>
              <li>주문조회</li>
              <li>수리서비스 가이드</li>
              <li>제품사용 가이드</li>
              <li>제품 등록</li>
            </ul>
          </div>
          <div>
            <p>법적고지</p>
            <ul>
              <li>이용약관</li>
              <li>개인정보처리방침</li>
              <li>쿠키정책</li>
              <li>기프트카드 이용약관</li>
            </ul>
          </div>
          <div>
            <p>채용안내</p>
            <ul>
              <li>채용소개</li>
              <li>채용지원</li>
              <li>채용문의</li>
            </ul>
          </div>
          <div>
            <p>※본 웹사이트는 포트폴리오용으로 상업적목적이 없습니다.</p>
          </div>
        </div>
        <div className='footer__bottom'>
          <div>
            <span className='logo'>©GENTLE MONSTER</span>
          </div>
          <div>
            <p>
              주) 아이아이컴바인드 | 대표자명: 김한국 | 사업자번호: 119-86-38589 | 통신판매신고번호: 제 2014-서울마포-1050 호 (사업자 정보 확인) |<br/>
              이메일 문의: cs@gentlemonster.com | 개인정보보호책임자: 정태호 | 주소: 서울특별시 마포구 어울마당로5길 41 | 대표번호: 1600-2126  <br/>
              고객님의 안전한 현금자산 거래를 위하여 하나은행과 채무지급보증계약을 체결하여 보장해드리고 있습니다. 서비스 가입사실 확인
            </p>
          </div>
          <div className='footer__icon-area'>
            <IoLogoFacebook className='footer__icon'></IoLogoFacebook>
            <IoLogoInstagram  className='footer__icon'></IoLogoInstagram>
            <IoLogoYoutube  className='footer__icon'></IoLogoYoutube>
            <IoLogoTwitter  className='footer__icon'></IoLogoTwitter>
          </div>
        </div>
      </div>
    </footer>
  )
}
