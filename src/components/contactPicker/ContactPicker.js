import React from "react";

export const ContactPicker = (props) => {
  return (
    <>
      <select name={props.name} value={props.contact} onChange={props.onChange}>
        <option value="">No Contact Selected</option>
        {props.contacts.map((contact) => {
          return (
            <option key={contact.name} value={contact.name}>{contact.name}</option>
          )
        })}
      </select>
    </>
  );
};
