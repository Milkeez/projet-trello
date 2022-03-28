const btnlancement=document.querySelector('.btnlancement');
const nav=document.querySelector('nav');
const note=document.querySelector('.note');
const colonne=document.querySelector('.Colonne');

const modalContainer=document.getElementById('modal-container');
const main=document.getElementById('main');
var i=0;
var nbrColonnes=0;

function createColonne(i) {

    const span=document.createElement('span');
    span.innerText=`Colonne ${i}`
    const divTitre=document.createElement('div');
    const divContainer=document.createElement('div');
    const divColonne=document.createElement('div');

    divTitre.setAttribute('class', 'titre');
    divContainer.setAttribute('class','container');
    divColonne.setAttribute('class','colonne');
    divColonne.classList.add('pullUp');
    divColonne.classList.add(`c${i}`);



    divTitre.appendChild(span);
    divColonne.appendChild(divTitre);
    divColonne.appendChild(divContainer);
    main.appendChild(divColonne);

}

btnlancement.addEventListener('click',function(){
    nav.classList.toggle('show-nav')
})

colonne.addEventListener('click',function(){
    if (i<5) {
        i++;
        createColonne(i);
    }else{
        alert('vous avez atteint le nombre maximum de colonnes')
    }
})


note.addEventListener('click',function(){
    if (i>0) {
            modalContainer.classList.toggle('show-modal')
    }
    if(i<1){
        alert('veillez ajouter minimum une colonne')
    }
    
})   