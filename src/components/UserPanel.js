import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import '../assets/scss/components/_userpanel.scss'
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from '@trendmicro/react-sidenav'
import '@trendmicro/react-sidenav/dist/react-sidenav.css'
import Avatar from 'react-avatar'

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
        <SideNav
          style={{ position: `inherit`, background: `transparent` }}
          onSelect={selected => {
            // Colocar aqui o que vai rolar;
          }}
        >
          <SideNav.Toggle />
          <SideNav.Nav style={{ marginTop: `1.5rem` }} defaultSelected="home">
            <NavItem eventKey="profile">
              <NavIcon>
                <Avatar
                  size="40"
                  round
                  src="https://i.pinimg.com/originals/4c/24/7f/4c247f881c6fbfeaafca95818b4d7a73.jpg"
                />
              </NavIcon>
              <NavText>
                <h4>Perfil</h4>
              </NavText>
            </NavItem>
            <NavItem eventKey="home">
              <NavIcon>
                <i
                  className="fa fa-fw fa-home"
                  style={{ color: `white`, fontSize: `1.75em` }}
                />
              </NavIcon>
              <NavText>
                <h4>home</h4>
              </NavText>
            </NavItem>
            <NavItem eventKey="buy">
              <NavIcon>
                <i
                  className="fa fa-fw fa-shopping-cart"
                  style={{ color: `white`, fontSize: `1.75em` }}
                />
              </NavIcon>
              <NavText>
                <h4>Comprar</h4>
              </NavText>
            </NavItem>
            <NavItem eventKey="history">
              <NavIcon>
                <i
                  className="fa fa-fw fa-history"
                  style={{ color: `white`, fontSize: `1.75em` }}
                />
              </NavIcon>
              <NavText>
                <h4>Historico</h4>
              </NavText>
            </NavItem>
            <NavItem eventKey="Sair">
              <NavIcon>
                <i
                  className="fa fa-fw fa-power-off"
                  style={{ color: `white`, fontSize: `1.75em` }}
                />
              </NavIcon>
              <NavText>
                <h4>Sair</h4>
              </NavText>
            </NavItem>
          </SideNav.Nav>
        </SideNav>
        <section className={`user-content ${contentFull}`}>
          <h2 className="major">Compras</h2>
        </section>
      </div>
    </Fragment>
  )
}

UserPanel.propTypes = {
  goToArticle: PropTypes.func,
}

export default UserPanel
