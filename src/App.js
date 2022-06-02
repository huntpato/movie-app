import { Routes, Route } from 'react-router-dom';
import ListContainer from './components/ListContainer/ListContainer';
import Login from "./components/Login/Login";


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/list' element={<ListContainer/>}/>
      </Routes>
    </>
  );
}

export default App;
