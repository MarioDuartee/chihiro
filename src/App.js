import Header from "./components/Header";
import Main from "./components/Main";
import Trailer from "./components/Trailer";
import { useState } from 'react';



function App() {
  const [count, setCount] = useState('none')

  var fuiAtivado = 'none'
  return (
    <div className="App">
    <Header/>
    <Main mudarEstado={setCount}/>
    <Trailer ativacao={count} />
    </div>
  )
  }
export default App
