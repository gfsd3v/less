import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { EndPoint } from './Config'

const Login = ({ ...props }) => {
  const [loginEmail, setloginEmail] = useState(``)
  const [loginPass, setloginPass] = useState(``)
  const [error, setError] = useState(false)
  const axios = require(`axios`)

  const handleLoginChange = event => {
    setloginEmail(event.target.value)
  }

  const handlePassChange = event => {
    setloginPass(event.target.value)
  }

  async function handleLoginSubmit(event) {
    event.preventDefault()
    props.goToArticle(`loader`)
    try {
      const response = await axios.post(
        `${EndPoint}/login/${loginEmail}/${loginPass}`
      )
      if (response.return === 1) {
        props.goToArticle(`user-panel`)
      } else {
        setError(true)
        props.goToArticle(`login`)
      }
    } catch (error) {
      props.goToArticle(`user-panel`)
      console.error(error)
    }
  }

  return (
    <Fragment>
      <h2 className="major">Login</h2>
      <form method="post" onSubmit={handleLoginSubmit}>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            value={loginEmail}
            onChange={handleLoginChange}
            type="text"
            name="email"
          />
        </div>
        <div className="field">
          <label htmlFor="message">Senha</label>
          <input
            value={loginPass}
            onChange={handlePassChange}
            type="password"
            name="password"
          />
        </div>
        <ul
          className="actions"
          style={{
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
          }}
        >
          <li
            style={{
              padding: 0,
            }}
          >
            <input type="submit" value="Entrar" className="special" />
          </li>
          <li>
            <a
              href="javascript:;"
              onClick={() => {
                props.goToArticle(`register`)
              }}
            >
              <i>Não tem uma conta ?</i>
            </a>
          </li>
        </ul>
      </form>
      <ul
        style={{
          display: `flex`,
          justifyContent: `center`,
          alignItems: `center`,
        }}
        className="icons"
      >
        <li>
          <a href="#" className="icon fa-github">
            <span className="label">GitHub</span>
          </a>
        </li>
      </ul>
    </Fragment>
  )
}

Login.propTypes = {
  goToArticle: PropTypes.func,
}

export default Login
