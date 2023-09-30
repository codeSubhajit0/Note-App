"use strict"
const createBtn = document.querySelector('.create');
const img = document.querySelector('.plus_icon');
const noteSec = document.querySelector('.note_form');


createBtn.addEventListener('click', function(e){
    if(!(e.target == createBtn || e.target.closest('.create') == createBtn)) 
    return;
    createBtn.classList.add('animate');
    setTimeout(function(){
        createBtn.classList.remove('animate');
    },200); 
    noteSec.classList.toggle('note_form_note');
});
 
