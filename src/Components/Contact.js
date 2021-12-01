import emailjs from "emailjs-com";
import React, { useState } from "react";

const Contact = ({ data }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  if (data) {
    var contactName = data.name;
    var street = data.address.street;
    var city = data.address.city;
    var state = data.address.state;
    var country = data.address.country;
    var phone = data.phone;
    var contactEmail = data.email;
  }

  // const submitForm = () => {
  //   window.open(
  //     `mailto:${contactEmail}?subject=${encodeURIComponent(
  //       subject
  //     )}&body=${encodeURIComponent(name)} (${encodeURIComponent(
  //       email
  //     )}): ${encodeURIComponent(message)}`
  //   );
  // };

  // Send Email
  const sendEmail = e => {
    e.preventDefault();
    emailjs.sendForm('gmail', 'My Portfolio', e.target, 'user_1iGC56yYxOO8v6HRADL1i')
    .then((result) => {
      if (result.text === 'OK') {
          setSuccess(true);
          e.target.reset();
      }
  }, (error) => {
      console.log(error.text);
  });
  }
  
  return (
    <section id="contact">
      <div className="row section-head" data-aos="fade-right" data-aos-duration="1500">
        <div>
          <h1 className="text-white flex items-center pl-6">
            Get In Touch.          
          </h1>
        </div>
      </div>

      <div className="row" data-aos="fade-right">
        <div className="eight columns">
          <form onSubmit={sendEmail}>
            <fieldset>
              <div>
                <label htmlFor="contactName">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  defaultValue=""
                  value={name}
                  size="35"
                  id="contactName"
                  name="contactName"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contactEmail">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="text"
                  defaultValue=""
                  value={email}
                  size="35"
                  id="contactEmail"
                  name="contactEmail"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contactSubject">Subject</label>
                <input
                  type="text"
                  defaultValue=""
                  value={subject}
                  size="35"
                  id="contactSubject"
                  name="contactSubject"
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contactMessage">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  cols="50"
                  rows="15"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  id="contactMessage"
                  name="contactMessage"
                ></textarea>
              </div>

              <div>
                <button type="submit" value="send email" className="submit">
                  Submit
                </button>
              </div>
            </fieldset>
          </form>

          <div id="message-warning"> Error boy</div>
          <div id="message-success">
            <i className="fa fa-check"></i>Your message was sent, thank you!
            <br />
          </div>
        </div>

        <aside className="four columns footer-widgets" data-aos="fade-left" data-aos-duration="1500">
          <div className="widget widget_contact">
            <h4>Address and Phone</h4>
            <p className="address">
              {contactName}
              <br />
              {contactEmail}
              <br />
              <br />
              {street} <br />
              {city}, {state} {country}
              <br />
              <span>{phone}</span>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
