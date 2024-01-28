import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, handleContactAdd }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(false);
  //let isDuplicate = false;

  useEffect(() => {
    for (const entry of contacts) {
      setIsDuplicate(entry.name === name ? true : false);
      if (isDuplicate) {
        break;
      }
    }
  },[name]);
    

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if (!isDuplicate) {
    handleContactAdd(name, phone, email);
    console.log(`${name}, ${phone}, ${email}`);
    setName('');
    setPhone('');
    setEmail('');
   } else {
    alert('This name is a duplicate. Please enter a unique name.');
   }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm name={name} setName={setName} phone={phone} setPhone={setPhone} email={email} setEmail={setEmail} handleSubmit={handleSubmit}/> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList prop={contacts}/>
      </section>
    </div>
  );
};
