import React from 'react'
import styled from 'styled-components'
import { product } from '../component/data';
import { BsSuitHeart, BsBag } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import './Main.css'
import { useDispatch } from 'react-redux'
import { addItem } from './store'


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
  transition: all 0.2s;
  &:hover{  
    background-color : #fff;
    color : #000
  }
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

  const navigate = useNavigate();
  let dispatch = useDispatch();

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
            <Button onClick={()=>{navigate('/collabo')}}>더보기</Button>
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
                product.map((value, index)=>{
                  if(index<8) {
                    return (
                      <div className={value.id}  key={value.id}>
                        <Link to="/detail" target='_blank'>
                          <img src={`./images/product_${index+1}.jpg`} alt={value.id}/>
                        </Link>
                        <div className='heart'>
                          <BsBag onClick={()=>{
                              if(window.confirm('장바구니에 추가 되었습니다. 장바구니로 바로 이동하시겠습니까?')){
                                navigate('/cart');
                              }
                              dispatch(addItem({id:value.id, title:value.title, count:1, price:value.priceN, img:value.img, priceT:value.price}))
                            }}></BsBag>
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
                  }
                })
              }
              <p className='best__more' onClick={()=>{navigate('/best')}}>Best More ></p>
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
            <Button onClick={()=>{navigate('/collabo')}}>더보기</Button>
          </div>
        </div>
      </section>

      <section className='jenny'>
        <div className='inner'>
          {
            product.map((value,index)=>{
              if(value.id.includes('jenny')){
                return(
                  <div className='product' key={value.id}>
                    <Link to="/detail" target='_blank'>
                      <img src={`./images/product_${index+1}.jpg`} alt="product" />
                    </Link>
                    <div className='heart'>
                      <BsBag onClick={()=>{
                        if(window.confirm('장바구니에 추가 되었습니다. 장바구니로 바로 이동하시겠습니까?')){
                          navigate('/cart');
                        }
                        dispatch(addItem({id:value.id, title:value.title, count:1, price:value.priceN, img:value.img}))
                      }}></BsBag>
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
              }
            })
          }
        </div>
      </section>

      <section className='store'>
        <div className="text-area">
          <Text>가까운 매장을 방문해보세요.</Text>
          <TextSub>매장을 방문하여 젠틀몬스터의 다양한 컬렉션을 만나보세요.</TextSub>
          <Button>매장 찾기</Button>
        </div>
      </section>
    </>
  )
}
