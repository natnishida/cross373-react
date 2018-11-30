import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Home from './paginas/Home/Home'
import Navbar from './components/Navbar/Navbar'


import './index.css'


function App() {
  return (
    <div className="app">
        <Navbar/>
        <Switch>
            <Route path="/" exact component={Home} />
        </Switch>

    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.getElementById('projeto')
)
