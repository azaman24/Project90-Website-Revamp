document.querySelector(".hamburger").addEventListener("click", () => {
	var body = document.body;
	var navigationList = document.querySelector(".navigation-list");
	var socialContacts = document.querySelector(".social-contacts");
	navigationList.classList.toggle("display");
	if (navigationList.classList.contains("display")) {z
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

var swiper1 = new Swiper("#swiper-teams-page-1", {
	slidesPerView: 3,
	spaceBetween: 25,
	loop: true,
	centerSlide: "true",
	fade: "true",
	grabCursor: "true",
	navigation: {
		nextEl: ".swiper-button-next1",
		prevEl: ".swiper-button-prev1",
	},
	pagination: {
		el: ".swiper-pagination1",
		clickable: true,
		dynamicBullets: true,
	},
	breakpoints: {
		0: { slidesPerView: 1 },
		525: { slidesPerView: 2 },
		950: { slidesPerView: 3 },
	},
});

var swiper2 = new Swiper("#swiper-teams-page-2", {
	slidesPerView: 3,
	spaceBetween: 25,
	loop: true,
	centerSlide: "true",
	fade: "true",
	grabCursor: "true",
	navigation: {
		nextEl: ".swiper-button-next2",
		prevEl: ".swiper-button-prev2",
	},
	pagination: {
		el: ".swiper-pagination2",
		clickable: true,
		dynamicBullets: true,
	},
	breakpoints: {
		0: { slidesPerView: 1 },
		525: { slidesPerView: 2 },
		950: { slidesPerView: 3 },
	},
});

var swiper3 = new Swiper("#swiper-teams-page-3", {
	slidesPerView: 3,
	spaceBetween: 25,
	loop: true,
	centerSlide: "true",
	fade: "true",
	grabCursor: "true",
	navigation: {
		nextEl: ".swiper-button-next3",
		prevEl: ".swiper-button-prev3",
	},
	pagination: {
		el: ".swiper-pagination3",
		clickable: true,
		dynamicBullets: true,
	},
	breakpoints: {
		0: { slidesPerView: 1 },
		525: { slidesPerView: 2 },
		950: { slidesPerView: 3 },
	},
});

/* Swip buttons for sponsors page */

var mySwiper = new Swiper(".mySwiper", {
	// Optional parameters
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

/* for creating a bounce effect to the "become sponsor message" in the sponsors page when the user reaches that message for the first time */

document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("bounce");
            }
        });
    });

    const target = document.querySelector(".become-sponsor-msg");
    if (target) { // Check if target is not null
        observer.observe(target);
    }
});


/* prevent the page from redirecting to itself when the current page is clicked in the navigation bar */

document.addEventListener('DOMContentLoaded', (event) => {
    const activeLink = document.querySelector('.navigation-list-items a.active');
    if (activeLink) {
        activeLink.addEventListener('click', (e) => {
            e.preventDefault(); // Prevents the link action
        });
    }
});
