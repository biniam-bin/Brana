import React from 'react'
import { ContactPageContainer, FormContainer } from './style'
import { FaPhoneAlt } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"

function ContactPage() {
    return (
        <ContactPageContainer>
            <div className="title">
                <h1>Get in touch</h1>
                <p>Lorem ipsum dolor sit adipisicing elit. Ipsum, dolorem.</p>
            </div>
            <div className="contact-info">
                <div>
                    <FaPhoneAlt color='#ffa500' size={33} />
                    <p>+251902391296</p>
                </div>
                <div>
                    <IoMdMail color='#ffa500' size={35} />
                    <p>brana@gmail.com</p>
                </div>
            </div>
            <FormContainer>
                <div className="flex">

                    <div className="input-container">
                        <p>Your Name</p>
                        <input type="text" />
                    </div>
                    <div className="input-container">
                        <p>E-mail</p>
                        <input type="text" />
                    </div>
                </div>
                {/* <div className="flex"> */}

                <div className="input-container">
                    <p>Phone</p>
                    <input type="text" />
                </div>
                <div className="input-container">
                    <p>Message</p>
                    <textarea rows="8" cols="50" />
                </div>
                {/* </div> */}
                <div className="button">Send</div>
            </FormContainer>
        </ContactPageContainer>
    )
}

export default ContactPage