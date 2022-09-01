new Swiper('.swiper-container', {

	slidesPerView : 2, 
	spaceBetween : 30, 
	slidesPerGroup : 1, 
	loopFillGroupWithBlank : true,

	loop : true,

	pagination : { 
		el : '.swiper-pagination',
		clickable : true, 
	},
	navigation : { 
		nextEl : '.swiper-button-next', 
		prevEl : '.swiper-button-prev', 
	},
});