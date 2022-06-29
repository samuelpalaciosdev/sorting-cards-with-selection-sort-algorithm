// Selectors

let cardsArr = [];
const input = document.querySelector('#amount_of_cards');
const btnDraw = document.querySelector('.btn--draw');
const btnSort = document.querySelector('.btn--sort');
const numsCards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K'];
const suitsCards = ['♦', '♥', '♠', '♣'];

// Card constructor
class Card {
  constructor(num, suit) {
    this.suit = suit;
    this.num = num;
  }
}

// Functions

const getRandomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateCardsArray = (numCards) => {
  let cardsArr = [];

  for (let i = 0; i < numCards; i++) {
    let card = new Card();
    card.suit = suitsCards[getRandomNum(0, suitsCards.length - 1)];
    card.num = numsCards[getRandomNum(0, numsCards.length - 1)];
    cardsArr.push(card);
  }
  return cardsArr;
};

const generateCard = (card) => {
  if (['♦', '♥'].includes(card.suit)) {
    return `<div class="card"> <div class="suit suit--top color--red">${card.suit}</div> <div class="number">${card.num}</div> <div class="suit suit--bottom color--red">${card.suit}</div> </div>`;
  } else {
    return `<div class="card"> <div class="suit suit--top color--black">${card.suit}</div> <div class="number">${card.num}</div> <div class="suit suit--bottom color--black">${card.suit}</div> </div>`;
  }
};

const addCards = (cardsArr, sort, iterationNum) => {
  let cardsContainer = document.querySelector('.cards-container');
  let cardsContainerSorted = document.querySelector('.cards-sorted-container');
  let cardsDOM = '';

  for (let i = 0; i < cardsArr.length; i++) {
    cardsDOM += generateCard(cardsArr[i]);
  }

  if (!sort) {
    cardsContainer.innerHTML = '<div class="cards-container-row">' + cardsDOM + '</div>';
  } else {
    cardsContainerSorted.innerHTML +=
      '<div class="cards-container-sort-row"> <div class="container-iteration-num"> <p class="iteration-num">' +
      numIteration +
      '</p> </div> ' +
      cardsDOM +
      ' </div>';
  }
};

// Event listeners

btnDraw.addEventListener('click', () => {
  let numCards = input.value;
  cardsArr = generateCardsArray(numCards);
  addCards(cardsArr, false, 0);
});
