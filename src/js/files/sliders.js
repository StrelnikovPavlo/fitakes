/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper, { Navigation, EffectFade } from 'swiper';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	// Список слайдерів
	// Перевіряємо, чи є слайдер на сторінці
	if (document.querySelector('.mainscreen__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.mainscreen__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation, EffectFade],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,
			effect: 'fade',
			navigation: {
				prevEl: '.mainscreen__arrow-prev',
				nextEl: '.mainscreen__arrow-next',
			},
			// Події
			on: {

			}
		});
	}
	if(window.innerWidth > 575){
		if (document.querySelector('.reviews__slider')) {
			new Swiper('.reviews__slider', { 
			modules: [Navigation, EffectFade],
			observer: true,
			observeParents: true,
			slidesPerView: 2,
			spaceBetween: 20,
			autoHeight: true,
			speed: 800,
			navigation: {
				prevEl: '.reviews__arrow-prev',
				nextEl: '.reviews__arrow-next',
			},
			breakpoints:{
				768:{
					spaceBetween: 40,
					slidesPerView: 3,
				},
				992:{
					spaceBetween: 40,
					slidesPerView: 3,
				}
			},
			// Події
			on: {

			}
			});
		}
	}
	if (document.querySelector('.slider-cart')) {
		new Swiper('.slider-cart', { 
		modules: [Navigation],
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 0,
		autoHeight: true,
		speed: 800,
		navigation: {
			prevEl: '.slider-cart__arrow-prev',
			nextEl: '.slider-cart__arrow-next',
		},
		breakpoints:{
		},
		// Події
		on: {

		}
		});
	}
	if (document.querySelector('.slider-summary__body')) {
		new Swiper('.slider-summary__body', { 
		modules: [Navigation],
		observer: true,
		observeParents: true,
		slidesPerView: 3,
		spaceBetween: 10,
		autoHeight: true,
		speed: 800,
		navigation: {
			prevEl: '.prev',
			nextEl: '.slider-summary__arrow',
		},
		breakpoints:{
			900:{
				spaceBetween: 20,
			}
		},
		// Події
		on: {

		}
		});
	}
}

window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});