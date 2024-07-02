import React from 'react'
import Swal from 'sweetalert2'
import './contact.css'

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "5a45666f-5a5d-436e-a2ad-008a93541569");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
              });
        }
      };
    
  return (
    <section className='contact'>
        <form onSubmit={onSubmit}>
            <h2>Contact Form</h2>
            <div className='input-box'>
                <label>Full Name</label>
                <input type='text' className='field' placeholder='Enter your name' name='name' required/>
            </div>
            <div className='input-box'>
                <label>Email Address</label>
                <input type='email' className='field' placeholder='Enter your email' name='email' required/>
            </div>
            <div className='input-box'>
                <label>Your Message</label>
                <textarea  name='message'className='field mess' placeholder='Enter your message' required/>
            </div>
            <button type='submit'>Send message</button>
        </form>
    </section>
  )
}

export default Contact