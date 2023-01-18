import Header from "./components/Header";
import Main from "./components/Main";
import Trailer from "./components/Trailer";
import { useState } from 'react';



function App() {
  const [estilo, setEstilo] = useState('none')

  var fuiAtivado = 'none'
  return (
    <div className="App">
    <Header/>
    <Main mudarEstado={setEstilo}/>
    <Trailer ativacao={estilo} />
    </div>
  )
  }
export default App
