import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import './All.css'
import { tint } from '../component/data'
import { BsSuitHeart, BsBag } from "react-icons/bs";

export default function Tint() {
  const navigate = useNavigate()

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
            tint.map((value,index)=>{
              return(
                <div className='product' key={value.id}>
                  <Link to="/detail" target='_blank'>
                    <img src={`./images/product_${index+1}.jpg`} alt="product" />
                  </Link>
                  <div className='heart'>
                    <BsBag></BsBag>
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
      </div>
    </section>
  )
}
