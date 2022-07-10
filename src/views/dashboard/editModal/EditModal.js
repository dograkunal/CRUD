import React from "react";
import Button from "../../../utils/button";
import "./EditModal.scss";

function EditModal({ show, close }) {
  return (
    <>
      {show && (
        <div className="modalContainer">
          <div className="modal">
            <button onClick={() => close()}>Close</button>
            <div>Edit content</div>
            <input placeholder="Field 1" />
            <input placeholder="Field 2" />
            <Button type="Edit" text="Edit" />
          </div>
        </div>
      )}
    </>
  );
}

export default EditModal;
