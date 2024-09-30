import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



export default function ContactMe() {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_pn0pyod', 'template_22hvahe', form.current, {
          publicKey: 'A-O7VoAoqxnkrg88M',
        })
        .then(
          () => {
            alert('Message sent Succesfully');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    }
    return (
        <section id="contact" className="contact--section">
            <div>
                <p className="sub--title">Get In Touch</p>
                <h2 className="skills--section--heading" >Contact Me</h2>
                <p className="text--lg">
                </p>
            </div>
            <form className="contact--form--container" ref={form} onSubmit={sendEmail}>
                <div className="container">
                    <label htmlFor="first-name"
                        className="contact--label">
                        <span className="text-md">First Name</span>
                        <input type="text" className="contact--input text-md"
                            name="user_name"
                            id="first-name"
                            required />
                    </label>
                    <label htmlFor="last-name"
                        className="contact--label">
                        <span className="text-md">Last Name</span>
                        <input type="text" className="contact--input text-md"
                            name="user_name"
                            id="last-name"
                            required />
                    </label>
                    <label htmlFor="email"
                        className="contact--label">
                        <span className="text-md">Email</span>
                        <input type="email" className="contact--input text-md"
                            name="user_email"
                            id="email"
                            required />
                    </label>
                    <label htmlFor="phone-number"
                        className="contact--label">
                        <span className="text-md">Phone no.</span>
                        <input type="number" className="contact--input text-md"
                            name="phone--number"
                            id="phone--number"
                            required />
                    </label>

                </div>
                    <label htmlFor="message"
                        className="contact--label">
                        <span className="text-md">Message</span>
                        <textarea className="contact--input text-md"
                            rows="8"
                            id="message"
                            name="message"
                            placeholder="Type your Message..."
                        />
                    </label>
                    <label htmlFor="checkbox"
                    className="checkbox--label">
                        <input type="checkbox" required
                        name="checkbox"
                        id="checkbox"/>
                        <span className="text-sm">I accepts the terms and conditions</span>
                    </label>
                    <div>
                        <button className="btn btn-primary contact--form--btn" value="Send" style={{color: 'white'}} >Submit</button>
                    </div>
            </form>

        </section>
    )
}