import React from 'react'
import styled from 'styled-components'
import { best, jenny } from '../component/data';
import { BsSuitHeart } from "react-icons/bs";
import './Main.css'

const Button = styled.button`
  width: 230px;
  height: 35px;
  line-height: 35px;
  border: 1px solid #eee;
  background-color: transparent;
  color: #fff;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  font-size: 12px;
`
const Text = styled.div`
  font-weight: bold;
  font-size: 18px;
  color: #fff;
`
const TextSub = styled.div`
  font-size: 14px;
  margin: 10px 0;
  color: #fff;
`
const SecText = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin: 50px 0 20px 0;
`

export default function Main() {
  return (
    <>
      <section className='visual'>
        <div className='inner'>
          <div className='text-area'>
            <Text>GENTLE MONSTER</Text>
            <Text>With</Text>
            <Text>MONCLER</Text>
            <TextSub>
              글로벌 패션 아이웨어 브랜드 젠틀몬스터가<br/>
              몽클레어와 함께 컬렉션을 런칭합니다.
            </TextSub>
            <Button>더보기</Button>
          </div>
        </div>
      </section>

      <section className='best-product'>
        <div className='inner'>  
          <SecText>BEST PRODUCT</SecText>

          <div className='container'>
            <div className='img-area'>
              <img src="./images/best_img.jpg" alt="best_img" />
            </div>
            <div className='product-area'>
              {
                best.map((value, index)=>{
                  return (
                    <div key={value.id} className={value.id}>
                      <img src={`./images/best_${index+1}.jpg`} alt={value.id}/>
                      <div className='heart'>
                        <BsSuitHeart></BsSuitHeart>
                      </div>
                      <div className='text-area'>
                        <div>  
                          <p>{value.title}</p>
                          <p>color+{value.color}</p>
                        </div>
                        <p>{value.price}</p>
                      </div>
                    </div>
                  )
                })
              }
              <p className='best__more'>Best More ></p>
            </div>
          </div>
        </div>
      </section>

      <section className='tint_sec'>
        <div className='inner'>
          <div className='text-area'>
            <Text>GENTLE MONSTER</Text>
            <Text>With</Text>
            <Text>JENNY</Text>
            <TextSub>
              글로벌 패션 아이웨어 브랜드 젠틀몬스터가<br/>
              블랙핑크 제니와 함께 컬렉션을 런칭합니다.
            </TextSub>
            <Button>더보기</Button>
          </div>
        </div>
      </section>

      <section className='jenny'>
        <div className='inner'>
          {
            jenny.map((value, index)=>{
              return (
                <div key={value.id} className={value.id}>
                  <img src={`./images/tint_${index+1}.jpg`} alt={value.id}/>
                  <div className='heart'>
                    <BsSuitHeart></BsSuitHeart>
                  </div>
                  <div className='text-area'>
                    <div>  
                      <p>{value.title}</p>
                      <p>color+{value.color}</p>
                    </div>
                    <p>{value.price}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
    </>
  )
}
