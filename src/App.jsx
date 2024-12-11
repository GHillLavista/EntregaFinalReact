import { useState} from 'react'
import "./App.css";
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from './data/NoPage';
import Checkout from "./components/Checkout";
import { Provider } from './contexts/ItemContexts';




function App() {
  
  const [count, setCount] = useState(0)

  return (
    <div>
      <Provider>
        <BrowserRouter>
          <NavBar />

          <Routes>
        
            <Route path="/" element={<ItemListContainer saludo="Bienvenidos a Sweet & Tasty." />} />

            <Route path="/category/:id" element={<ItemListContainer/>} />

            <Route path="/detail/:id" element={<ItemDetailContainer />} />

            <Route path="/checkout" element={<Checkout count={count} setCount={setCount} />} />
        
            <Route path='*' element= {<NoPage/>}/>

          </Routes>    
        </BrowserRouter>
        </Provider>
    </div>
  )
}


export default App
