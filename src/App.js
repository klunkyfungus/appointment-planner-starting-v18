import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);
  
  /*
  Implement functions to add data to
  contacts and appointments
  */
  const handleContactAdd = (name, phone, email) => {
    let newContact = {
      name: name,
      phone: phone,
      email: email
    };
    setContacts((prev) => [...prev, newContact]);
  };

  const handleAppointmentAdd = (name, contact, date, time) => {
    let newAppointment = {
      name: name,
      contact: contact,
      date: date,
      time: time,
    };
    setAppointments((prev) => [...prev, newAppointment]);
  };

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} handleContactAdd={handleContactAdd}/> /* Add props to ContactsPage */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage appointments={appointments} contacts={contacts} handleAppointmentAdd={handleAppointmentAdd}/> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
