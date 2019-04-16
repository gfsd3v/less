import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import '../assets/scss/components/_userpanel.scss'

const UserAddItem = ({ ...props }) => {
  const [itemName, setItemName] = useState(false)
  const [itemPrice, setItemPrice] = useState(false)
  const [itemDescription, setItemDescription] = useState(false)
  const [imgUrl, setImgUrl] = useState(false)
  const axios = require(`axios`)

  const handleChange = event => {
    setItemName(event.target.value)
  }

  const handlePriceChange = event => {
    setItemPrice(event.target.value)
  }

  const handleDescriptionChange = event => {
    setItemDescription(event.target.value)
  }

  const handleImgChange = event => {
    setImgUrl(event.target.value)
  }

  async function handleSubmit(event) {
    event.preventDefault()
    let headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    } 
    try {
      const response = await axios.post(
        `https://lineless.herokuapp.com/menu/${props.menuId}/`,
        { name: itemName, price: itemPrice, description: itemDescription, image_url: imgUrl }, {headers: headers}
      )
      if (response.status === 201) {
        props.changeContent(`user-menu`)
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <Fragment>
      <h1>Adicionar Produto</h1>
      <form method="post" action="#">
        <div className="field">
          <label htmlFor="name">Nome do produto</label>
          <input onChange={handleChange} type="text" />
        </div>
        <div className="field">
          <label htmlFor="name">descrição</label>
          <input onChange={handleDescriptionChange} type="text" />
        </div>
        <div className="field">
          <label htmlFor="name">preço</label>
          <input onChange={handlePriceChange} type="text" />
        </div>
        <div className="field">
          <label htmlFor="name">URL da imagem</label>
          <input onChange={handleImgChange} type="text" />
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

UserAddItem.propTypes = {
  goToArticle: PropTypes.func,
}

export default UserAddItem
