import React from "react";

const Submissions = () => {
  return (
    <div className="grid-2">
      <div>
        <ContactForm />
      </div>
      <div>
        <Header />
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Submissions;