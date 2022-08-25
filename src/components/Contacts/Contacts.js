import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { addContact, addContacts } from "../../redux/contactSlice";
import { nanoid } from "@reduxjs/toolkit";
const Contacts = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !number) return false;
    dispatch(addContact({ id: nanoid(), name, phone_number: number }));
    // const names = name.split(",");
    // dispatch(addContacts(names.map((name) => ({ id: nanoid(), name }))));
    setName("");
    setNumber("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Phone Number"
        />
        <div className="btn">
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default Contacts;
