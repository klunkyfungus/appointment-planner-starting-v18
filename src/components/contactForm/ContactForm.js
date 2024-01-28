import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="name" type='text' value={name} onChange={(e) => setName(e.target.value)}/>
        <input name="phone" type='phone' value={phone} pattern="\d{10}" onChange={(e) => setPhone(e.target.value)}/>
        <input name="email" type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

