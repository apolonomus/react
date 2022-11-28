import logo from './logo.svg';
import './App.css';
import Navbar from './componets/Navbar/Navbar';
import {useState} from 'react'
import Counter from './componets/Counter/Counter'
import ItemListContainer from './componets/ItemListContainer/ItemListContainer'


function App() {
  
  const [show, setShow] = useState(true)

  const handleOnAdd = (quantity) => {
    console.log('Se Agrega al carrito ' + quantity )
  }
  
  return (
    <div className="App">
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <ItemListContainer greetings='Saludo de Bienvenida' />
      <h2>Contador de Click</h2>
      <Counter initial={0} stock={15} onAdd={handleOnAdd}/>

    </div>
    
  );
}

export default App;
