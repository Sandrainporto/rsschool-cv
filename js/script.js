
const burgerIcon = document.querySelector(".burger__icon");
const burgerMenu = document.querySelector(".header__menu");
const span = document.querySelector(".span");
const opacity = document.querySelector(".opacity");

burgerIcon.addEventListener("click", () => {
	burgerIcon.classList.toggle('active');
	burgerMenu.classList.toggle('active');
	span.classList.toggle('active');
	opacity.classList.toggle('active');
})

document.addEventListener('click', event => {
if(event.target.className !== 'burger__icon active' && 
event.target.className !== 'span active' && 
event.target.className !== 'header__menu active') {
	burgerIcon.classList.remove('active');
	burgerMenu.classList.remove('active');
	span.classList.remove('active');
	opacity.classList.remove('active');
}
})


const slider = document.querySelector(".projects__list");
const sliderItem = slider.children;

function next() { 
	slider.append(sliderItem[0]);
};
function prev() { 
	slider.prepend(sliderItem[sliderItem.length-1]);
}




const hexagones = document.querySelectorAll('[data-tab]');
const descriptionsAll = document.querySelectorAll('[data-tab-content]')

hexagones.forEach(function (item) { 
	item.addEventListener('mouseover', function () { 
		descriptionsAll.forEach(function (item) { 
			item.classList.remove("text-transition");
		})
		const description = document.querySelector('#' + this.dataset.tab);
		description.classList.add("text-transition");
	})
})

hexagones.forEach(function (item) { 
	item.addEventListener('mouseout', function () {
		
		const description = document.querySelector('#' + this.dataset.tab);
		description.classList.remove("text-transition");
	
	})
})




