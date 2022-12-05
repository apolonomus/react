
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom' //Función de Conexión de la App
import ItemListContainer from './componets/ItemListContainer/ItemListContainer'


import Navbar from './componets/Navbar/Navbar';
import {useState} from 'react'
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer';
import asyncMocks from './asyncMock';
import ItemCount from './componets/ItemCount/ItemCount';


function App() {
  
  const [show, setShow] = useState(true)

  const handleOnAdd = (quantity) => {
    console.log('Se Agrega al carrito ' + quantity )
  }
  
  return (

    <div className="App">
      <BrowserRouter>

      <Navbar />

        {/* AquellaS RUTAS QUE SE VAN A RENDERIZAR */}

        <Routes> 
          <Route path='/' element={ <ItemListContainer/> }/>  
          <Route path='/category/:categoryId' element={ <ItemListContainer/> }/>
          <Route path='/detail/:productId' element={ <ItemDetailContainer/> }/>
        </Routes>

        <ItemListContainer greetings='Saludo de Bienvenida' />
        <h2>Contador de Click</h2>
        <ItemCount initial={0} stock={15} onAdd={handleOnAdd}/>
      </BrowserRouter>

    </div>
    
  );
}

export default App;
