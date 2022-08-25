import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateContact } from "../../redux/contactSlice";
import { useNavigate } from "react-router-dom";
const EditForm = ({ contact }) => {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.phone_number);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !number) return false;

    dispatch(
      updateContact({
        id: contact.id,
        changes: {
          name,
          phone_number: number,
        },
      })
    );
    navigate(-1);
  };
  return (
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
        <button type="submit">Update</button>
      </div>
    </form>
  );
};

export default EditForm;
