import React from "react";
import PropTypes from "prop-types";

const ContactItem = ({ contact }) => {
  const { id, name, type, description, points } = contact;
  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{" "}
        <span
          style={{ float: "right" }}
          className={
            "badge " + (type === "Nature" ? "badge-success" : "badge-primary")
          }
        >
          {type}
        </span>
      </h3>
      <ul className="list">
        {description && (
          <li>
            <i className="fas fa-envelope-open" /> {description}
          </li>
        )}
        {points && (
          <li>
            <i className="fas fa-clipboard-check" /> {points}
          </li>
        )}
      </ul>
      <button className="btn btn-dark btn-sm">Edit</button>
      <button className="btn btn-danger btn-sm">Delete</button>
      <button className="btn btn-success btn-sm">Complete Task</button>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
