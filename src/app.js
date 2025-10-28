import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

document.addEventListener("DOMContentLoaded", () => {
  const values = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
  const suits  = ["♥","♦","♣","♠"];

  const value = values[Math.floor(Math.random() * values.length)];
  const suit  = suits[Math.floor(Math.random() * suits.length)];

  // coloca símbolos y número
  document.querySelector(".symbolUp").textContent   = suit;
  document.querySelector(".number").textContent     = value;
  document.querySelector(".symbolDown").textContent = suit;

  // color según el palo
  const isRed = suit === "♥" || suit === "♦";
  const color = isRed ? "red" : "black";
  document.querySelector(".symbolUp").style.color   = color;
  document.querySelector(".number").style.color     = color;
  document.querySelector(".symbolDown").style.color = color;
  document.querySelector(".number").style.color = "black"
});


window.onload = function() {
  //write your code here
  
};
