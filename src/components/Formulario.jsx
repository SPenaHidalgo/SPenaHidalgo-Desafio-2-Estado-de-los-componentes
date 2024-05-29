import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const Formulario = ({ addAlert }) => {
  const [inputs, setInputs] = useState({
    nombre: '',
    email: '',
    password1: '',
    password2: ''
  })

  const inputEntrantes = (a) => {
    if (a.target.id === 'nombre') {
      setInputs({ ...inputs, nombre: a.target.value })
    }

    if (a.target.id === 'email') {
      setInputs({ ...inputs, email: a.target.value })
    }

    if (a.target.id === 'password1') {
      setInputs({ ...inputs, password1: a.target.value })
    }
    if (a.target.id === 'password2') {
      setInputs({ ...inputs, password2: a.target.value })
    }
  }

  const validadorInputs = (a) => {
    a.preventDefault()

    const isValidNombre = /^[a-zA-Z0-9]{3,}$/
    const isValidEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/

    const alert = inputs.nombre.trim() === '' || inputs.email === '' || inputs.password1 === '' || inputs.password2 === ''

      ? { texto: 'Por favor, completa todos los campos', tipo: 'alert-danger', estado: true }
      : !isValidNombre.test(inputs.nombre)

          ? { texto: 'El Nombre debe tener un mínimo de 3 caracteres. No se permiten caracteres especiales.', tipo: 'alert-danger', estado: true }
          : !isValidEmail.test(inputs.email)

              ? { texto: 'Formato de email incorrecto', tipo: 'alert-danger', estado: true }
              : !isValidPassword.test(inputs.password1)

                  ? { texto: 'La contraseña debe tener mínimo 6 caracteres, una letra mayúscula, una letra minúscula y un número', tipo: 'alert-danger', estado: true }
                  : inputs.password1 !== inputs.password2

                    ? { texto: 'Las contraseñas no coinciden. Intenta otra vez', tipo: 'alert-danger', estado: true }
                    : { texto: '¡Cuenta creada con éxito!', tipo: 'alert-success', estado: true }

    addAlert(alert)
  }

  return (
    <>
      <Form onSubmit={(a) => validadorInputs(a)}>
        <Form.Group className='mb-3'>
          <Form.Control
            onChange={(a) => inputEntrantes(a)}
            id='nombre'
            name='Nombre'
            type='text'
            placeholder='Nombre'
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Control
            onChange={(a) => inputEntrantes(a)}
            id='email'
            name='Email'
            type='email'
            placeholder='anotaunemail@ejemplo.com'
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Control
            onChange={(a) => inputEntrantes(a)}
            id='password1'
            name='password1'
            type='password'
            placeholder='Contraseña'
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Control
            onChange={(a) => inputEntrantes(a)}
            id='password2'
            name='password2'
            type='password'
            placeholder='Confirma tu contraseña'
          />
        </Form.Group>

        <Button variant='success w-100' type='submit'>
          Registrarse
        </Button>
      </Form>
    </>
  )
}

export default Formulario
