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
  FountainModal,
  ParkModal,
  FoodModal,
  TicketModal,
  ParkingModal,
  EModal,
  FModal,
  GModal,
  CModal,
  C2Modal,
  Lagoon2Modal,
  Parking2Modal,
  Food2Modal,
} from "./Modals";
import { useState } from "react";
import { FaVolumeUp, FaArrowLeft, FaMapMarkerAlt } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MdLocationPin } from "react-icons/md";
const map = require("./css/vertmapcomp.png");

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
  const [openModalFountain, setOpenModalFountain] = useState(false);
  const [openModalPark, setOpenModalPark] = useState(false);
  const [openModalFood, setOpenModalFood] = useState(false);
  const [openModalTicket, setOpenModalTicket] = useState(false);
  const [openModalParking, setOpenModalParking] = useState(false);
  const [openModalE, setOpenModalE] = useState(false);
  const [openModalF, setOpenModalF] = useState(false);
  const [openModalG, setOpenModalG] = useState(false);
  const [openModalC, setOpenModalC] = useState(false);
  const [openModalC2, setOpenModalC2] = useState(false);
  const [openModalParking2, setOpenModalParking2] = useState(false);
  const [openModalFood2, setOpenModalFood2] = useState(false);
  const [openModalLagoon2, setOpenModalLagoon2] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const [openModal4, setOpenModal4] = useState(false);

  const pinSize = 35;

  return (
    <div>
      <img class="imagebackground" src={map} />
      <div class="legendBox"></div>
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
            setOpenModalFountain(false);
            setOpenModalPark(false);
            setOpenModalFood(false);
            setOpenModalTicket(false);
            setOpenModalParking(false);
            setOpenModalE(false);
            setOpenModalF(false);
            setOpenModalG(false);
            setOpenModalC(false);
            setOpenModalC2(false);
            setOpenModalParking2(false);
            setOpenModalFood2(false);
            setOpenModalLagoon2(false);
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
            setOpenModalFountain(false);
            setOpenModalPark(false);
            setOpenModalFood(false);
            setOpenModalTicket(false);
            setOpenModalParking(false);
            setOpenModalE(false);
            setOpenModalF(false);
            setOpenModalG(false);
            setOpenModalC(false);
            setOpenModalC2(false);
            setOpenModalParking2(false);
            setOpenModalFood2(false);
            setOpenModalLagoon2(false);
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
            setOpenModalFountain(false);
            setOpenModalPark(false);
            setOpenModalFood(false);
            setOpenModalTicket(false);
            setOpenModalParking(false);
            setOpenModalE(false);
            setOpenModalF(false);
            setOpenModalG(false);
            setOpenModalC(false);
            setOpenModalC2(false);
            setOpenModalParking2(false);
            setOpenModalFood2(false);
            setOpenModalLagoon2(false);
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
            setOpenModalFountain(false);
            setOpenModalPark(false);
            setOpenModalFood(false);
            setOpenModalTicket(false);
            setOpenModalParking(false);
            setOpenModalE(false);
            setOpenModalF(false);
            setOpenModalG(false);
            setOpenModalC(false);
            setOpenModalC2(false);
            setOpenModalParking2(false);
            setOpenModalFood2(false);
            setOpenModalLagoon2(false);
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
            setOpenModalFountain(false);
            setOpenModalPark(false);
            setOpenModalFood(false);
            setOpenModalTicket(false);
            setOpenModalParking(false);
            setOpenModalE(false);
            setOpenModalF(false);
            setOpenModalG(false);
            setOpenModalC(false);
            setOpenModalC2(false);
            setOpenModalParking2(false);
            setOpenModalFood2(false);
            setOpenModalLagoon2(false);
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
            setOpenModalFountain(false);
            setOpenModalPark(false);
            setOpenModalFood(false);
            setOpenModalTicket(false);
            setOpenModalParking(false);
            setOpenModalE(false);
            setOpenModalF(false);
            setOpenModalG(false);
            setOpenModalC(false);
            setOpenModalC2(false);
            setOpenModalParking2(false);
            setOpenModalFood2(false);
            setOpenModalLagoon2(false);
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
            setOpenModalFountain(false);
            setOpenModalPark(false);
            setOpenModalFood(false);
            setOpenModalTicket(false);
            setOpenModalParking(false);
            setOpenModalE(false);
            setOpenModalF(false);
            setOpenModalG(false);
            setOpenModalC(false);
            setOpenModalC2(false);
            setOpenModalParking2(false);
            setOpenModalFood2(false);
            setOpenModalLagoon2(false);
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
            setOpenModalFountain(false);
            setOpenModalPark(false);
            setOpenModalFood(false);
            setOpenModalTicket(false);
            setOpenModalParking(false);
            setOpenModalE(false);
            setOpenModalF(false);
            setOpenModalG(false);
            setOpenModalC(false);
            setOpenModalC2(false);
            setOpenModalParking2(false);
            setOpenModalFood2(false);
            setOpenModalLagoon2(false);
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
            setOpenModalFountain(false);
            setOpenModalPark(false);
            setOpenModalFood(false);
            setOpenModalTicket(false);
            setOpenModalParking(false);
            setOpenModalE(false);
            setOpenModalF(false);
            setOpenModalG(false);
            setOpenModalC(false);
            setOpenModalC2(false);
            setOpenModalParking2(false);
            setOpenModalFood2(false);
            setOpenModalLagoon2(false);
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
            setOpenModalFountain(false);
            setOpenModalPark(false);
            setOpenModalFood(false);
            setOpenModalTicket(false);
            setOpenModalParking(false);
            setOpenModalE(false);
            setOpenModalF(false);
            setOpenModalG(false);
            setOpenModalC(false);
            setOpenModalC2(false);
            setOpenModalParking2(false);
            setOpenModalFood2(false);
            setOpenModalLagoon2(false);
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
            setOpenModalFountain(false);
            setOpenModalPark(false);
            setOpenModalFood(false);
            setOpenModalTicket(false);
            setOpenModalParking(false);
            setOpenModalE(false);
            setOpenModalF(false);
            setOpenModalG(false);
            setOpenModalC(false);
            setOpenModalC2(false);
            setOpenModalParking2(false);
            setOpenModalFood2(false);
            setOpenModalLagoon2(false);
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
      <div class="buttonContainerLagoon2">
        <button
          type="button"
          class="lagoon2Button"
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
            setOpenModalBotanical(false);
            setOpenModalFountain(false);
            setOpenModalPark(false);
            setOpenModalFood(false);
            setOpenModalTicket(false);
            setOpenModalParking(false);
            setOpenModalE(false);
            setOpenModalF(false);
            setOpenModalG(false);
            setOpenModalC(false);
            setOpenModalC2(false);
            setOpenModalParking2(false);
            setOpenModalFood2(false);
            setOpenModalLagoon2(true);
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
            setOpenModalFountain(false);
            setOpenModalPark(false);
            setOpenModalFood(false);
            setOpenModalTicket(false);
            setOpenModalParking(false);
            setOpenModalE(false);
            setOpenModalF(false);
            setOpenModalG(false);
            setOpenModalC(false);
            setOpenModalC2(false);
            setOpenModalParking2(false);
            setOpenModalFood2(false);
            setOpenModalLagoon2(false);
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
            setOpenModalFountain(false);
            setOpenModalPark(false);
            setOpenModalFood(false);
            setOpenModalTicket(false);
            setOpenModalParking(false);
            setOpenModalE(false);
            setOpenModalF(false);
            setOpenModalG(false);
            setOpenModalC(false);
            setOpenModalC2(false);
            setOpenModalParking2(false);
            setOpenModalFood2(false);
            setOpenModalLagoon2(false);
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
            setOpenModalFountain(false);
            setOpenModalPark(false);
            setOpenModalFood(false);
            setOpenModalTicket(false);
            setOpenModalParking(false);
            setOpenModalE(false);
            setOpenModalF(false);
            setOpenModalG(false);
            setOpenModalC(false);
            setOpenModalC2(false);
            setOpenModalParking2(false);
            setOpenModalFood2(false);
            setOpenModalLagoon2(false);
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
            setOpenModalFountain(false);
            setOpenModalPark(false);
            setOpenModalFood(false);
            setOpenModalTicket(false);
            setOpenModalParking(false);
            setOpenModalE(false);
            setOpenModalF(false);
            setOpenModalG(false);
            setOpenModalC(false);
            setOpenModalC2(false);
            setOpenModalParking2(false);
            setOpenModalFood2(false);
            setOpenModalLagoon2(false);
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
      <div class="buttonContainerFountain">
        <button
          type="button"
          class="fountainButton"
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
            setOpenModalBotanical(false);
            setOpenModalFountain(true);
            setOpenModalPark(false);
            setOpenModalFood(false);
            setOpenModalTicket(false);
            setOpenModalParking(false);
            setOpenModalE(false);
            setOpenModalF(false);
            setOpenModalG(false);
            setOpenModalC(false);
            setOpenModalC2(false);
            setOpenModalParking2(false);
            setOpenModalFood2(false);
            setOpenModalLagoon2(false);
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
      <div class="buttonContainerPark">
        <button
          type="button"
          class="parkButton"
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
            setOpenModalBotanical(false);
            setOpenModalFountain(false);
            setOpenModalPark(true);
            setOpenModalFood(false);
            setOpenModalTicket(false);
            setOpenModalParking(false);
            setOpenModalE(false);
            setOpenModalF(false);
            setOpenModalG(false);
            setOpenModalC(false);
            setOpenModalC2(false);
            setOpenModalParking2(false);
            setOpenModalFood2(false);
            setOpenModalLagoon2(false);
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
      <div class="buttonContainerFood">
        <button
          type="button"
          class="foodButton"
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
            setOpenModalBotanical(false);
            setOpenModalFountain(false);
            setOpenModalPark(false);
            setOpenModalFood(true);
            setOpenModalTicket(false);
            setOpenModalParking(false);
            setOpenModalE(false);
            setOpenModalF(false);
            setOpenModalG(false);
            setOpenModalC(false);
            setOpenModalC2(false);
            setOpenModalParking2(false);
            setOpenModalFood2(false);
            setOpenModalLagoon2(false);
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
      <div class="buttonContainerFood2">
        <button
          type="button"
          class="food2Button"
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
            setOpenModalBotanical(false);
            setOpenModalFountain(false);
            setOpenModalPark(false);
            setOpenModalFood(false);
            setOpenModalTicket(false);
            setOpenModalParking(false);
            setOpenModalE(false);
            setOpenModalF(false);
            setOpenModalG(false);
            setOpenModalC(false);
            setOpenModalC2(false);
            setOpenModalParking2(false);
            setOpenModalFood2(true);
            setOpenModalLagoon2(false);
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
      <div class="buttonContainerTicket">
        <button
          type="button"
          class="ticketButton"
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
            setOpenModalBotanical(false);
            setOpenModalFountain(false);
            setOpenModalPark(false);
            setOpenModalFood(false);
            setOpenModalTicket(true);
            setOpenModalParking(false);
            setOpenModalE(false);
            setOpenModalF(false);
            setOpenModalG(false);
            setOpenModalC(false);
            setOpenModalC2(false);
            setOpenModalParking2(false);
            setOpenModalFood2(false);
            setOpenModalLagoon2(false);
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
      <div class="buttonContainerParking">
        <button
          type="button"
          class="parkingButton"
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
            setOpenModalBotanical(false);
            setOpenModalFountain(false);
            setOpenModalPark(false);
            setOpenModalFood(false);
            setOpenModalTicket(false);
            setOpenModalParking(true);
            setOpenModalE(false);
            setOpenModalF(false);
            setOpenModalG(false);
            setOpenModalC(false);
            setOpenModalC2(false);
            setOpenModalParking2(false);
            setOpenModalFood2(false);
            setOpenModalLagoon2(false);
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
      <div class="buttonContainerParking2">
        <button
          type="button"
          class="parking2Button"
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
            setOpenModalBotanical(false);
            setOpenModalFountain(false);
            setOpenModalPark(false);
            setOpenModalFood(false);
            setOpenModalTicket(false);
            setOpenModalParking(false);
            setOpenModalE(false);
            setOpenModalF(false);
            setOpenModalG(false);
            setOpenModalC(false);
            setOpenModalC2(false);
            setOpenModalParking2(true);
            setOpenModalFood2(false);
            setOpenModalLagoon2(false);
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
      <div class="buttonContainerE">
        <button
          type="button"
          class="eButton"
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
            setOpenModalBotanical(false);
            setOpenModalFountain(false);
            setOpenModalPark(false);
            setOpenModalFood(false);
            setOpenModalTicket(false);
            setOpenModalParking(false);
            setOpenModalE(true);
            setOpenModalF(false);
            setOpenModalG(false);
            setOpenModalC(false);
            setOpenModalC2(false);
            setOpenModalParking2(false);
            setOpenModalFood2(false);
            setOpenModalLagoon2(false);
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
      <div class="buttonContainerF">
        <button
          type="button"
          class="fButton"
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
            setOpenModalBotanical(false);
            setOpenModalFountain(false);
            setOpenModalPark(false);
            setOpenModalFood(false);
            setOpenModalTicket(false);
            setOpenModalParking(false);
            setOpenModalE(false);
            setOpenModalF(true);
            setOpenModalG(false);
            setOpenModalC(false);
            setOpenModalC2(false);
            setOpenModalParking2(false);
            setOpenModalFood2(false);
            setOpenModalLagoon2(false);
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
      <div class="buttonContainerG">
        <button
          type="button"
          class="gButton"
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
            setOpenModalBotanical(false);
            setOpenModalFountain(false);
            setOpenModalPark(false);
            setOpenModalFood(false);
            setOpenModalTicket(false);
            setOpenModalParking(false);
            setOpenModalE(false);
            setOpenModalF(false);
            setOpenModalG(true);
            setOpenModalC(false);
            setOpenModalC2(false);
            setOpenModalParking2(false);
            setOpenModalFood2(false);
            setOpenModalLagoon2(false);
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
      <div class="buttonContainerC">
        <button
          type="button"
          class="cButton"
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
            setOpenModalBotanical(false);
            setOpenModalFountain(false);
            setOpenModalPark(false);
            setOpenModalFood(false);
            setOpenModalTicket(false);
            setOpenModalParking(false);
            setOpenModalE(false);
            setOpenModalF(false);
            setOpenModalG(false);
            setOpenModalC(true);
            setOpenModalC2(false);
            setOpenModalParking2(false);
            setOpenModalFood2(false);
            setOpenModalLagoon2(false);
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
      <div class="buttonContainerC2">
        <button
          type="button"
          class="c2Button"
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
            setOpenModalBotanical(false);
            setOpenModalFountain(false);
            setOpenModalPark(false);
            setOpenModalFood(false);
            setOpenModalTicket(false);
            setOpenModalParking(false);
            setOpenModalE(false);
            setOpenModalF(false);
            setOpenModalG(false);
            setOpenModalC(false);
            setOpenModalC2(true);
            setOpenModalParking2(false);
            setOpenModalFood2(false);
            setOpenModalLagoon2(false);
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
      {openModalLagoon2 && (
        <Lagoon2Modal closeModalLagoon2={setOpenModalLagoon2} />
      )}
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
      {openModalFountain && (
        <FountainModal closeModalFountain={setOpenModalFountain} />
      )}
      {openModalPark && <ParkModal closeModalPark={setOpenModalPark} />}
      {openModalFood && <FoodModal closeModalFood={setOpenModalFood} />}
      {openModalTicket && <TicketModal closeModalTicket={setOpenModalTicket} />}
      {openModalParking && (
        <ParkingModal closeModalParking={setOpenModalParking} />
      )}
      {openModalE && <EModal closeModalE={setOpenModalE} />}
      {openModalF && <FModal closeModalF={setOpenModalF} />}
      {openModalG && <GModal closeModalG={setOpenModalG} />}
      {openModalC && <CModal closeModalC={setOpenModalC} />}
      {openModalC2 && <C2Modal closeModalC2={setOpenModalC2} />}
      {openModalParking2 && (
        <Parking2Modal closeModalParking2={setOpenModalParking2} />
      )}
      {openModalFood2 && <Food2Modal closeModalFood2={setOpenModalFood2} />}

      <script src="main.js"></script>
      {/* </div> */}
    </div>
  );
};

export default MapScreen;
