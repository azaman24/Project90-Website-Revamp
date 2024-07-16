document.querySelector(".hamburger").addEventListener("click", () => {
	var body = document.body;
	var navigationList = document.querySelector(".navigation-list");
	var socialContacts = document.querySelector(".social-contacts");
	navigationList.classList.toggle("display");
	if (navigationList.classList.contains("display")) {
		z;
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
	if (target) {
		observer.observe(target);
	}
});

// animation for event images in the events page
document.querySelectorAll(".image-wrapper").forEach((item) => {
	item.addEventListener("mousemove", (e) => {
		console.log(item, e);
		const rect = item.getBoundingClientRect(); // Use item here instead of e.target
		const x = e.clientX - rect.left; // x position within the element.
		const y = e.clientY - rect.top; // y position within the element.

		const centerX = rect.width / 2;
		const centerY = rect.height / 2;

		const deltaX = (x - centerX) / 20;
		const deltaY = (y - centerY) / -20;

		item.style.transform = `perspective(1000px) rotateY(${deltaX}deg) rotateX(${deltaY}deg)`; // Apply to item

		var btn = item.querySelector(".btn");
		btn.style.display = "block";

		var eventImg = item.querySelector(".event-image");
		eventImg.style.opacity = "0.4";
	});

	item.addEventListener("mouseout", (e) => {
		item.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg)"; // Apply to item
		var btn = item.querySelector(".btn");
		btn.style.display = "none";

		var eventImg = item.querySelector(".event-image");
		eventImg.style.opacity = "1";
	});
});

// load more and load less functionality for the events page
document.addEventListener("DOMContentLoaded", function () {
	const images = document.querySelectorAll(".image-wrapper");
	let currentCount = 6;

	document
		.getElementById("load-more-btn")
		.addEventListener("click", function () {
			const nextCount = currentCount + 6;
			for (let i = currentCount; i < nextCount && i < images.length; i++) {
				images[i].style.display = "block";
			}
			currentCount += 6;
			if (currentCount >= images.length) {
				var loadMoreBtnContainer = document.getElementsByClassName(
					"load-more-btn-container"
				)[0];
				console.log(loadMoreBtnContainer);
				loadMoreBtnContainer.style.display = "none";
				this.style.display = "none"; // Hide the button if there are no more images to show
			}
		});
});