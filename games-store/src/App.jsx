
import './App.css';

import NavBar from './components/NAVBAR/NavBar';
import Input from './components/Input/input';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  // const extraerValor = (valorDelInput) => {
  //   return console.log(valorDelInput);
  // }

  return (
    <div className="App">
      <NavBar />
      {/* <Input handleExtraer={extraerValor}/> */}
      <ItemListContainer greeting='Bienvenidos'/>
    </div>
  );
}

export default App;
