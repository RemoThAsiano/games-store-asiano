
import './App.css';
// import axios from 'axios';
import NavBar from './components/NAVBAR/NavBar';
// import Input from './components/Input/input';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
// // import Counter from './components/COUNTER/Counter';
// import ItemDetail from './components/ItemDetail/ItemDetail';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import { Route, Routes } from 'react-router-dom';

function App() {

  // const extraerValor = (valorDelInput) => {
  //   return console.log(valorDelInput);
  // }

  return (
    <div className="App">
      <NavBar />
      <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer />}/>
      </Routes>
      {/* <Input handleExtraer={extraerValor}/> */}
      
    </div>
  );
}

export default App;
