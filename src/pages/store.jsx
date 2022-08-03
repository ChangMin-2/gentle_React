import { configureStore, createSlice } from "@reduxjs/toolkit";

let cart = createSlice({
  name: 'cart',
  initialState : {
    list : [],       //추가되는 배열
    totalCount:0,    // 총합 개수를 돌려주기 위한 변수
    totalPrice:0,    // 총합 가격을 돌려주기 위한 변수
  },

  // setfunction 나열
  reducers : {
    // Cart 에서 +버튼 클릭시 상품이 추가 되는 함수
    addCount(state, action){
      let number = state.list.findIndex((findId) => {return findId.id === action.payload})
      state.list[number].count++
    },
     // Cart 에서 -버튼 클릭시 상품이 제거 되는 함수
    minusCount(state, action){
      let number = state.list.findIndex((findId)=> {return findId.id === action.payload})
      // 1이하로는 떨어지지 않도록
      if(state.list[number].count > 1) state.list[number].count--
    },
    //다른 페이지에서 상품을 담는 함수
    addItem(state, action){
      //list배열중 해당하는 위치를 찾는다.
      let number = state.list.findIndex((findId)=> {return findId.id === action.payload.id})
      // 같은 상품이 있을 경우 개수만 추가
      if(number !== -1){
        state.list[number].count++
      }else{
        state.list.push(action.payload)
      }
    },
    // 상품 삭제
    delItem(state, action){
      let number = state.list.findIndex((findId)=> {return findId.id === action.payload})
      state.list.splice(number,1);
    },
    // 상품 전체 삭제 리스트를 지워버림
    allDelItem(state, action){
      state.list = []
    },
    // 추가된 상품의 개수와 가격의 총합
    total (state, action){
      let itemtotalCount = state.list.map(el=>el.count).reduce((acc, accitem)=>{
        return acc += accitem
      },0)
      let itemtotalPrice = state.list.map(el=>el.count * el.price).reduce((acc, accitem)=>{
        return acc += accitem
      },0)
      state.totalCount = itemtotalCount
      state.totalPrice = itemtotalPrice
    },
  }
})

export let {addCount,  minusCount, addItem, delItem, allDelItem, total } = cart.actions

export default configureStore({ 
  reducer : {
    cart: cart.reducer
  }
})
