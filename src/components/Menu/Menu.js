import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.css'

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      aberto: false
    }
  }
  abreOuFechaMenu = () => {

      if (this.state.aberto) {
        this.setState({ aberto: false })
      } else {
        this.setState({ aberto: true })
      }
  }

  render() {
    let classesDoBotao = "navbar-menu__botao"
    let classesDasOpcoes = "navbar-menu__opcoes"

    if (this.state.aberto) {
      // coloco na variavel a classe que fica independente de aberto ou fechado mais a classe quando fica aberto
      classesDoBotao += " navbar-menu__botao--aberto"
      classesDasOpcoes += " navbar-menu__opcoes--aberto"
    }


  return (
    <nav onClick={this.abreOuFechaMenu} className="navbar-menu">
      <a className={classesDoBotao}>
        Menu
      </a>

        <ul className={classesDasOpcoes}>
          <h2 className="navbar-menu__titulo" onClick={this.abreOuFechaMenu}>Cross 373</h2>
          <br/>
            <li><NavLink to="/quem-somos" onClick={this.abreOuFechaMenu} activeClassName="navbar-menu__opcoes--ativo">Sobre a Cross 373</NavLink></li>
            <li><NavLink to="/login" onClick={this.abreOuFechaMenu} activeClassName="navbar-menu__opcoes--ativo">Horários</NavLink></li>
            <li><NavLink to="/contato" onClick={this.abreOuFechaMenu} activeClassName="navbar-menu__opcoes--ativo">Contato</NavLink></li>

        </ul>

    </nav>
  )
}
}

export default Menu
