import React from "react";
import { contactSelectors, deleteAllContact } from "../../redux/contactSlice";
import { useSelector, useDispatch } from "react-redux";
import Item from "../Item/Item";
const List = () => {
  const contacts = useSelector(contactSelectors.selectAll);
  const total = useSelector(contactSelectors.selectTotal);
  const dispatch = useDispatch();

  const handleDeleteAll = () => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteAllContact());
    }
  };

  return (
    <>
      {total > 0 && (
        <div className="deleteAllBtn" onClick={handleDeleteAll}>
          Delete All
        </div>
      )}
      <ul className="list">
        {contacts.map((contact) => (
          <Item key={contact.id} item={contact} />
        ))}
      </ul>
    </>
  );
};

export default List;
