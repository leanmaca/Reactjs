import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { db } from "../../services/firebase-config";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";

const shuffleOptions = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));

    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

export const data = [
  {
    question: "What’s the biggest planet in our solar system?",
    options: ["Jupiter", "Saturn", "Neptune", "Mercury"],
    correct_option: "Jupiter",
  },
  {
    question: "What attraction in India is one of the famus in the world?",
    options: ["Chand Minar", "Taj Mahal", "Stadium"],
    correct_option: "Taj Mahal",
  },
  {
    question: "What land animal can open its mouth the widest?",
    options: ["Alligator", "Crocodile", "Baboon", "Hippo"],
    correct_option: "Hippo",
  },
  {
    question: "What is the largest animal on Earth?",
    options: [
      "The African elephant",
      "The blue whale",
      "The sperm whale",
      "The giant squid",
    ],
    correct_option: "The blue whale",
  },
  {
    question: "What is the only flying mammal?",
    options: ["The bat", "The flying squirrel", "The bald eagle", "The colugo"],
    correct_option: "The bat",
  },
];
