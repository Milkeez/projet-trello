const btnlancement=document.querySelector('.btnlancement');
const nav=document.querySelector('nav');
const note=document.querySelector('.note');
const colonne=document.querySelector('.Colonne');

const modalContainer=document.getElementById('modal-container');
const suppModal=document.querySelector('.suppModal');
const modal=document.querySelector('.modal');


const main=document.getElementById('main');
var i=0;

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
    suppModal.addEventListener('click',function(){
        modalContainer.classList.remove('show-modal')
       
    })

    
})

function createColonne(i) {

    const spanTitre=document.createElement('span');
    spanTitre.innerText=`Colonne ${i}`
    const suppColonne=document.createElement('span')
    suppColonne.innerText='X'
    const divTitre=document.createElement('div');
    const divContainer=document.createElement('div');
    const divColonne=document.createElement('div');

    divTitre.setAttribute('class', 'titre');
    suppColonne.setAttribute('class','suppColonne')
    divContainer.setAttribute('class','container');
    divColonne.setAttribute('class','colonne');
    divColonne.classList.add('pullUp');
    divColonne.classList.add(`c${i}`);



    divTitre.appendChild(spanTitre);
    divTitre.appendChild(suppColonne);
    divColonne.appendChild(divTitre);
    divColonne.appendChild(divContainer);
    main.appendChild(divColonne);

}
