const mySwiper = new Swiper('.swiper-container', {
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.slider-button-next',
		prevEl: '.slider-button-prev',
	},
});

// cart

const buttonCart = document.querySelector('.button-cart');
const modalCart = document.querySelector('#modal-cart');
const modalClose = document.querySelector('.modal-close');

const openModal = function() {
	modalCart.classList.add('show');
};

const closeModal = function() {
	modalCart.classList.remove('show');
};

buttonCart.addEventListener('click', openModal);
modalClose.addEventListener('click', closeModal);


// sroll smooth

// {
// 	const scrollLinks = document.querySelectorAll('a.sсroll-link');

// 	console.log(scrollLinks)
// 	for (let i = 0; i < scrollLinks.length; i++) {
// 		scrollLinks[i].addEventListener('click', function(event) {
// 			event.preventDefault();
// 			const id = scrollLinks[i].getAttribute('href');
// 			document.querySelector(id).scrollIntoView({
// 				behavior: 'smooth',
// 				block: 'start',
// 			})
// 		});
// 	}
// }

{
	const scrollLinks = document.querySelectorAll('a.scroll-link');
  
	for (const scrollLink of scrollLinks) {
	  scrollLink.addEventListener('click', function(event) {
		event.preventDefault();
		const id = scrollLink.getAttribute('href');
		document.querySelector(id).scrollIntoView({
		  behavior: 'smooth',
		  block: 'start',
		});
  
	  });
	}
	
  }
