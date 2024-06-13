import { useState } from "react";
import ContactComponent from "../components/ContactComponent";

const Contact = ({ name, age }) => {
  return <ContactComponent age={age} name={name} />;
};

export default Contact;
