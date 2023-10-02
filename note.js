"use strict";

const createBtn = document.querySelector("#newbTn");
const noteForm = document.querySelector(".Nform");
const crossbtn = document.querySelector('.crossBtn')

const heading = document.querySelector('.heading')
const textNote = document.querySelector('.textNote')
const createbTn = document.querySelector('.createbTn')
const colorSlide = document.querySelector('.colorSlide')


createBtn.addEventListener("click", function (e) {
  if (!(e.target === createBtn || e.target.closest("#newbTn") === createBtn))
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
  crossbtn.style.backgroundColor = `var(--color-${color})`;
  heading.style.backgroundColor = `var(--color-${color})`;
  textNote.style.backgroundColor = `var(--color-${color})`;
  createbTn.style.backgroundColor = `var(--color-${color})`;
})

createbTn.addEventListener('click',function(e){

})