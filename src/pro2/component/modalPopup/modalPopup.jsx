import "./modalPopup.css";
import { useState } from "react";
import ModalP from "./modalP/modalP";

const ModalPopup = () => {
  const [modalActive, setModalActive] = useState(true);

  return (
    <div className="modulPopup">
      <main>
        <button className="open-btn" onClick={() => setModalActive(true)}>
          Open modal popup
        </button>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
          nostrum distinctio, iste minus ipsam quod consectetur accusamus vero
          autem, officia eligendi in corrupti non ipsa.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
          nostrum distinctio, iste minus ipsam quod consectetur accusamus vero
          autem, officia eligendi in corrupti non ipsa.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
          nostrum distinctio, iste minus ipsam quod consectetur accusamus vero
          autem, officia eligendi in corrupti non ipsa.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
          nostrum distinctio, iste minus ipsam quod consectetur accusamus vero
          autem, officia eligendi in corrupti non ipsa.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
          nostrum distinctio, iste minus ipsam quod consectetur accusamus vero
          autem, officia eligendi in corrupti non ipsa.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
          nostrum distinctio, iste minus ipsam quod consectetur accusamus vero
          autem, officia eligendi in corrupti non ipsa.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
          nostrum distinctio, iste minus ipsam quod consectetur accusamus vero
          autem, officia eligendi in corrupti non ipsa.
        </p>
      </main>
      <ModalP active={modalActive} setActive={setModalActive}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          voluptatibus exercitationem, quod perferendis hic non sit ab
          laudantium molestiae rem qui quidem iure reiciendis impedit.
        </p>
      </ModalP>
    </div>
  );
};

export default ModalPopup;
