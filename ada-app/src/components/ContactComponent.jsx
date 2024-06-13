import React, { useState } from "react";

const ContactComponent = ({ name, age }) => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="contact_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="contact_taital">
                {name} {age}
              </h1>
            </div>
          </div>
          <div className="contact_section_2">
            <div className="row">
              <div className="col-md-12">
                <div className="mail_section map_form_container">
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      className="mail_text"
                      placeholder="İsim"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="text"
                      className="mail_text"
                      placeholder="Telefon Numarası"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="text"
                      className="mail_text"
                      placeholder="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <textarea
                      className="massage-bt"
                      placeholder="Mesajınız"
                      rows="5"
                      id="comment"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                    <div className="send_bt">
                      <button type="submit">Gönder</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactComponent;
