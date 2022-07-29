/* Coloque o JS neste arquivo */

//Header Menu

const headerFooterWords = ['Categoria lorem', 'Categoria', 'Categoria lorem ipsum', 'Categoria lorem', 'Categoria', 'Categoria lorem ipsum'];

const headerFooterContent = document.getElementsByClassName('header-footer-content')[0];

const headerFooterDad = document.createElement('div');
headerFooterDad.setAttribute('class', 'header-footer-words pointer');

const navBar = document.createElement('i') 
navBar.setAttribute('class', 'fa-solid fa-bars fa-lg') 

headerFooterContent.appendChild(headerFooterDad);
headerFooterContent.appendChild(navBar);

for(let x=0; x<headerFooterWords.length; x++){
    const word = document.createElement('p')
    word.innerText = headerFooterWords[x]

    headerFooterDad.appendChild(word)
}

//News Cards
for(let x=0; x<4; x++){
    const card = document.getElementsByClassName(`card${x+1}`)[0]

    const p1 = document.createElement('p');
    p1.innerText = 'Lorem ipsum dolor summit'

    const span1 = document.createElement('span');
    span1.innerText = 'R$ 99,99'

    card.appendChild(p1);
    card.appendChild(span1);
}

//Highlights Cards
for(let x=0; x<8; x++){
    const highlightCard = document.getElementsByClassName(`highligths-card${x+1}`)[0]

    const p1 = document.createElement('p');
    p1.innerText = 'Lorem ipsum dolor summit'

    const span1 = document.createElement('span');
    span1.innerText = 'R$ 99,99'

    highlightCard.appendChild(p1);
    highlightCard.appendChild(span1);
}