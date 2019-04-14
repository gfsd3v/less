import React from 'react'
import PropTypes from 'prop-types'
import { RotateSpinLoader } from 'react-css-loaders'
import Login from './Login'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import UserPanel from './UserPanel'

const Main = ({ ...props }) => {
  const close = (
    <div
      className="close"
      onClick={() => {
        props.onCloseArticle()
      }}
    />
  )

  return (
    <div
      ref={props.setWrapperRef}
      id="main"
      style={
        props.timeout ? { display: `flex`, width: `100%` } : { display: `none` }
      }
    >
      <article
        id="sobre"
        className={`${props.article === `sobre` ? `active` : ``} ${
          props.articleTimeout ? `timeout` : ``
        }`}
        style={{ display: `none` }}
      >
        <h2 className="major">Sobre</h2>
        <span className="image main">
          <img src={pic01} alt="" />
        </span>
        <p>
          <b>Noline</b> é um app que chegou para acabar com aquela fila chata no
          restaurante e no supermercado funcionando como uma "comanda" online e
          forma de pagamento.
        </p>
        <p>
          Com <b>Noline</b> todos as suas compras em um estabelecimento parceiro
          são adicionadas diretamente para o nosso app, onde você pode
          acompanhar a lista dos produtos comprados, seus valores e ao realizar
          o pagamento diretamento no app é gerado um QRCode que é validado na
          sua saida, evitando assim toda aquela chatice das filas.
        </p>
        {close}
      </article>

      <article
        id="vantages"
        className={`${props.article === `vantagens` ? `active` : ``} ${
          props.articleTimeout ? `timeout` : ``
        }`}
        style={{ display: `none` }}
      >
        <h2 className="major">Vantagens</h2>
        <span className="image main">
          <img src={pic02} alt="" />
        </span>
        <p>
          Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at
          eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna
          nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin
          mauris nec lorem luctus ultrices.
        </p>
        <p>
          Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
          libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
          Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas
          laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et
          orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris
          aliquet magna magna sed nunc rhoncus amet feugiat tempus.
        </p>
        {close}
      </article>

      <article
        id="contato"
        className={`${props.article === `contato` ? `active` : ``} ${
          props.articleTimeout ? `timeout` : ``
        }`}
        style={{ display: `none` }}
      >
        <h2 className="major">Contato</h2>
        <form method="post" action="#">
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" />
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
        className={`${props.article === `login` ? `active` : ``} ${
          props.articleTimeout ? `timeout` : ``
        }`}
        style={{ display: `none` }}
      >
        <Login goToArticle={props.goToArticle} />
        {close}
      </article>

      <article
        id="register"
        className={`${props.article === `register` ? `active` : ``} ${
          props.articleTimeout ? `timeout` : ``
        }`}
        style={{ display: `none` }}
      >
        <h2 className="major">Registrar</h2>
        <form method="post" action="#">
          <div className="field">
            <label htmlFor="name">Nome</label>
            <input type="text" name="name" />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Senha</label>
            <input type="password" name="password" />
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
                  props.goToArticle(`login`)
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

      <article
        id="loader"
        className={`${props.article === `loader` ? `active` : ``} ${
          props.articleTimeout ? `timeout` : ``
        }`}
        style={{ display: `none`, padding: `1.5rem` }}
      >
        <div className="loader-wrapper">
          <RotateSpinLoader color="#ffffff" size={1} />
        </div>
      </article>

      <article
        id="user-panel"
        className={`${props.article === `user-panel` ? `active` : ``} ${
          props.articleTimeout ? `timeout` : ``
        }`}
        style={{
          display: `none`,
        }}
      >
        <UserPanel goToArticle={props.goToArticle} />
      </article>
    </div>
  )
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
