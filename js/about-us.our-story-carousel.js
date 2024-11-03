// const carouselData = [
//     {
//         year: "2016",
//         title: "First Milestone",
//         description: "NextLevel launched its online store, featuring a handpicked selection of tech gadgets."
//     },
//     {
//         year: "2017",
//         title: "Expanding the Range",
//         description: "With growing customer demand, the store expanded its product categories."
//     },
//     {
//         year: "2019",
//         title: "Brands Partnership",
//         description: "Partnered with leading tech brands to offer an even wider range of high-quality products."
//     },
//     {
//         year: "2022",
//         title: "Free Shipping",
//         description: "We launched free delivery service for orders over $100, offering more value to clients."
//     },
//     {
//         year: "2023",
//         title: "New Innovations",
//         description: "We added AI-powered shopping assistans to help customers find the perfect tech solutions."
//     }
// ];

// // Отримуємо основні елементи каруселі
// const carouselTrack = document.querySelector('.carousel__track');
// const prevButton = document.querySelector('.carousel__nav--prev');
// const nextButton = document.querySelector('.carousel__nav--next');

// let currentIndex = 0;

// function createCard(data) {
//     const card = document.createElement('div');
//     card.classList.add('carousel__card');

//     card.innerHTML = `
//         <h3 class="carousel__year">${data.year}</h3>
//         <h4 class="carousel__heading">${data.title}</h4>
//         <p class="carousel__text">${data.description}</p>
//     `;

//     return card;
// }


// carouselData.forEach(data => {
//     const card = createCard(data);
//     carouselTrack.appendChild(card);
// });

// function updateCarousel() {
//     const cardWidth = carouselTrack.querySelector('.carousel__card').offsetWidth + 20; // Враховуємо відступи між картками
//     carouselTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
// }

// nextButton.addEventListener('click', () => {
//     const totalCards = carouselTrack.querySelectorAll('.carousel__card').length;
//     const visibleCards = Math.floor(carouselTrack.parentElement.offsetWidth / (carouselTrack.querySelector('.carousel__card').offsetWidth + 20));
    
//     if (currentIndex < totalCards - visibleCards) {
//         currentIndex++;
//         updateCarousel();
//     }
// });

// prevButton.addEventListener('click', () => {
//     if (currentIndex > 0) {
//         currentIndex--;
//         updateCarousel();
//     }
// });

// window.addEventListener('resize', updateCarousel);
