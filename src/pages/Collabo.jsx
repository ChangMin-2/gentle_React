import React from 'react'
import styled from 'styled-components'
import { collabo } from '../component/data'
import './Main.css'

export default function Collabo() {
  return (
    <section className='collabo_sec'>
      <div className='inner'>
        {
          collabo.map((value, index) => {
            return (
              <div key={value.id}>
                <img src={`./images/collabo${index+1}.jpg`} alt="collabo" />
                <div className='text-area'>
                  <p>{value.title}</p>
                  <p>자세히 보기</p>
                </div>
              
              </div>
            )
          })
        }
      </div>
    </section>
  )
}
