import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div>
        <section className="awesome-feature">
  <div id="feature-text">
    <h1>Contact ME</h1>
    
  </div>
</section>
<section id="contact-us">
  <div>
    <div id="contact-form-item">
      <div>
        <label htmlFor="name">Name</label> <br />
        <input type="text" placeholder="Your Name" /> <br />
      </div>
      <div>
        <label htmlFor="email">Email</label> <br />
        <input type="email" placeholder="Your Email" /> <br />
      </div>
    </div>
    <label htmlFor="message">Messages</label> <br />
    <textarea
      name=""
      id=""
      placeholder="Details your message"
      defaultValue={""}
    />
    <span id="send-message-btn">
      <input type="submit" defaultValue="Send Message" />
      <i className="fa-solid fa-rocket" />
    </span>
  </div>

</section>


    </div>
  )
}

export default Contact