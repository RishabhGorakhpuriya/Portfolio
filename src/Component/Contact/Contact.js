import React from 'react'
import './Contact.css'
import { MdOutlineEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { RiWhatsappLine } from "react-icons/ri";
const Contact = () => {
    return (
        <section  className="contact" id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="contact__container ">
                <div className="contact__option">
                    <MdOutlineEmail className="contact__option-icon" />
                    <h4>Email</h4>
                    <h5>rishabhgorakhpuriya@gmail.com</h5>
                    <a href="mailto:rihabhgorakhpuriya.me">Send a message</a>
                </div>
                <div className="contact__option">
                    <IoMdCall className="contact__option-icon" />
                    <h4>Call</h4>
                    <h5>9479792505</h5>
                    <a href="https://m.me">Call</a>
                </div>
                <div className="contact__option">
                    <RiWhatsappLine className="contact__option-icon" />
                    <h4>Whatsapp</h4>
                    <h5>9479792505</h5>
                    <a href="https://api.whatsapp.com/send?phone=9479792505">
                        Send a message
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact
