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
const map = require("./css/zoomap2.png");

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

  return (
    <div>
      <img class="imagebackground" src={map} />
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
      ></button>

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
      ></button>

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
      ></button>

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
        Hyena
      </button>

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
        Savanna
      </button>

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
        Apex Predators
      </button>

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
        Philippine Endemic
      </button>

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
        Outdoor Reptile
      </button>

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
        Museum
      </button>

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
        Indoor Reptile
      </button>

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
        Lagoon
      </button>

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
        Center Island
      </button>

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
        Primates
      </button>

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
        Butterfly Garden
      </button>

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
        Botanical Museum
      </button>

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
