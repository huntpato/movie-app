import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ListContainer from './components/ListContainer/ListContainer';

import Login from "./components/Login/Login";


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/list' element={<ListContainer/>}/>
        <Route path='/detail' element={<ItemDetailContainer/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
