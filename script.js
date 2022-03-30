const btnlancement=document.querySelector('.btnlancement');
const nav=document.querySelector('nav');
const note=document.querySelector('.note');
const colonne=document.querySelector('.Colonne');
const textarea=document.querySelector('textarea');
const date=document.getElementById('date')
const hdebut=document.getElementById('hdebut');
const hfin=document.getElementById('hfin');
const valider=document.querySelector('.form').lastElementChild;


/* valider.addEventListener('click',function(){
   
})
 */
const modalContainer=document.getElementById('modal-container');
const suppModal=document.querySelector('.suppModal');
const modal=document.querySelector('.modal');
const tab=['#DBA576','#e864ad8a','#5C322C','#36798F','#488C66']


const main=document.getElementById('main');
var i=0;

btnlancement.addEventListener('click',function(){
    alert('ok')
    nav.classList.toggle('show-nav')
})

colonne.addEventListener('click',function(){
    if (i<5) {
        i++;
        createColonne();
        
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

function createColonne() {

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
    suppColonne.classList.add(`c${i}`)
    divColonne.style.backgroundColor=tab[i-1];



    divTitre.appendChild(spanTitre);
    divTitre.appendChild(suppColonne);
    divColonne.appendChild(divTitre);
    divColonne.appendChild(divContainer);
    main.appendChild(divColonne);
    /*  const c1=document.querySelector('.c1'); */
    
     suppColonne.addEventListener('click',function(e){
        var tab=e.target.classList;
        if (tab[1]!='c1') {
            e.target.parentElement.parentElement.remove();
            i--;
            reflesh();
        }else{
            if (e.target.parentElement.parentElement.nextSibling==null) {
                e.target.parentElement.parentElement.remove();
                i--;
                reflesh();
            }else{
                 alert('Veillez supprimer les autres pour pouvoir supprimer cette colonne')
            }
        }
    })
}


function reflesh() {
    const titre=document.querySelectorAll('.titre');
    titre.forEach((elm,k)=>{
        elm.firstChild.innerText=`Colonne ${k+1}`;
        elm.parentElement.style.backgroundColor=tab[k]
        
    })
   
  
}
