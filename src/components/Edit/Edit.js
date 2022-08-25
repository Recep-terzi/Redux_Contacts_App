import React from "react";
import { useParams } from "react-router-dom";
import EditForm from "../EditForm/EditForm";
import { useSelector } from "react-redux";
import { contactSelectors } from "../../redux/contactSlice";
import { Navigate } from "react-router-dom";
const Edit = () => {
  const { id } = useParams();

  const contact = useSelector((state) =>
    contactSelectors.selectById(state, id)
  );
  if (!contact) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h1>Edit</h1>
      <EditForm contact={contact} />
    </div>
  );
};

export default Edit;
