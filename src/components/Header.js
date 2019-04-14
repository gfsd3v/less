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
          <br />e acabar com as filas de pagamento
        </p>
      </div>
    </div>
    <nav>
      <ul>
        {/*         <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle(`sobre`)
            }}
          >
            Sobre
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle(`vantagens`)
            }}
          >
            Vantagens
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle(`contato`)
            }}
          >
            Contato
          </a>
        </li> */}
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle(`login`)
            }}
          >
            Entrar / Registrar
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
