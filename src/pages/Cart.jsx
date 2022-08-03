import React from 'react'
import './All.css'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { addCount, minusCount, delItem, allDelItem,total } from './store';
import { useEffect } from 'react';

export default function Cart() {

  let state = useSelector((state) => {return state})
  let dispatch = useDispatch()
  useEffect(()=>{
    dispatch(total());
  },[state.cart.list]);
  return (
    <>
      <section className='cart__sec'>
        <h3>장바구니</h3>
        <div className='inner'>
          <div className='cart__product__container'>
            {
              state.cart.list.map((value, index)=>{
                return(
                  <div className='cart__product' key={state.cart.list[index].value}>
                    <img src={state.cart.list[index].img} alt="product" />
                    <div className='cart__product__info'>
                      <p className='cart__product__title'>{state.cart.list[index].title}</p>
                      <p className='cart__product__price'>{state.cart.list[index].priceT}</p>
                    </div>
                    <div className='cart__product__text'>
                      <p>{state.cart.list[index].count}</p>
                      <div className='updown'>
                        <button onClick={()=>{
                          dispatch(addCount(state.cart.list[index].id),
                          dispatch(total()))
                        }}>+</button>
                        <button  onClick={()=>{
                          dispatch(minusCount(state.cart.list[index].id))
                        }}>-</button>
                      </div>
                      <p>{state.cart.list[index].price}</p>
                      <button onClick={()=>{
                          if(window.confirm('정말 삭제하시겠습니까?')){
                            dispatch(delItem(state.cart.list[index].id))
                          }else{
                            alert('삭제가 취소되었습니다.')
                          }
                        }}>삭제</button>
                    </div>
                </div>
                )
              })
            }
            {/* <div className='cart__product'>
              
              <img src="./images/product_1.jpg" alt="product" />
              <div className='cart__product__info'>
                <p className='cart__product__title'>론디</p>
                <p className='cart__product__price'>249,000원</p>
              </div>
              <div className='cart__product__text'>
                <p>개수 : 1</p>
                <div className='updown'><button>+</button><button>-</button></div>
                <p>가격 : 249,000원</p>
                <button>삭제</button>
              </div>
            </div> */}
          </div>
          <div className='total__area'>
            <h3>예상 결제 금액</h3>
            <div className='total'>
              <div><span>총 개수 : {state.cart.totalCount}</span> <span></span></div>
              <div><span>총합 : {state.cart.totalPrice}</span><span></span></div>
              <button className='buyBtn'>구매하기</button>
              <button onClick={()=>{
                  dispatch(allDelItem())
                }}>전체삭제</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
