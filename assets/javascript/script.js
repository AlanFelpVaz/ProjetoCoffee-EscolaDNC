function mouseEnter(){

const cards = document.querySelectorAll('.cards-over');

const buttons = document.querySelectorAll('.cardBtn')

cards.forEach(button =>{

    button.addEventListener('mouseover', (event) =>{
        event.currentTarget.closest('.cards-over').querySelector('.cardBtn').style.display = "block";
    });
    
    button.addEventListener('mouseout', (event) =>{
        event.currentTarget.closest('.cards-over').querySelector('.cardBtn').style.display = "none";
    });

});
}



