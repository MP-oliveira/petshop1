import React from 'react'
import './assets/css/base/base.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './paginas/Home'
import Sobre from './paginas/Sobre'
import Pagina404 from './paginas/Pagina404'
import Cabecalho from './components/Cabecalho'


function App() {
  return (
  <>
    <Router>
      <Cabecalho/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/sobre"  component={Sobre}/>
        <Route component={Pagina404}/>
      </Switch>
    </Router>
  </>
  )
}

export default App
