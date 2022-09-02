import React from "react";
import "./css/MapScreen.css";
import { Modal1, Modal2, Modal3, Modal4 } from "./Modals";
import { useState } from "react";
import background from "./css/zoomap.png";
const map = require("./css/zoomap.png");

const MapScreen = () => {
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const [openModal4, setOpenModal4] = useState(false);

  return (
    <div>
      <html>
        <head>
          <title>Manila Zoo Map</title>
          {/* <link rel="stylesheet" href="style.css"> */}
        </head>

        <body>
          {/* <div
            class="imagebackground"
            style={{ backgroundImage: `url(${background})` }}
          > */}
          <img class="imagebackground" src={map} />
          <button
            type="button"
            class="button1"
            id="modalBtn1"
            onClick={() => {
              setOpenModal1(true);
            }}
          >
            Modal 1
          </button>
          <button
            type="button"
            class="button"
            id="modalBtn2"
            onClick={() => {
              setOpenModal2(true);
            }}
          >
            Modal 2
          </button>
          <button
            type="button"
            class="button"
            id="modalBtn3"
            onClick={() => {
              setOpenModal3(true);
            }}
          >
            Modal 3
          </button>
          <button
            type="button"
            class="button"
            id="modalBtn4"
            onClick={() => {
              setOpenModal4(true);
            }}
          >
            Modal 4
          </button>
          {openModal1 && <Modal1 closeModal1={setOpenModal1} />}
          {openModal2 && <Modal2 closeModal2={setOpenModal2} />}
          {openModal3 && <Modal3 closeModal3={setOpenModal3} />}
          {openModal4 && <Modal4 closeModal4={setOpenModal4} />}
          <script src="main.js"></script>
          {/* </div> */}
        </body>
      </html>
    </div>
  );
};

export default MapScreen;
