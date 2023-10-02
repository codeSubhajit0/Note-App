"use strict";

const createBtn = document.querySelector("#newbTn");
const noteForm = document.querySelector(".Nform");

createBtn.addEventListener("click", function (e) {
  // console.log(e.target === createBtn|| e.target.closest('#newbTn') === createBtn);

  if (!(e.target === createBtn || e.target.closest("#newbTn") === createBtn))
    return;
  // console.log('hello');

  noteForm.classList.toggle("Nform_active");
});
