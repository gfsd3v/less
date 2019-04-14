import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import '../assets/scss/components/_userpanel.scss'

const UserPanel = ({ ...props }) => {
  const [sideCollapse, setSideCollapse] = useState(``)
  const [contentFull, setContentFull] = useState(``)
  const axios = require(`axios`)

  const toggleTeste = () => {
    if (!sideCollapse && !contentFull) {
      setSideCollapse(`is-collapsed`)
      setContentFull(`is-full-width`)
    } else {
      setSideCollapse(``)
      setContentFull(``)
    }
  }

  return (
    <Fragment>
      <div className="user-container">
        <aside className={`user-sidebar ${sideCollapse}`}>
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
        </aside>
        <section className={`user-content ${contentFull}`}>
          <h2 className="major">Compras</h2>
          <button onClick={toggleTeste}>Toggle</button>
        </section>
      </div>
    </Fragment>
  )
}

UserPanel.propTypes = {
  goToArticle: PropTypes.func,
}

export default UserPanel
