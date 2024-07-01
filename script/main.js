document.querySelector(".hamburger").addEventListener("click", () => {
	var body = document.body;
	var navigationList = document.querySelector(".navigation-list");
	var socialContacts = document.querySelector(".social-contacts");
	navigationList.classList.toggle("display");
	if (navigationList.classList.contains("display")) {
		body.style.overflow = "hidden";
		socialContacts.style.display = "flex";
	} else {
		body.style.overflow = "auto";
		socialContacts.style.display = "none";
	}
	window.addEventListener("resize", function () {
		var socialContacts = document.querySelector(".social-contacts");
		if (window.matchMedia("(min-width: 1000px)").matches) {
			socialContacts.style.display = "none";
		} else {
			socialContacts.style.display = "flex";
		}
	});
});

window.onload = function () {
	document.getElementById("toggle").checked = false;
};

/* Swip buttons for teams page */
function createSwiper(index) {
    return new Swiper(`#swiper${index}`, {
        slidesPerView: 3,
        spaceBetween: 25,
        loop: true,
        centerSlide: 'true',
        fade: 'true',
        grabCursor: 'true',
        navigation: {
            nextEl: `.swiper-button-next${index}`,
            prevEl: `.swiper-button-prev${index}`,
        },
        pagination: {
            el: `.swiper-pagination${index}`,
            clickable: true,
            dynamicBullets: true,
        },
        breakpoints: {
            0: { slidesPerView: 1 },
            525: { slidesPerView: 2 },
            950: { slidesPerView: 3 },
        }
    });
}

// stores all the swipers in an array
let swipers = [];

// creates 10 swipers
for (let i = 0; i < 10; i++) {
    swipers.push(createSwiper(i));
}

/* Swip buttons for sponsors page */
var mySwiper = new Swiper(".mySwiper", {
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

document.addEventListener("DOMContentLoaded", function () {
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("bounce");
			}
		});
	});

	const target = document.querySelector(".become-sponsor-msg");
	observer.observe(target);
});