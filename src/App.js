/*eslint-disable*/  //노란줄을 없애줌
import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './pages/Main';
import All from './pages/All';
import Best from './pages/Best';
import Classic from './pages/Classic';
import Tint from './pages/Tint';
import Cateye from './pages/Cateye';
import Square from './pages/Square';
import Circle from './pages/Circle';
import Collabo from './pages/Collabo';
import Detail from './pages/Detail';
import Cart from './pages/Cart';

function App() {

  return (
    <div className="App">
      <Header/>

        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/all' element={<All/>}>
          </Route>
          <Route path='/best' element={<Best/>}>
          </Route>
          <Route path='/classic' element={<Classic/>}>
          </Route>
          <Route path='/tint' element={<Tint/>}>
          </Route>
          <Route path='/cateye' element={<Cateye/>}>
          </Route>
          <Route path='/square' element={<Square/>}>
          </Route>
          <Route path='/circle' element={<Circle/>}>
          </Route>
          <Route path='/collabo' element={<Collabo/>}>
          </Route>
          <Route path='/detail' element={<Detail/>}>
          </Route>
          <Route path='/cart' element={<Cart/>}>
          </Route>
        </Routes>

      <Footer/>
    </div> 
  );
}

export default App;
