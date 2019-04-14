import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { EndPoint } from './Config'

const UserPanel = ({ ...props }) => {
  const [loginEmail, setloginEmail] = useState(``)
  const [loginPass, setloginPass] = useState(``)
  const [error, setError] = useState(false)
  const axios = require(`axios`)

  return (
    <Fragment>
      <h2 className="major">Dashboard</h2>
      <p>
        <b>Noline</b> é um app que chegou para acabar com aquela fila chata no
        restaurante e no supermercado funcionando como uma "comanda" online e
        forma de pagamento.
      </p>
      <p>
        Com <b>Noline</b> todos as suas compras em um estabelecimento parceiro
        são adicionadas diretamente para o nosso app, onde você pode acompanhar
        a lista dos produtos comprados, seus valores e ao realizar o pagamento
        diretamento no app é gerado um QRCode que é validado na sua saida,
        evitando assim toda aquela chatice das filas.
      </p>
    </Fragment>
  )
}

UserPanel.propTypes = {
  goToArticle: PropTypes.func,
}

export default UserPanel
