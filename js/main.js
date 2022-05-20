let burgerBlock = document.querySelector('.header__burger');
let burger = document.querySelector('.burger');

let nav = document.querySelector('.header__block-nav');



burgerBlock.addEventListener('click', miFunction);

function miFunction() {
  burger.classList.toggle('burger-active');
  
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }

}


// =====================================

$('.slyder__box').slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
});


// =====================================
// =====================================



const dok = [

  {
    id: 1,
    name: "Сосискина Марфа",
    title: "Врач зубы рвачь",
    img: "./img/cart/1.png",
  },
  {
    id: 2,
    name: "Элтон Джон",
    title: "Врач лапшу не прячь",
    img: "./img/cart/2.jpg",
  },
  {
    id: 3,
    name: "Джеки Чан",
    title: "Врач тертый калачь",
    img: "./img/cart/3.jpg",
  },
  {
    id: 4,
    name: "Джамшут куринович",
    title: "Врач твердый калачь",
    img: "./img/cart/4.jpg",
  },
  {
    id: 5,
    name: "Козья-морда арматовна",
    title: "Врач язык не прячь",
    img: "./img/cart/5.jpg",
  },

];

for (let i = 0; i < dok.length; i++) {
  let box = document.querySelector('.card__block');
  let card = document.createElement('div');
  let imgDiv = document.createElement('div');
  let img = document.createElement('img');
  let name = document.createElement('h3');
  let title = document.createElement('p');

  name.textContent = dok[i].name;
  title.textContent = dok[i].title;
  img.setAttribute('src', dok[i].img);

  imgDiv.appendChild(img);
  card.append(imgDiv);
  card.append(name);
  card.append(title);

  card.className = 'card__block-item';
  imgDiv.className = 'card__item-image';
  name.className = 'card__subtitle';
  title.className = 'card__text'; 

  box.appendChild(card);

}

// ====================================================

let url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
  .then(res => res.json()
    .then(data => {
      data.forEach(user => {
        let boxF = document.querySelector('.fetchh__block');
        let cardF = document.createElement('div');
        let nameF = document.createElement('h2');
        let emaelF = document.createElement('h4');
        let phoneF = document.createElement('p');

        nameF.textContent = user.name;
        emaelF.textContent = user.email;
        phoneF.textContent = user.phone;

        cardF.append(nameF);
        cardF.append(emaelF);
        cardF.append(phoneF);

        cardF.className = 'cfetchh__block-item';

        nameF.className = 'fetchh__subtitle';
        emaelF.className = 'fetchh__text'; 
        phoneF.className = 'fetchh__txt'; 

        boxF.append(cardF);

      })
    })
  );
