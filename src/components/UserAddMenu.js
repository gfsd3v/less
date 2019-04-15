import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import '../assets/scss/components/_userpanel.scss'

const UserAddMenu = ({ ...props }) => {
  const [menuName, setMenuName] = useState(`Perfil`)
  const axios = require(`axios`)

  const handleChange = event => {
    setMenuName(event.target.value)
  }

  async function handleSubmit(event) {
    event.preventDefault()
    console.log(menuName)
    try {
      const response = await axios.post(
        `https://lineless.herokuapp.com/menu/`,
        { name: menuName }
      )
      if (response.status === 201) {
        props.changeContent(`user-menu`)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Fragment>
      <h1>Adicionar Cardapio</h1>
      <form method="post" action="#">
        <div className="field">
          <label htmlFor="name">Nome do cardapio</label>
          <input onChange={handleChange} type="text" name="name" />
        </div>
        <ul
          style={{ display: `flex`, flexDirection: `row` }}
          className="actions"
        >
          <li>
            <input
              onClick={() => props.changeContent(`user-menu`)}
              type="reset"
              value="voltar"
            />
          </li>
          <li>
            <input
              onClick={handleSubmit}
              type="submit"
              value="Criar"
              className="special"
            />
          </li>
        </ul>
      </form>
    </Fragment>
  )
}

UserAddMenu.propTypes = {
  goToArticle: PropTypes.func,
}

export default UserAddMenu
