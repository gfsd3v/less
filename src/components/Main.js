import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    const close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: `flex` } : { display: `none` }}
      >
        <article
          id="sobre"
          className={`${this.props.article === `sobre` ? `active` : ``} ${
            this.props.articleTimeout ? `timeout` : ``
          }`}
          style={{ display: `none` }}
        >
          <h2 className="major">Sobre</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            <b>Noline</b> é um app que chegou para acabar com aquela fila chata
            no restaurante e no supermercado funcionando como uma "comanda"
            online e forma de pagamento.
          </p>
          <p>
            Com <b>Noline</b> todos as suas compras em um estabelecimento
            parceiro são adicionadas diretamente para o nosso app, onde você
            pode acompanhar a lista dos produtos comprados, seus valores e ao
            realizar o pagamento diretamento no app é gerado um QRCode que é
            validado na sua saida, evitando assim toda aquela chatice das filas.
          </p>
          {close}
        </article>

        <article
          id="vantages"
          className={`${this.props.article === `vantagens` ? `active` : ``} ${
            this.props.articleTimeout ? `timeout` : ``
          }`}
          style={{ display: `none` }}
        >
          <h2 className="major">Vantagens</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p>
          {close}
        </article>

        <article
          id="contato"
          className={`${this.props.article === `contato` ? `active` : ``} ${
            this.props.articleTimeout ? `timeout` : ``
          }`}
          style={{ display: `none` }}
        >
          <h2 className="major">Contato</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" />
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a href="#" className="icon fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>

        <article
          id="login"
          className={`${this.props.article === `login` ? `active` : ``} ${
            this.props.articleTimeout ? `timeout` : ``
          }`}
          style={{ display: `none` }}
        >
          <h2 className="major">Login</h2>
          <form method="post" action="#">
            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Senha</label>
              <input type="password" name="password" id="password" />
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Entrar" className="special" />
              </li>
              <li>
                <a
                  href="javascript:;"
                  onClick={() => {
                    this.props.goToArticle(`register`)
                  }}
                >
                  <i>Não tem uma conta ?</i>
                </a>
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a href="#" className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>

        <article
          id="register"
          className={`${this.props.article === `register` ? `active` : ``} ${
            this.props.articleTimeout ? `timeout` : ``
          }`}
          style={{ display: `none` }}
        >
          <h2 className="major">Registrar</h2>
          <form method="post" action="#">
            <div className="field">
              <label htmlFor="name">Nome</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Senha</label>
              <input type="password" name="password" id="password" />
            </div>
            <div className="field">
              <label htmlFor="message">Confirmar Senha</label>
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
              />
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Registrar" className="special" />
              </li>
              <li>
                <a
                  href="javascript:;"
                  onClick={() => {
                    this.props.goToArticle(`login`)
                  }}
                >
                  <i>Já tem uma conta ?</i>
                </a>
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a href="#" className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  goToArticle: PropTypes.func,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
