import React, { useState, useContext } from "react";
import ContactContext from "../../context/contact/contactContext";
const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const [contact, setContact] = useState({
    name: "",
    description: "",
    type: "Nature",
    points: "",
  });

  const { name, description, type, points } = contact;
  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    contactContext.addContact(contact);
    setContact({
      name: "",
      description: "",
      type: "Nature",
      points: "",
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">Add Challenge</h2>
      <input type="text" placeholder="Name" value={name} onChange={onChange} />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Points"
        value={points}
        onChange={onChange}
      />
      <h5>Challenge Type</h5>
      <input
        type="radio"
        placeholder="Type"
        value="nature"
        checked={type === "Nature"}
      />{" "}
      Nature{" "}
      <input
        type="radio"
        placeholder="Type"
        value="Energy"
        checked={type === "Energy"}
      />{" "}
      Energy
      <div>
        <input
          type="submit"
          value="Add Challenge"
          className="btn btn-primary btn-block"
        />
      </div>
    </form>
  );
};

export default ContactForm;
