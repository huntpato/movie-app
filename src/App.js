import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ListContainer from './components/ListContainer/ListContainer';

import Login from "./components/Login/Login";
import Results from './components/Results/Results';


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/list' element={<ListContainer/>}/>
        <Route path='/detail' element={<ItemDetailContainer/>}/>
        <Route path='/results' element={<Results/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
