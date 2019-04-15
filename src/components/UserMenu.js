import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import '../assets/scss/components/_userpanel.scss'
import { Header, Image, Table } from 'semantic-ui-react'

const UserMenu = ({ ...props }) => {
  const [currentTab, setCurrentTab] = useState(`Perfil`)
  const axios = require(`axios`)

  return (
    <Fragment>
      <h2 className="major">Cardápios</h2>
      <Table basic="very" celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Prato</Table.HeaderCell>
            <Table.HeaderCell>Preço</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Header as="h5">
                <Image
                  style={{ width: `10%` }}
                  src="https://react.semantic-ui.com/images/avatar/small/lena.png"
                  rounded
                  size="mini"
                />
                <Header.Content>
                  Comida
                  <Header.Subheader>descrição da Comida</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>22</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as="h5">
                <Image
                  style={{ width: `10%` }}
                  src="https://react.semantic-ui.com/images/avatar/small/matthew.png"
                  rounded
                  size="mini"
                />
                <Header.Content>
                  comida
                  <Header.Subheader>descrição da comida</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>15</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as="h5">
                <Image
                  style={{ width: `10%` }}
                  src="https://react.semantic-ui.com/images/avatar/small/lindsay.png"
                  rounded
                  size="mini"
                />
                <Header.Content>
                  Comida
                  <Header.Subheader>descrição da comida</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>12</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Fragment>
  )
}

UserMenu.propTypes = {
  goToArticle: PropTypes.func,
}

export default UserMenu
