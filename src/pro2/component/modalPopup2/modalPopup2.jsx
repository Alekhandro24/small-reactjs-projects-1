import { useState } from "react";
import "./modalPopup2.css";

const ModalPopup2 = () => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <>
      <button className="btn btn-primary" onClick={toggle}>
        Open Modal
      </button>

      <div className={`modal ${show && "show"}`} onClick={toggle}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h2 className="title">Title</h2>
            <h2 className="modal-close" onClick={toggle}>
              X
            </h2>
          </div>
          <div className="modal-body">
            <div className="form-conrol">
              <label htmlFor="">Name</label>
              <input type="text" placeholder="Your number" />
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-cancel">Close</button>
            <button className="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalPopup2;
