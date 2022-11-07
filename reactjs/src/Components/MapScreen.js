import React from "react";
import "./css/MapScreen.css";
import {
  ElephantModal,
  HippopotamusModal,
  AviaryModal,
  HyenaModal,
  SavannaModal,
  ApexModal,
  EndemicModal,
  ReptileModal,
  MuseumModal,
  InReptileModal,
  LagoonModal,
  IslandModal,
  PrimatesModal,
  ButterflyModal,
  BotanicalModal,
} from "./Modals";
import { useState } from "react";
import { FaVolumeUp, FaArrowLeft, FaMapMarkerAlt } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MdLocationPin } from "react-icons/md";
const map = require("./css/zoomap3.png");

const MapScreen = () => {
  const [openModalElephant, setOpenModalElephant] = useState(false);
  const [openModalHippopotamus, setOpenModalHippopotamus] = useState(false);
  const [openModalAviary, setOpenModalAviary] = useState(false);
  const [openModalHyena, setOpenModalHyena] = useState(false);
  const [openModalSavanna, setOpenModalSavanna] = useState(false);
  const [openModalApex, setOpenModalApex] = useState(false);
  const [openModalEndemic, setOpenModalEndemic] = useState(false);
  const [openModalReptile, setOpenModalReptile] = useState(false);
  const [openModalMuseum, setOpenModalMuseum] = useState(false);
  const [openModalInReptile, setOpenModalInReptile] = useState(false);
  const [openModalLagoon, setOpenModalLagoon] = useState(false);
  const [openModalIsland, setOpenModalIsland] = useState(false);
  const [openModalPrimates, setOpenModalPrimates] = useState(false);
  const [openModalButterfly, setOpenModalButterfly] = useState(false);
  const [openModalBotanical, setOpenModalBotanical] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const [openModal4, setOpenModal4] = useState(false);

  const pinSize = 35;

  return (
    <div>
      <img class="imagebackground" src={map} />

      <div class="buttonContainerElephant">
        <button
          type="button"
          class="elephantButton"
          id="modalBtn1"
          onClick={() => {
            setOpenModalElephant(true);
            setOpenModalHippopotamus(false);
            setOpenModalAviary(false);
            setOpenModalHyena(false);
            setOpenModalSavanna(false);
            setOpenModalApex(false);
            setOpenModalEndemic(false);
            setOpenModalReptile(false);
            setOpenModalMuseum(false);
            setOpenModalInReptile(false);
            setOpenModalLagoon(false);
            setOpenModalIsland(false);
            setOpenModalPrimates(false);
            setOpenModalButterfly(false);
            setOpenModalBotanical(false);
          }}
        >
          <FaMapMarkerAlt
            size={pinSize}
            style={{
              color: "#145da0",
              stroke: "white",
              strokeWidth: "10",
            }}
          />
        </button>
        <div class="buttonShadow"></div>
      </div>

      <div class="buttonContainerHippopotamus">
        <button
          type="button"
          class="hippopotamusButton"
          id="modalBtn1"
          onClick={() => {
            setOpenModalElephant(false);
            setOpenModalHippopotamus(true);
            setOpenModalAviary(false);
            setOpenModalHyena(false);
            setOpenModalSavanna(false);
            setOpenModalApex(false);
            setOpenModalEndemic(false);
            setOpenModalReptile(false);
            setOpenModalMuseum(false);
            setOpenModalInReptile(false);
            setOpenModalLagoon(false);
            setOpenModalIsland(false);
            setOpenModalPrimates(false);
            setOpenModalButterfly(false);
            setOpenModalBotanical(false);
          }}
        >
          <FaMapMarkerAlt
            size={pinSize}
            style={{
              color: "#145da0",
              stroke: "white",
              strokeWidth: "8",
              //borderColor: "transparent",
            }}
          />
        </button>
        <div class="buttonShadow"></div>
      </div>
      <div class="buttonContainerAviary">
        <button
          type="button"
          class="aviaryButton"
          id="modalBtn1"
          onClick={() => {
            setOpenModalElephant(false);
            setOpenModalHippopotamus(false);
            setOpenModalAviary(true);
            setOpenModalHyena(false);
            setOpenModalSavanna(false);
            setOpenModalApex(false);
            setOpenModalEndemic(false);
            setOpenModalReptile(false);
            setOpenModalMuseum(false);
            setOpenModalInReptile(false);
            setOpenModalLagoon(false);
            setOpenModalIsland(false);
            setOpenModalPrimates(false);
            setOpenModalButterfly(false);
            setOpenModalBotanical(false);
          }}
        >
          <FaMapMarkerAlt
            size={pinSize}
            style={{
              color: "#145da0",
              stroke: "white",
              strokeWidth: "8",
              //borderColor: "transparent",
            }}
          />
        </button>
        <div class="buttonShadow"></div>
      </div>
      <div class="buttonContainerHyena">
        <button
          type="button"
          class="hyenaButton"
          id="modalBtn1"
          onClick={() => {
            setOpenModalElephant(false);
            setOpenModalHippopotamus(false);
            setOpenModalAviary(false);
            setOpenModalHyena(true);
            setOpenModalSavanna(false);
            setOpenModalApex(false);
            setOpenModalEndemic(false);
            setOpenModalReptile(false);
            setOpenModalMuseum(false);
            setOpenModalInReptile(false);
            setOpenModalLagoon(false);
            setOpenModalIsland(false);
            setOpenModalPrimates(false);
            setOpenModalButterfly(false);
            setOpenModalBotanical(false);
          }}
        >
          <FaMapMarkerAlt
            size={pinSize}
            style={{
              color: "#145da0",
              stroke: "white",
              strokeWidth: "8",
              //borderColor: "transparent",
            }}
          />
        </button>
        <div class="buttonShadow"></div>
      </div>
      <div class="buttonContainerSavanna">
        <button
          type="button"
          class="savannaButton"
          id="modalBtn1"
          onClick={() => {
            setOpenModalElephant(false);
            setOpenModalHippopotamus(false);
            setOpenModalAviary(false);
            setOpenModalHyena(false);
            setOpenModalSavanna(true);
            setOpenModalApex(false);
            setOpenModalEndemic(false);
            setOpenModalReptile(false);
            setOpenModalMuseum(false);
            setOpenModalInReptile(false);
            setOpenModalLagoon(false);
            setOpenModalIsland(false);
            setOpenModalPrimates(false);
            setOpenModalButterfly(false);
            setOpenModalBotanical(false);
          }}
        >
          <FaMapMarkerAlt
            size={pinSize}
            style={{
              color: "#145da0",
              stroke: "white",
              strokeWidth: "8",
              //borderColor: "transparent",
            }}
          />
        </button>
        <div class="buttonShadow"></div>
      </div>
      <div class="buttonContainerApex">
        <button
          type="button"
          class="apexButton"
          id="modalBtn1"
          onClick={() => {
            setOpenModalElephant(false);
            setOpenModalHippopotamus(false);
            setOpenModalAviary(false);
            setOpenModalHyena(false);
            setOpenModalSavanna(false);
            setOpenModalApex(true);
            setOpenModalEndemic(false);
            setOpenModalReptile(false);
            setOpenModalMuseum(false);
            setOpenModalInReptile(false);
            setOpenModalLagoon(false);
            setOpenModalIsland(false);
            setOpenModalPrimates(false);
            setOpenModalButterfly(false);
            setOpenModalBotanical(false);
          }}
        >
          <FaMapMarkerAlt
            size={pinSize}
            style={{
              color: "#145da0",
              stroke: "white",
              strokeWidth: "8",
              //borderColor: "transparent",
            }}
          />
        </button>
        <div class="buttonShadow"></div>
      </div>
      <div class="buttonContainerEndemic">
        <button
          type="button"
          class="endemicButton"
          id="modalBtn1"
          onClick={() => {
            setOpenModalElephant(false);
            setOpenModalHippopotamus(false);
            setOpenModalAviary(false);
            setOpenModalHyena(false);
            setOpenModalSavanna(false);
            setOpenModalApex(false);
            setOpenModalEndemic(true);
            setOpenModalReptile(false);
            setOpenModalMuseum(false);
            setOpenModalInReptile(false);
            setOpenModalLagoon(false);
            setOpenModalIsland(false);
            setOpenModalPrimates(false);
            setOpenModalButterfly(false);
            setOpenModalBotanical(false);
          }}
        >
          <FaMapMarkerAlt
            size={pinSize}
            style={{
              color: "#145da0",
              stroke: "white",
              strokeWidth: "8",
              //borderColor: "transparent",
            }}
          />
        </button>
        <div class="buttonShadow"></div>
      </div>
      <div class="buttonContainerOutReptile">
        <button
          type="button"
          class="reptileButton"
          id="modalBtn1"
          onClick={() => {
            setOpenModalElephant(false);
            setOpenModalHippopotamus(false);
            setOpenModalAviary(false);
            setOpenModalHyena(false);
            setOpenModalSavanna(false);
            setOpenModalApex(false);
            setOpenModalEndemic(false);
            setOpenModalReptile(true);
            setOpenModalMuseum(false);
            setOpenModalInReptile(false);
            setOpenModalLagoon(false);
            setOpenModalIsland(false);
            setOpenModalPrimates(false);
            setOpenModalButterfly(false);
            setOpenModalBotanical(false);
          }}
        >
          <FaMapMarkerAlt
            size={pinSize}
            style={{
              color: "#145da0",
              stroke: "white",
              strokeWidth: "8",
              //borderColor: "transparent",
            }}
          />
        </button>
        <div class="buttonShadow"></div>
      </div>
      <div class="buttonContainerMuseum">
        <button
          type="button"
          class="museumButton"
          id="modalBtn1"
          onClick={() => {
            setOpenModalElephant(false);
            setOpenModalHippopotamus(false);
            setOpenModalAviary(false);
            setOpenModalHyena(false);
            setOpenModalSavanna(false);
            setOpenModalApex(false);
            setOpenModalEndemic(false);
            setOpenModalReptile(false);
            setOpenModalMuseum(true);
            setOpenModalInReptile(false);
            setOpenModalLagoon(false);
            setOpenModalIsland(false);
            setOpenModalPrimates(false);
            setOpenModalButterfly(false);
            setOpenModalBotanical(false);
          }}
        >
          <FaMapMarkerAlt
            size={pinSize}
            style={{
              color: "#145da0",
              stroke: "white",
              strokeWidth: "8",
              //borderColor: "transparent",
            }}
          />
        </button>
        <div class="buttonShadow"></div>
      </div>
      <div class="buttonContainerInReptile">
        <button
          type="button"
          class="inreptileButton"
          id="modalBtn1"
          onClick={() => {
            setOpenModalElephant(false);
            setOpenModalHippopotamus(false);
            setOpenModalAviary(false);
            setOpenModalHyena(false);
            setOpenModalSavanna(false);
            setOpenModalApex(false);
            setOpenModalEndemic(false);
            setOpenModalReptile(false);
            setOpenModalMuseum(false);
            setOpenModalInReptile(true);
            setOpenModalLagoon(false);
            setOpenModalIsland(false);
            setOpenModalPrimates(false);
            setOpenModalButterfly(false);
            setOpenModalBotanical(false);
          }}
        >
          <FaMapMarkerAlt
            size={pinSize}
            style={{
              color: "#145da0",
              stroke: "white",
              strokeWidth: "8",
              //borderColor: "transparent",
            }}
          />
        </button>
        <div class="buttonShadow"></div>
      </div>
      <div class="buttonContainerLagoon">
        <button
          type="button"
          class="lagoonButton"
          id="modalBtn1"
          onClick={() => {
            setOpenModalElephant(false);
            setOpenModalHippopotamus(false);
            setOpenModalAviary(false);
            setOpenModalHyena(false);
            setOpenModalSavanna(false);
            setOpenModalApex(false);
            setOpenModalEndemic(false);
            setOpenModalReptile(false);
            setOpenModalMuseum(false);
            setOpenModalInReptile(false);
            setOpenModalLagoon(true);
            setOpenModalIsland(false);
            setOpenModalPrimates(false);
            setOpenModalButterfly(false);
            setOpenModalBotanical(false);
          }}
        >
          <FaMapMarkerAlt
            size={pinSize}
            style={{
              color: "#145da0",
              stroke: "white",
              strokeWidth: "8",
              //borderColor: "transparent",
            }}
          />
        </button>
        <div class="buttonShadow"></div>
      </div>
      <div class="buttonContainerIsland">
        <button
          type="button"
          class="islandButton"
          id="modalBtn1"
          onClick={() => {
            setOpenModalElephant(false);
            setOpenModalHippopotamus(false);
            setOpenModalAviary(false);
            setOpenModalHyena(false);
            setOpenModalSavanna(false);
            setOpenModalApex(false);
            setOpenModalEndemic(false);
            setOpenModalReptile(false);
            setOpenModalMuseum(false);
            setOpenModalInReptile(false);
            setOpenModalLagoon(false);
            setOpenModalIsland(true);
            setOpenModalPrimates(false);
            setOpenModalButterfly(false);
            setOpenModalBotanical(false);
          }}
        >
          <FaMapMarkerAlt
            size={pinSize}
            style={{
              color: "#145da0",
              stroke: "white",
              strokeWidth: "8",
              //borderColor: "transparent",
            }}
          />
        </button>
        <div class="buttonShadow"></div>
      </div>
      <div class="buttonContainerPrimates">
        <button
          type="button"
          class="primatesButton"
          id="modalBtn1"
          onClick={() => {
            setOpenModalElephant(false);
            setOpenModalHippopotamus(false);
            setOpenModalAviary(false);
            setOpenModalHyena(false);
            setOpenModalSavanna(false);
            setOpenModalApex(false);
            setOpenModalEndemic(false);
            setOpenModalReptile(false);
            setOpenModalMuseum(false);
            setOpenModalInReptile(false);
            setOpenModalLagoon(false);
            setOpenModalIsland(false);
            setOpenModalPrimates(true);
            setOpenModalButterfly(false);
            setOpenModalBotanical(false);
          }}
        >
          <FaMapMarkerAlt
            size={pinSize}
            style={{
              color: "#145da0",
              stroke: "white",
              strokeWidth: "8",
              //borderColor: "transparent",
            }}
          />
        </button>
        <div class="buttonShadow"></div>
      </div>
      <div class="buttonContainerButterfly">
        <button
          type="button"
          class="butterflyButton"
          id="modalBtn1"
          onClick={() => {
            setOpenModalElephant(false);
            setOpenModalHippopotamus(false);
            setOpenModalAviary(false);
            setOpenModalHyena(false);
            setOpenModalSavanna(false);
            setOpenModalApex(false);
            setOpenModalEndemic(false);
            setOpenModalReptile(false);
            setOpenModalMuseum(false);
            setOpenModalInReptile(false);
            setOpenModalLagoon(false);
            setOpenModalIsland(false);
            setOpenModalPrimates(false);
            setOpenModalButterfly(true);
            setOpenModalBotanical(false);
          }}
        >
          <FaMapMarkerAlt
            size={pinSize}
            style={{
              color: "#145da0",
              stroke: "white",
              strokeWidth: "8",
              //borderColor: "transparent",
            }}
          />
        </button>
        <div class="buttonShadow"></div>
      </div>
      <div class="buttonContainerBotanical">
        <button
          type="button"
          class="botanicalButton"
          id="modalBtn1"
          onClick={() => {
            setOpenModalElephant(false);
            setOpenModalHippopotamus(false);
            setOpenModalAviary(false);
            setOpenModalHyena(false);
            setOpenModalSavanna(false);
            setOpenModalApex(false);
            setOpenModalEndemic(false);
            setOpenModalReptile(false);
            setOpenModalMuseum(false);
            setOpenModalInReptile(false);
            setOpenModalLagoon(false);
            setOpenModalIsland(false);
            setOpenModalPrimates(false);
            setOpenModalButterfly(false);
            setOpenModalBotanical(true);
          }}
        >
          <FaMapMarkerAlt
            size={pinSize}
            style={{
              color: "#145da0",
              stroke: "white",
              strokeWidth: "8",
              //borderColor: "transparent",
            }}
          />
        </button>
        <div class="buttonShadow"></div>
      </div>
      {openModalElephant && (
        <ElephantModal closeModalElephant={setOpenModalElephant} />
      )}
      {openModalHippopotamus && (
        <HippopotamusModal closeModalHippopotamus={setOpenModalHippopotamus} />
      )}
      {openModalAviary && <AviaryModal closeModalAviary={setOpenModalAviary} />}
      {openModalHyena && <HyenaModal closeModalHyena={setOpenModalHyena} />}
      {openModalSavanna && (
        <SavannaModal closeModalSavanna={setOpenModalSavanna} />
      )}
      {openModalApex && <ApexModal closeModalApex={setOpenModalApex} />}
      {openModalEndemic && (
        <EndemicModal closeModalEndemic={setOpenModalEndemic} />
      )}
      {openModalReptile && (
        <ReptileModal closeModalReptile={setOpenModalReptile} />
      )}
      {openModalMuseum && <MuseumModal closeModalMuseum={setOpenModalMuseum} />}
      {openModalInReptile && (
        <InReptileModal closeModalInReptile={setOpenModalInReptile} />
      )}
      {openModalLagoon && <LagoonModal closeModalLagoon={setOpenModalLagoon} />}
      {openModalIsland && <IslandModal closeModalIsland={setOpenModalIsland} />}
      {openModalPrimates && (
        <PrimatesModal closeModalPrimates={setOpenModalPrimates} />
      )}
      {openModalButterfly && (
        <ButterflyModal closeModalButterfly={setOpenModalButterfly} />
      )}
      {openModalBotanical && (
        <BotanicalModal closeModalBotanical={setOpenModalBotanical} />
      )}

      <script src="main.js"></script>
      {/* </div> */}
    </div>
  );
};

export default MapScreen;
