import React from "react";
import Contacts from "./Contacts/Contacts";
import List from "./List/List";
import { useSelector } from "react-redux";
import { contactSelectors } from "../redux/contactSlice";
const AllComponents = () => {
  const total = useSelector(contactSelectors.selectTotal);

  return (
    <div>
      <h1> Contacts ({total})</h1>
      <List />
      <Contacts />
    </div>
  );
};

export default AllComponents;
