"use strict";

const newBtn = document.querySelector("#newbTn");
const noteForm = document.querySelector(".Nform");
const crossbtn = document.querySelector('.crossBtn')

const heading = document.querySelector('.heading')
const textNote = document.querySelector('.textNote')
const createbTn = document.querySelector('.createbTn')
const colorSlide = document.querySelector('.colorSlide')

let colorMain = "var(--color-1)";

newBtn.addEventListener("click", function (e) {
  if (!(e.target === newBtn || e.target.closest("#newbTn") === newBtn))
    return;
  // console.log('hello');
  noteForm.classList.add("Nform_active");
});

crossbtn.addEventListener('click',function(e){
  if(!(e.target === crossbtn || e.target.closest('.crossBtn')))
  return;
  noteForm.classList.remove("Nform_active");
});

colorSlide.addEventListener('click',function(e){
  if( !(e.target.classList[0] === 'color')) return;
  let color = e.target.dataset.num;
  colorMain = `var(--color-${color})`;
  crossbtn.style.backgroundColor = `var(--color-${color})`;
  heading.style.backgroundColor = `var(--color-${color})`;
  textNote.style.backgroundColor = `var(--color-${color})`;
  createbTn.style.backgroundColor = `var(--color-${color})`;
})


const notes = [];

class App {
  constructor(title,text,color){
    this.title = title;
    this.text = text;
    this.color = color;
  }
}


createbTn.addEventListener('click',function(e){
    // console.log('hi');
    let NoteHeading = heading.value;
    let NoteContent = textNote.value;
    console.log(NoteContent);
    heading.value = "";
    textNote.value = "";
    notes.push(new App(NoteHeading,NoteContent,colorMain));
    console.log(notes);
    console.log(window.getComputedStyle(textNote).background);
    
})

