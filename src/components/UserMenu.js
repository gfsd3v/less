import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import '../assets/scss/components/_userpanel.scss'
import { Header, Image, Table } from 'semantic-ui-react'
import Loader from 'react-loader-spinner'

const UserMenu = ({ ...props }) => {
  const [isMenuActive, setIsMenuActive] = useState(false)
  const [isLoading, setisLoading] = useState(true)
  const [menus, setMenus] = useState(false)
  const axios = require(`axios`)

  const handleMenuClick = (menuName, menuId) => {
    setIsMenuActive(menuName)
  }

  async function getMenu() {
    if (isLoading) {
      try {
        const response = await axios.get(`https://lineless.herokuapp.com/menu/`)
        setMenus(response.data)
        setisLoading(false)
      } catch (error) {
        console.error(error)
      }
    }
  }

  if (isLoading) {
    getMenu()
    return (
      <div className="loader-wrapper">
        <Loader type="RevolvingDot" color="#FFFFFF" height="100" width="100" />
      </div>
    )
  }
  return (
    <Fragment>
      <h2 className="major">Cardápios</h2>
      {menus.map(menu => (
        <input
          type="reset"
          className={isMenuActive === menu.name ? `special` : ``}
          style={{ marginBottom: `1rem`, width: `100%` }}
          value={menu.name}
          onClick={() => handleMenuClick(menu.name, menu.id)}
          key={menu.id}
        />
      ))}
    </Fragment>
  )
}

UserMenu.propTypes = {
  goToArticle: PropTypes.func,
}

export default UserMenu
