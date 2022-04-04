const btnlancement=document.querySelector('.btnlancement');
const nav=document.querySelector('nav');
const note=document.querySelector('.note');
const colonne=document.querySelector('.Colonne');
const textarea=document.querySelector('textarea');
const inputDate=document.getElementById('date')
const inputHdebut=document.getElementById('hdebut');
const inputHfin=document.getElementById('hfin');
const valider=document.querySelector('.form').lastElementChild; 
const form=document.querySelector('.form')
const valForm=form.querySelectorAll('input')
const modalContainer=document.getElementById('modal-container');
const suppModal=document.querySelector('.suppModal');
const modal=document.querySelector('.modal');
const tab=['#DBA576','#e864ad8a','#5C322C','#36798F','#488C66']




const main=document.getElementById('main');
var i=0;

btnlancement.addEventListener('click',function(){
    nav.classList.toggle('show-nav')
})

colonne.addEventListener('click',function(){
    if (i<5) {
        i++;
        createColonne();
        affMasq()
        
    }else{
        alert('vous avez atteint le nombre maximum de colonnes')
    }
})
/*  setInterval(() => {
    createTache()
}, (5000));
 */

note.addEventListener('click',function(){
    if (i>0) {
            modalContainer.classList.toggle('show-modal');
           
    }
    if(i<1){
        alert('veillez ajouter minimum une colonne')
    }
    suppModal.addEventListener('click',function(){
        modalContainer.classList.remove('show-modal');
        textarea.value='';
       
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
    const img =document.createElement('img');

    divTitre.setAttribute('class', 'titre');
    
    suppColonne.setAttribute('class','suppColonne')
    divContainer.setAttribute('class','container');
    divColonne.setAttribute('class','colonne');
    img.src='img/trelliongris.jpg'
    divColonne.classList.add('pullUp');
    suppColonne.classList.add(`c${i}`)
    divColonne.style.backgroundColor=tab[i-1];
    


    divContainer.appendChild(img)
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
            affMasq()
            i--;
            reflesh();
        }else{
            if (e.target.parentElement.parentElement.nextSibling==null) {
                e.target.parentElement.parentElement.remove();
                affMasq()
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



function createTache() {
    const container=document.querySelector('.container');
    const mainTache=document.createElement('div');
    const containTache=document.createElement('div');
    const btnLeft=document.createElement('div');
    const btnRight=document.createElement('div');
    const nomTache=document.createElement('p');
    const infoTache=document.createElement('p');

    mainTache.setAttribute('class','mainTache');
    btnLeft.setAttribute('class','btnLeft btn bL');
    btnRight.setAttribute('class','btnRight btn bR');
    containTache.setAttribute('class','containTache');

    let Tache = {
        nom : textarea.value,
        heure_debut : moment(inputHdebut.value,'HH:mm'),
        heure_fin : moment(inputHfin.value,'HH:mm'),
        date : inputDate.value,
        dateConcat : `${inputDate.value} ${inputHdebut.value}`,
    };

    var now = moment();

//    console.log(dateHdebut);
    nomTache.textContent=Tache.nom;
    infoTache.textContent=`${Tache.date} de ${inputHdebut.value} à ${inputHfin.value}`

    btnLeft.innerText='<<';
    btnRight.innerText='>>';

    var x=setInterval(() => {
        var dateHdebut= moment(Tache.dateConcat,'YYYY-MM-DD HH:mm')
        if (dateHdebut==now) {
            alert('ok');
            setTimeout(() => {
                containTache.backgroundColor='green'
            }, (Tache.heure_fin.diff(Tache.heure_debut)));
        clearInterval(x);

        }

    }, 1); 
    

    containTache.appendChild(nomTache);
    containTache.appendChild(infoTache);
    mainTache.appendChild(btnLeft);
    mainTache.appendChild(containTache);
    mainTache.appendChild(btnRight);
    container.appendChild(mainTache);
    affMasq();

    btnRight.addEventListener('click', function(e) {
        if (e.target.parentElement.parentElement.parentElement.nextElementSibling!=null) {
            e.target.parentElement.parentElement.parentElement.nextElementSibling.lastElementChild.appendChild(e.target.parentElement);
            affMasq();
        }

    })

    btnLeft.addEventListener('click', function(e) {
        if (e.target.parentElement.parentElement.parentElement.previousElementSibling!=null) {
            e.target.parentElement.parentElement.parentElement.previousElementSibling.lastElementChild.appendChild(e.target.parentElement);
            affMasq();
        }
    })

}

valider.addEventListener('click',function(){
    var now=moment();
    var hdebut=moment(inputHdebut.value,'HH:mm:ss');
    var hfin=moment(inputHfin.value,'HH:mm:ss');
    var dateConcat=`${inputDate.value} ${inputHdebut.value}`;
    var dateHdebut=moment(dateConcat,'YYYY-MM-DD HH:mm');
    const input=document.querySelectorAll('.input');
    checkRequired(input)
    
    
    if ((dateHdebut.diff(now)<0) || (isNaN(dateHdebut.diff(now))) || (hfin.diff(hdebut)<=0) || (isNaN(hfin.diff(hdebut))) || (textarea.value=='')) {
        alert('Veillez verifiez les données saisies')
    }else{
        createTache();
        affMasq()
        input.forEach(valeur => {
            valeur.value=''
        })
        modalContainer.classList.remove('show-modal');
    } 
}) 


function affMasq() {
    const bLs=document.querySelectorAll('.bL');
    const bRs=document.querySelectorAll('.bR')

    bRs.forEach(bR => {
        
        if (bR.parentElement.parentElement.parentElement.nextElementSibling==null) {
            bR.style.visibility="hidden"; 
        }else{
            bR.style.visibility="visible"; 
        } 
    })

    bLs.forEach(bL => {
        
        if (bL.parentElement.parentElement.parentElement.previousElementSibling==null) {
            bL.style.visibility="hidden"; 
        }else{
            bL.style.visibility="visible"; 
        }  
    })
 
} 


// fonctions de validation

function showError(input, message) {
    const c = input.parentElement;
    c.className = 'c';
    input.style.backgroundColor = 'red';
    const small = c.querySelector('small');
    small.innerText = message;   
}
function showSuccess(input) {

    const c = input.parentElement;
    c.className = 'c';
    input.style.backgroundColor = 'white';
    const small = c.querySelector('small');
    small.innerText = '';
}

function checkRequired(inputArray) {// Tester si les champs ne sont pas vides
    inputArray.forEach(input => {
        if (input.value.trim() === '') {
            showError(input,`${getFieldName(input)} is required`);
        }else{
            showSuccess(input);
        }
    });
}
function getFieldName(input) {//Retour le nom de chaque input en se basant sur son id
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

