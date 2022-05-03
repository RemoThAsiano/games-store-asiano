
import './App.css';
// import axios from 'axios';
import NavBar from './components/NAVBAR/NavBar';
// import Input from './components/Input/input';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// // import Counter from './components/COUNTER/Counter';
// import ItemDetail from './components/ItemDetail/ItemDetail';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  // const extraerValor = (valorDelInput) => {
  //   return console.log(valorDelInput);
  // }

  return (
    <div className="App">
      <NavBar />
      {/* <Input handleExtraer={extraerValor}/> */}
      {/* <ItemListContainer greeting='Bienvenidos'/> */}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
