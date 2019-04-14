import React from 'react'
import PropTypes from 'prop-types'
import logo from '../images/logo.png'

const Header = props => (
  <header id="header" style={props.timeout ? { display: `none` } : {}}>
    <div className="logo">
      <img className="logo-img" src={logo} />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Noline</h1>
        <p>
          Ferramenta para fazer pagamentos em estabelecimentos
          <br />e acabar com as filas de pgamento
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle(`intro`)
            }}
          >
            Sobre
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle(`work`)
            }}
          >
            Vantagens
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle(`about`)
            }}
          >
            Contato
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle(`contact`)
            }}
          >
            Entrar/Registrar
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
