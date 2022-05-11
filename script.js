let darkMode = true;
let darkModeBtn = document.getElementById('darkModeBtn');
let logoImg = document.getElementById('logoImg');
let darkModeImg = document.getElementById('darkModeImg');
let paraTextClass = document.getElementsByTagName('p');
let headerClass = document.getElementsByTagName('h2');
let linkClass = document.getElementsByTagName('a');
let listClass = document.getElementsByTagName('li');
let iconClass = document.getElementsByTagName('i');


function changeColors(){
   //WHITE MODE
   if(darkMode == true){
      darkMode = false;
      document.body.style.backgroundColor = "#E5E5E5";

      //LOGO IMAGE
      logoImg.src='./assets/logo_white.png';
      darkModeImg.src='./assets/moon.png';
      //darkModeImg.style.paddingLeft= "10px"

      //PARAGRAPHS <p>
      for(let i = 0; i < paraTextClass.length; i++){
         paraTextClass[i].style.color = "#24252A";
         paraTextClass[i].style.fontWeight= "bold";
      }
      //HEADERS <h2>
      for(let i = 0; i < headerClass.length; i++){
         headerClass[i].style.color = "#1E48C2";
      }
      //LISTS <li>
      for(let i = 0; i < listClass.length; i++){
         listClass[i].style.color = "#24252A";
      }
      //LINK <a>
      for(let i = 0; i < linkClass.length; i++){
         linkClass[i].style.color = "#24252A";
         linkClass[i].style.fontWeight= "bold";
      }
      //ICONES <i>
      for(let i = 0; i < iconClass.length; i++){
         iconClass[i].style.color = "#24252A";
      }
      //DARK MODE
   } else if(darkMode == false) {
      darkMode = true;
      document.body.style.backgroundColor = "#24252A";
      logoImg.src='./assets/logo.png';
      darkModeImg.src='./assets/sun.png';
      //darkModeImg.style.paddingLeft= "0 px"

      //PARAGRAPHS <p>
      for(let i = 0; i < paraTextClass.length; i++){
         paraTextClass[i].style.color = "#edf0f1";
         paraTextClass[i].style.fontWeight= "normal";
      }
      //HEADERS <h2>
      for(let i = 0; i < headerClass.length; i++){
         headerClass[i].style.color = "#537bf5";
      }
      //LISTS <li>
      for(let i = 0; i < listClass.length; i++){
         listClass[i].style.color = "#E5E5E5";
      }
      //LINK <a>
      for(let i = 0; i < linkClass.length; i++){
         linkClass[i].style.color = "#E5E5E5";
         linkClass[i].style.fontWeight= "normal";
      }
      //ICONES <i>
      for(let i = 0; i < iconClass.length; i++){
         iconClass[i].style.color = "#E5E5E5";
      }
   }
}

function hovers(){
   for(let i = 0; i < listClass.length; i++){
      listClass[i].style.color = "red";
   }
}

//Change les couleurs pour le dark mode
darkModeBtn.addEventListener('click', changeColors);

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button =>{
   button.addEventListener('click', () =>{
      const modal = document.querySelector(button.dataset.modalTarget)
      openModal(modal)
   })
})

overlay.addEventListener('click', () =>{
   const modals = document.querySelectorAll('.modal.active')
   modals.forEach(modal =>{
      closeModal(modal)
   })
})

closeModalButtons.forEach(button =>{
   button.addEventListener('click', () =>{
      const modal = button.closest('.modal')
      closeModal(modal)
   })
})

function openModal(modal){
   if (modal == null) return
   modal.classList.add('active')
   overlay.classList.add('active')
}

function closeModal(modal){
   if (modal == null) return
   modal.classList.remove('active')
   overlay.classList.remove('active')
}