import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import '../assets/scss/components/_userpanel.scss'
import { Header, Image, Table } from 'semantic-ui-react'
import Loader from 'react-loader-spinner'

const UserMenu = ({ ...props }) => {
  const [isMenuActive, setIsMenuActive] = useState(false)
  const [currentMenuIndex, setCurrentMenuIndex] = useState(false)
  const [isLoading, setisLoading] = useState(true)
  const [menus, setMenus] = useState(false)
  const axios = require(`axios`)

  const handleMenuClick = (menuName, menuIndex) => {
    setIsMenuActive(menuName)
    setCurrentMenuIndex(menuIndex)
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

  const showItems = () => (
    <>
      <Table basic="very" celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Prato</Table.HeaderCell>
            <Table.HeaderCell>Preço</Table.HeaderCell>
            <Table.HeaderCell>Ação</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {menus[currentMenuIndex].items.map((item, index) => (
            <>
              <Table.Row key={index}>
                <Table.Cell>
                  <Header as="h5">
                    <Image
                      style={{ width: `10%` }}
                      src={item.image_link}
                      rounded
                      size="mini"
                    />
                    <Header.Content>
                      {item.name}
                      <Header.Subheader>{item.description}</Header.Subheader>
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>{`R$ ${item.price}`}</Table.Cell>
                <Table.Cell />
              </Table.Row>
            </>
          ))}
          <button
            aria-expanded="false"
            style={{
              justifyContent: `center`,
              alignItems: `center`,
              display: `flex`,
              marginTop: `0.5rem`,
            }}
            onClick={() =>
              props.changeContent(`add-item`, menus[currentMenuIndex].id)
            }
          >
            <span
              className="fa fa-fw fa-plus"
              style={{
                display: `flex`,
                justifyContent: `center`,
                color: `white`,
                fontSize: `1.75em`,
              }}
            />
          </button>
        </Table.Body>
      </Table>
    </>
  )

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
      {menus.map((menu, index) => (
        <Fragment key={index}>
          <input
            type="reset"
            className={isMenuActive === menu.name ? `special` : ``}
            style={{ marginBottom: `1rem`, width: `100%` }}
            value={menu.name}
            onClick={() => handleMenuClick(menu.name, index)}
          />
          {currentMenuIndex === index ? showItems() : ``}
        </Fragment>
      ))}
      <div>
        <button
          aria-expanded="false"
          style={{
            justifyContent: `center`,
            alignItems: `center`,
            display: `flex`,
            width: `100%`,
          }}
          onClick={() => props.changeContent(`add-menu`)}
        >
          <span
            className="fa fa-fw fa-plus"
            style={{
              display: `flex`,
              justifyContent: `center`,
              marginRight: `0.4rem`,
              color: `white`,
              fontSize: `1.75em`,
            }}
          />
          adicionar cardapio
        </button>
      </div>
    </Fragment>
  )
}

UserMenu.propTypes = {
  goToArticle: PropTypes.func,
}

export default UserMenu
