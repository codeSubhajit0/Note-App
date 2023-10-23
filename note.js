"use strict";

const newBtn = document.querySelector("#newbTn");
const noteForm = document.querySelector(".Nform");
const crossbtn = document.querySelector(".crossBtn");

const heading = document.querySelector(".heading");
const textNote = document.querySelector(".textNote");
const createbTn = document.querySelector(".createbTn");
const colorSlide = document.querySelector(".colorSlide");

const previos = document.querySelector(".notes");
let note;
let colorMain = "var(--color-1)";

let notes = {};  
let NoteHeading;


class App {
  constructor(title, text, color) {
    this.title = title;
    this.text = text;
    this.color = color;
  }
}

// This is used for initial loding of notes and add some data to local storage
const initial = function () {
  note = JSON.parse(localStorage.getItem("notes"));
  console.log(note);
  // note.forEach((element, index) => {
  //   const newSection = document.createElement("section");
  //   newSection.classList.add("note");
  //   newSection.textContent = `${element.title}`;
  //   previos.insertBefore(newSection, previos.children[0]);
  //   newSection.style.backgroundColor = element.color;
  // });
};
initial();

// Opening the new note form 
newBtn.addEventListener("click", function (e) {
  if (!(e.target === newBtn || e.target.closest("#newbTn") === newBtn)) return;
  // console.log('hello');
  noteForm.classList.add("Nform_active");
});

// Closing the note form
crossbtn.addEventListener("click", function (e) {
  if (!(e.target === crossbtn || e.target.closest(".crossBtn"))) return;
  noteForm.classList.remove("Nform_active");
});

// Changed the background color of the note
colorSlide.addEventListener("click", function (e) {
  if (!(e.target.classList[0] === "color")) return;
  let color = e.target.dataset.num;
  colorMain = `var(--color-${color})`;
  crossbtn.style.backgroundColor = `var(--color-${color})`;
  heading.style.backgroundColor = `var(--color-${color})`;
  textNote.style.backgroundColor = `var(--color-${color})`;
  createbTn.style.backgroundColor = `var(--color-${color})`;
});

const setItemToLocalstoraeg = function (heading) {
  console.log(notes);
  localStorage.setItem(heading, JSON.stringify(notes));
};

const getItemFromLocalstorage = function () {
  note = JSON.parse(localStorage.getItem(NoteHeading));
  console.log(localStorage);
  prevNotes();
};

// const prevNotes = function () {
//   // previos.insertAdjacentHTML = `<section class="note">${note[0].title}</section>`;
//   localStorage.forEach((element, index) => {
//     if (index == notes.length - 1) {
//       const newSection = document.createElement("section");
//       newSection.classList.add("note");
//       newSection.textContent = `${element.title}`;
//       previos.insertBefore(newSection, previos.children[0]);
//       newSection.style.backgroundColor = element.color;
//     }
//   });
// };

// Functionality of the create button
createbTn.addEventListener("click", function (e) {
  NoteHeading = heading.value;
  let NoteContent = textNote.value;
  console.log(NoteContent);
  heading.value = "";
  textNote.value = "";
  notes = new App(NoteHeading, NoteContent, colorMain);
  setItemToLocalstoraeg(NoteHeading);
  getItemFromLocalstorage();
  initial();
});

console.log(Object.keys(localStorage));