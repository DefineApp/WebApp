import React from "react";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";
import Header from "../../Components/contacts/Header";

const Home = () => {
  return (
    <div className="grid-2">
      <div>
        <ContactForm />
      </div>
      <div>
        <Header />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
