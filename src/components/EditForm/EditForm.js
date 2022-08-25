import React from "react";

const EditForm = () => {
  const name = "test";
  const number = "test";
  const handleSubmit = () => {};
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        //   onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="text"
        value={number}
        //   onChange={(e) => setNumber(e.target.value)}
        placeholder="Phone Number"
      />
      <div className="btn">
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default EditForm;
