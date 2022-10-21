const closeMenuBtn = document.querySelector('.close-btn');
const burgerMenuBtn = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.nav-menu');
const speakersSection = document.querySelector('.featured-speakers');
const speakersUl = document.querySelector('.featured-speakers-list');
const speakersliPC = document.querySelectorAll('.featured-speakers-list-item-pc')
const showMoreSpeakersBtn = document.querySelector('.show-more-speakers')
const featuredSpeakersArr = [
    {
        id: '1',
        name: 'Rosário Quive Jr.',
        profession: 'Law Student',
        work: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
        img: './img/rosario.jpeg',
    },
    {
        id: '2',
        name: 'Emidio Alexandre Munguambe',
        profession: 'Entrepeneur',
        work: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
        img: './img/emidio.jpeg',
    },
    {
        id: '3',
        name: 'Meiggy Sina Tomo',
        profession: 'Agriculture Student',
        work: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
        img: './img/meiggy.jpeg',
    },
    {
        id: '4',
        name: 'Dominique Kabasso',
        profession: 'Psychology Student',
        work: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
        img: './img/dominique.jpeg',
    },
    {
        id: '5',
        name: 'Cíntia',
        profession: 'University Student',
        work: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
        img: './img/cintia.jpeg',
    },
    {
        id: '6',
        name: 'Shelsea Comé',
        profession: 'Psychology Student',
        work: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
        img: './img/shelsea.jpeg',
    },
];

function toggleMenu() {
    navMenu.classList.toggle('active');
}

function displayFeaturedSpeakers() {
    let list = '';
    featuredSpeakersArr.forEach((speaker, index) => {
        if (index < 2) {
            list = `${list}<li class="featured-speakers-list-item">
        <div class="featured-speakers-list-item-img">
            <img src= "${speaker.img}" alt="Speaker 1 image">
        </div>
        <div class="featured-speaker-info">
            <h3 class="featured-speaker-name"> ${speaker.name}</h3>
            <p class="featured-speaker-description">
                ${speaker.profession}
            </p>
            <div class="speaker-separator"> </div>
            <p class="speaker-studies">
                ${speaker.work}
            </p>
        </div>
        </li>`;
        } else {
            list = `${list}<li class="featured-speakers-list-item featured-speakers-list-item-pc">
        <div class="featured-speakers-list-item-img">
            <img src= "${speaker.img}" alt="Speaker 1 image">
        </div>
        <div class="featured-speaker-info">
            <h3 class="featured-speaker-name"> ${speaker.name}</h3>
            <p class="featured-speaker-description">
                ${speaker.profession}
            </p>
            <div class="speaker-separator"> </div>
            <p class="speaker-studies">
                ${speaker.work}
            </p>
        </div>
        </li>`;
        }
    });
    speakersUl.innerHTML = list;
    speakersSection.appendChild(speakersUl);
}

let showMoreSpeakersBtnState = 0;
function displayAllSpeakers() {
    speakersSection.classList.toggle('active');
    speakersUl.classList.toggle('active');
    let list = '';
    featuredSpeakersArr.forEach((speaker, index) => {
        list = `${list}<li class="featured-speakers-list-item">
            <div class="featured-speakers-list-item-img">
                <img src= "${speaker.img}" alt="Speaker 1 image">
            </div>
            <div class="featured-speaker-info">
                <h3 class="featured-speaker-name"> ${speaker.name}</h3>
                <p class="featured-speaker-description">
                    ${speaker.profession}
                </p>
                <div class="speaker-separator"> </div>
                <p class="speaker-studies">
                    ${speaker.work}
                </p>
            </div>
            </li>`;
    })
    speakersUl.innerHTML = list;
    speakersSection.appendChild(speakersUl);
    showMoreSpeakersBtnState = 1;
}

function displayLessSpeakers() {
    let list = '';
    if(showMoreSpeakersBtnState === 1){
        console.log('Enter')
        displayFeaturedSpeakers();
        showMoreSpeakersBtnState = 0;
        // featuredSpeakersArr.forEach((speaker, index) => {
        //     if (index < 2) {
        //         list = `${list}<li class="featured-speakers-list-item">
        //     <div class="featured-speakers-list-item-img">
        //         <img src= "${speaker.img}" alt="Speaker 1 image">
        //     </div>
        //     <div class="featured-speaker-info">
        //         <h3 class="featured-speaker-name"> ${speaker.name}</h3>
        //         <p class="featured-speaker-description">
        //             ${speaker.profession}
        //         </p>
        //         <div class="speaker-separator"> </div>
        //         <p class="speaker-studies">
        //             ${speaker.work}
        //         </p>
        //     </div>
        //     </li>`;
        //     } else {
        //         list = `${list}<li class="featured-speakers-list-item featured-speakers-list-item-pc">
        //     <div class="featured-speakers-list-item-img">
        //         <img src= "${speaker.img}" alt="Speaker 1 image">
        //     </div>
        //     <div class="featured-speaker-info">
        //         <h3 class="featured-speaker-name"> ${speaker.name}</h3>
        //         <p class="featured-speaker-description">
        //             ${speaker.profession}
        //         </p>
        //         <div class="speaker-separator"> </div>
        //         <p class="speaker-studies">
        //             ${speaker.work}
        //         </p>
        //     </div>
        //     </li>`;
        //     }
        // });
        // speakersSection.classList.toggle('active');
        // speakersUl.classList.toggle('active');
        // showMoreSpeakersBtnState = 0;
        // speakersUl.innerHTML = list;
        // speakersSection.appendChild(speakersUl);
    }
}

showMoreSpeakersBtn.addEventListener('click', displayAllSpeakers)
window.addEventListener('load', displayFeaturedSpeakers);
closeMenuBtn.addEventListener('click', toggleMenu);
burgerMenuBtn.addEventListener('click', toggleMenu);