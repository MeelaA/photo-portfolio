// burger

const iconMenu = document.querySelector('.icon-menu')
if (iconMenu) {
const menuBody = document.querySelector('.menu__body')
iconMenu.addEventListener('click', function(e) {
	document.body.classList.toggle('lock')
	iconMenu.classList.toggle('active')
	menuBody.classList.toggle('active')
})
}

// karusel
// ==============================

// let activeImage = 0
// const imagesSwiper = document.querySelectorAll('.wedding-right__swiper-slide')

//  const swiperBtn = document.querySelector('.swiper-button-next').onclick = () =>{
// imagesSwiper[activeImage].classList.remove('active-img')
// imagesSwiper[activeImage].classList.add('none')
// if (activeImage+1 == imagesSwiper.length) {
// activeImage = 0
// } else {
// 	activeImage++
// }
// imagesSwiper[activeImage].classList.add('active-img')
// imagesSwiper[activeImage].classList.remove('none')
// }


// ===============================swiper

const swiper = new Swiper('.image-slider', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,

	// If we need pagination
	// pagination: {
	//   el: '.swiper-pagination',
	// },

	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
	scrollbar: {
	  el: '.swiper-scrollbar',
	//   возможность перетаскивать скрол
	draggable:true
	},
	// курсор перетаскивания
	// grabCursor: true

	// autoHeight: true,

	// количество слайдов для показа
	slidesPerView: 3,

	spaceBetween: 30,

	slidesPerColomn: 1,

	mousewheel: {
// чувствительность колеса
sensitivity:2,
// класс на котором будет срабатывать прокрутка мышью
eventsTarget: ".image-slider__image"
	},
 });


//==================================  studio slider

const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const container = document.querySelector('.container-studio')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length
// console.log(mainSlide);

let activeSlideIndex = 0


sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

upBtn.addEventListener('click', () => {
	changeSlide('up')
})

downBtn.addEventListener('click', () => {
	changeSlide('down')
})

document.addEventListener('keydown', event => {
	if (event.key === 'ArrowUp') {
		changeSlide('up')
	} else if (event.key === 'ArrowDown') {
		changeSlide('down')
	}

})

function changeSlide(direction) {
	if (direction === 'up') {
		activeSlideIndex++
		if (activeSlideIndex === slidesCount)
			activeSlideIndex = 0
	} else if (direction === 'down') {
		activeSlideIndex--
		if (activeSlideIndex < 0) {
			activeSlideIndex = slidesCount - 1
		}
	}


	const height = container.clientHeight

	mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`

	sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}



// =======tabs================

const tabsBtn = document.querySelectorAll('.tabs__nav-btn')
const tabsItems = document.querySelectorAll('.tabs__item')

tabsBtn.forEach(onTabClick);

function onTabClick (item) {
	item.addEventListener('click', function() {
		let currentBtn = item;
		let tabId = currentBtn.getAttribute('data-tab');
		let currentTab = document.querySelector(tabId);

		if( ! currentBtn.classList.contains('active')) {
			tabsBtn.forEach(function(item) {
				item.classList.remove('active');
				});

				tabsItems.forEach(function(item) {
					item.classList.remove('active');
				});

				currentBtn.classList.add('active');
				currentTab.classList.add('active');
		}
	});
}

document.querySelector('.tabs__nav-btn').click()



// ================================= anchors

const anchors = document.querySelectorAll('a[href*="#"]')
anchors.forEach(anchor => {
	anchor.addEventListener('click', event => {
    event.preventDefault();

	 const blockId = anchor.getAttribute('href').substring(1);

	 document.getElementById(blockId).scrollIntoView({
       behavior: 'smooth',
		 block: 'start'
	 })
	})

})