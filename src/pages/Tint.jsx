import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import './All.css'
import { product } from '../component/data'
import { BsSuitHeart, BsBag } from "react-icons/bs";
import { useDispatch } from 'react-redux'
import { addItem } from './store'

export default function Tint() {
  const navigate = useNavigate();
  let dispatch = useDispatch();

  return (
    <section className='all_sec'>

      <div className="inner">
        <div className='top'>
          <div className='root'>
            <div onClick={()=>{navigate('/')}}>Home</div>
            <div>틴트렌즈</div>
          </div>
          <div className='filter'>
            <div>필터</div>
          </div>
        </div>

        <div className='container'>
          {
            product.map((value,index)=>{
              if(value.id.includes('tint')){
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
        </div>
      </div>
    </section>
  )
}
