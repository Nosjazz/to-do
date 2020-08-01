// Select the Elements

const clear = document.querySelector(".clear");

const dateElement= document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

// Classes names
const CHECK ="fa-check-circle";
const UNCHECK = "fa-circle";
const LINE_TROUGH ="lineThrough";


// Show today
const options = {weekday : "long",  month:"short", day:"numeric"};
const today = new Date ();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);