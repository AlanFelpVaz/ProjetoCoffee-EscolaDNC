const linkModal = document.querySelector("#openModal");

const fecharModal = document.querySelector("#closeModal");

const modal = document.querySelector("#modalSec");

const fade = document.querySelector("#fadeModal");

function toggleModal (){
    modal.classList.toggle("hide")
    fade.classList.toggle("hide")
}