import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { addContact, addContacts } from "../../redux/contactSlice";
import { nanoid } from "@reduxjs/toolkit";
const Contacts = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return false;
    // dispatch(addContact({ id: nanoid(), name }));
    const names = name.split(",");
    console.log(names);
    dispatch(addContacts(names.map((name) => ({ id: nanoid(), name }))));
    setName("");
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
      </form>
    </div>
  );
};

export default Contacts;
