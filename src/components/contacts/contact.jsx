import React from 'react';
import "./contact.css"

const Contact = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('I Will reply soon')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <div className="contact" id = "contact">
    <div className="container">
      <h3>Thanks For Visiting!!</h3>
      <h2 className="text">CONTACT ME</h2>
      <form onSubmit={onSubmit}>
        <div className="name_form">
          <label className="form-label" htmlFor="name">
            Name : 
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="email_form">
          <label className="form-label" htmlFor="email">
            Email ID :
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="message_form">
          <label className="form-label" htmlFor="message">
            Message :
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div>

    </div>
  )
}

export default Contact