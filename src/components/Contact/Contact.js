import React from 'react';
import emailjs from "emailjs-com";
import './Contact.css';
const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_98sa3i6', 'template_xb1w0ux', e.target, 'user_xdo4igsr6KSG1RwowIgJn')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
    return (
        <div className="contact">
        <div className="container">
        <form onSubmit={sendEmail}>
                <div className="py-5 py-70">
                    <div className="col-9 form-group mx-auto">
                        <input type="text" className="form-control" placeholder="Name" name="name"/>
                    </div>
                    <div className="col-9 form-group pt-2 mx-auto">
                        <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                    </div>
                    <div className="col-9 form-group pt-2 mx-auto">
                        <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                    </div>
                    <div className="col-9 form-group pt-2 mx-auto">
                        <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                    </div>
                    <div className="col-9 pt-3 mx-auto">
                        <input type="submit" className="btn btn-brand" value="Send Message"></input>
                    </div>
                </div>
            </form>
        </div>
    </div>
    );
};

export default Contact;
