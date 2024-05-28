import React from 'react'
import SocialButton from './SocialButton'
import Formulario from './Formulario.jsx'

export default function Registro ({ onAlert }) {
  return (
    <>
      <h2>Crea una cuenta</h2>
      <SocialButton button='fa-facebook' />
      <SocialButton button='fa-github' />
      <SocialButton button='fa-linkedin' />
      <p>O usa tu email para registrarte.</p>
      <Formulario addAlert={onAlert} />
    </>
  )
}
