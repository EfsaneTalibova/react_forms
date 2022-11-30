import React from 'react'
import { useState } from 'react'
import validator from 'validator'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Forms.css'
const Forms = () => {
  // const [email, setEmail] = useState('');
  const [formData, setFormdData] = useState([])
  const [props, setProps] = useState({
    name: "",
    surname: "",
    phone: "",
    eMail: "",
    comment: ""
  })
  const handleInput = (e) => {
    setProps({ ...props, [e.target.name]: e.target.value })
  }
  const btnFun = (e) => {
    e.preventDefault()
    setFormdData([...formData, props])
    console.log(props)
    setProps({
      name: "",
      surname: "",
      phone: "",
      eMail: "",
      comment: ""
    });
    const [emailError, setEmailError] = useState('')
    const validateEmail = (e) => {
      var email = e.target.value

      if (validator.isEmail(email)) {
        setEmailError('Valid Email :)')
      } else {
        setEmailError('Enter valid Email!')
      }
    }
  }
  return (
    <div className='formDiv'>
      <form className='formComponent'>
        <label htmlFor="name">Ad: </label>
        <input value={props.name} onChange={handleInput} type="text" name='name' id='name' />
        <label htmlFor="surname">Soyad: </label>
        <input value={props.surname} onChange={handleInput} type="text" name='surname' id='surname' />
        <label htmlFor="phone">Telefon nömrəsi: </label>
        <input value={props.phone} onChange={handleInput} type="number" name='phone' id='phone' />
        <label htmlFor="eMail">Email: </label>
        <input value={props.eMail} onChange={handleInput} type="email" name='eMail' id='eMail' />
        <label htmlFor="comment">Şərh: </label>
        <textarea name="comment" id="comment" cols="22" rows="2"></textarea>
        <button onClick={btnFun} className='btn btn-primary btnCls'>Göndər</button>
      </form>
    </div>
  )
}

export default Forms
