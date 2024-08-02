document.querySelector(".hamburger").addEventListener("click", () => {
	var body = document.body;
	var navigationList = document.querySelector(".navigation-list");
	var socialContacts = document.querySelector(".social-contacts");
	navigationList.classList.toggle("display");
	if (navigationList.classList.contains("display")) {
		socialContacts.style.display = "flex";
		body.style.overflowY = "hidden";
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
	if (target) {
		// Check if target is not null
		observer.observe(target);
	}
});

// load more and load less functionality for the events page
document.addEventListener("DOMContentLoaded", function () {
	const images = document.querySelectorAll(".image-wrapper");
	let currentCount = 6;

	const showMoreBtn = document.getElementById("show-more-btn");
	
	showMoreBtn.addEventListener("click", function () {
		if (showMoreBtn.textContent === "Show More!") {
			const nextCount = currentCount + 6;
			for (let i = currentCount; i < nextCount && i < images.length; i++) {
			images[i].style.display = 'block';
			}
			currentCount += 6;
			if (currentCount >= images.length) {
			showMoreBtn.textContent = "Show Less";
			}
		} else {
			const prevCount = Math.max(currentCount - 6, 9);
			for (let i = currentCount - 1; i >= prevCount; i--) {
				if (images[i]) { // Check if images[i] exists
					images[i].style.display = 'none';
				}
			}
			currentCount = prevCount;
			if (currentCount === 9) {
				showMoreBtn.textContent = "Show More!";
			}
		}
	});
});

// for display of "read more" button when the user hovers over the event image in the events page
function updateEventListeners() {
	// Check if screen width is less than 1024px
	if (window.innerWidth >= 1024) {
		// Add event listeners for desktop mode
		document.querySelectorAll(".image-wrapper").forEach((item) => {
			var readMoreMsg = item.querySelector(".readMoreMsg");
			var eventImg = item.querySelector(".event-image");
			readMoreMsg.style.display = "none";
			eventImg.style.opacity = "1";
			item.addEventListener("mousemove", (e) => {
				readMoreMsg.style.display = "block";
				eventImg.style.opacity = "0.4";
			});

			item.addEventListener("mouseout", (e) => {
				readMoreMsg.style.display = "none";
				eventImg.style.opacity = "1";
			});			
		});
	} else {
		document.querySelectorAll(".image-wrapper").forEach((item) => {
			var readMoreMsg = item.querySelector(".readMoreMsg");
			var eventImg = item.querySelector(".event-image");
			readMoreMsg.style.display = "block";
			readMoreMsg.style.opacity = "0.85";
			eventImg.style.opacity = "1";
		});
	}
}

// Initial update
updateEventListeners();

// Update on window resize
window.addEventListener("resize", updateEventListeners);

let popupBoxTitle, popupBoxText, maxNumberOfCards;

function returnPopupBoxContent(popupBoxNum) {
	if (typeof popupBoxNum === "number") {
		popupBoxNum = popupBoxNum.toString();
	}

	if (popupBoxNum === "1") {
		popupBoxTitle = `
			<i class="fa fa-calendar"></i> Thursday, April 1st, 2021
			<br><i class="fa fa-clock"></i> 7:00PM - 8:30PM
			<br><i class="fa">&#xf041;</i> Zoom (Online)
			<br><a href='#' class='highlight-link link-closed'>Join here</a>
		`;
		popupBoxText = `Ever wondered what a career in the non-profit sector is like? 🌍 Join us to explore unique opportunities and challenges of this fulfilling career path and learn how you can drive positive change worldwide!`;
	} else if (popupBoxNum === "2") {
		popupBoxTitle =	`
			<i class="fa fa-calendar"></i> Monday, September 13th, 2021
			<br><i class="fa fa-clock"></i> 8:00 PM
			<br><i class="fa fa-map-marker"></i> Zoom (Online)
			<br><a href='#' class='highlight-link link-closed'>Join here</a>
		`;
		popupBoxText = `Come meet our exec council and dive into our projects and leadership opportunities! All faculties are welcome at Project 90. Plus, one lucky student will win an Amazon Gift Card! We would love to have you on our team 💙`;
	} else if (popupBoxNum === "3") {
		popupBoxTitle = `
			<i class="fa fa-calendar"></i> Wednesday, March 23rd, 2022
			<br><i class="fa fa-clock"></i> 5:00 PM
			<br><i class="fa fa-map-marker"></i> TBD
			<br><a href='#' class='highlight-link link-closed'>Join here</a>
		`;
		popupBoxText = `Project90 is hosting a 90’s night!!! 🎉 Join us for a fun-filled evening with food, drinks, and musical chairs. Open to all members, this night will also feature current project updates and a presentation from REDESIGN’s Project Manager Kaitlyn!`;
	} else if (popupBoxNum === "4") {
		popupBoxTitle = `
			<i class="fa fa-calendar"></i> Wednesday, April 6th, 2022
			<br><i class="fa fa-clock"></i> 5:00 PM
			<br><i class="fa fa-map-marker"></i> ENGG Lounge
			<br><a href='#' class='highlight-link link-closed'>Join here</a>
		`;
		popupBoxText = `Join us at our Charity Paint Night 🤩! All proceeds will be donated to the Calgary Alzheimer's Society. Enjoy pizza and apple juice as you paint, socialize, and meet new people. Take your painting home and capture the moment with a photo!`;
	} else if (popupBoxNum === "5") {
		popupBoxTitle = `
			<i class="fa fa-calendar"></i> Friday, November 18th, 2022
			<br><i class="fa fa-clock"></i> 5:30 PM
			<br><i class="fa fa-map-marker"></i> ENGG Lounge
			<br><a href='#' class='highlight-link link-closed'>Join here</a>
		`;
			popupBoxText = `Join us to learn more about Project90 and our current projects on Friday, November 18th at 5:30pm! Link in bio to sign up! 💙💙💙 This is an opportunity to broaden your network, and as a bonus food and drinks will be provided.`;
	} else if (popupBoxNum === "6") {
		popupBoxTitle = `
			<i class="fa fa-calendar"></i> Friday, December 2nd, 2022
			<br><i class="fa fa-clock"></i> 5:30 PM
			<br><i class="fa fa-map-marker"></i> ENGG Lounge
			<br><a href='#' class='highlight-link link-closed'>Join here</a>
		`;
		popupBoxText = `Looking for a fun way to relax before finals? 🎨 Join Project90's Charity Paint Night! We'll provide food, drinks, and supplies, so get artsy and paint whatever you dream about. All proceeds go to the Calgary Alzheimer's Society. Join this great cause!`;
	} else if (popupBoxNum === "7") {
		popupBoxTitle = `
			<i class="fa fa-calendar"></i> Friday, March 3rd, 2023
			<br><i class="fa fa-clock"></i> 5:00 PM
			<br><i class="fa fa-map-marker"></i> ENGG Lounge
			<br><a href='#' class='highlight-link link-closed'>Join here</a>
		`;
		popupBoxText = `Unwind from midterms with an evening of painting and games! 🎨🕹️ Spend time with friends and create fun artwork to take home. No registration fee, no hassle. All supplies will be provided by Project90!`;
	} else if (popupBoxNum === "8") {
		popupBoxTitle = `
			<i class="fa fa-calendar"></i> Thursday, March 30th, 2023
			<br><i class="fa fa-clock"></i> 7:00 PM
			<br><i class="fa fa-map-marker"></i> HNSC 122
			<br><a href='#' class='highlight-link link-closed'>Join here</a>
		`;
		// expand the paragraph below
		popupBoxText = `Ready to break your fast? 🌙 Join us for a delicious iftar and enjoy memorables games to relax after the feast. Make new friends and learn more about Project90!`;
	} else if (popupBoxNum === "9") {
		popupBoxTitle = `
			<i class="fa fa-calendar"></i> Monday, October 30th, 2023
			<br><i class="fa fa-clock"></i> 5:30 PM
			<br><i class="fa fa-map-marker"></i> HNSC 123
			<br><a href='#' class='highlight-link link-closed'>Join here</a>
		`;
		popupBoxText = `Looking for a fun way to enjoy Halloween? 🎃 Come unwind with Project90 at our Horror Movie Night on October 30th! Come to HNSC 123 at 5:30 PM, where we'll be playing The Grudge and selling pizza! Grab your friends and come on over!`;
	} else if (popupBoxNum === "10") {
		popupBoxTitle = `
			<i class="fa fa-calendar"></i> Thursday, November 2nd, 2023
			<br><i class="fa fa-clock"></i> 6:00PM - 7:30 PM
			<br><i class="fa fa-map-marker"></i> HNSC 128
			<br><a href='#' class='highlight-link link-closed'>Join here</a>
		`;
		popupBoxText = `Attend our Consulting event to learn up-to-date STEM skills and knowledge! 🌟 Meet industry experts who will teach you about consulting careers, expanding your network, and gaining insights of the STEM industry. Don't miss out on this opportunity!`;
	} else if (popupBoxNum === "11") {
		popupBoxTitle = `
			<i class="fa fa-calendar"></i> Tuesday, March 26th, 2024
			<br><i class="fa fa-clock"></i> 5:00 PM - 7:00 PM
			<br><i class="fa fa-map-marker"></i> ENGG Lounge
			<br><a href='#' class='highlight-link link-closed'>Join here</a>
		`;
		popupBoxText = `Join us for an unforgettable evening in the ENGG Lounge! 🎨 For just $5, dive into a night of vibrant colors at Project90's Charity Paint Night. Enjoy painting, pizza, and the chance to support a worthy cause. All proceeds will go to Grow Calgary.`;	}

	maxNumberOfCards = document.getElementsByClassName('event-image').length;
}

// for pop up display containing event details when the "read more" button is pressed in the events page
function showPopup(popupBoxNum, popupAnimation) {
	let imageSize;
	imageSize = { width: "100%", height: "auto" };

	if (typeof popupBoxNum === "number") {
		popupBoxNum = popupBoxNum.toString();
	}
	returnPopupBoxContent(popupBoxNum);

	Swal.fire({
		html: `
		<div id="custom-swal-container">
			<div id="custom-swal-content">
				<div>
					<img src="../image/events_page_images/past_events/${popupBoxNum}.png">
				</div>
	
				<div>
					${`<span id="popupBoxTitle">${popupBoxTitle}</span><br></br>${popupBoxText}`}
				</div>
			</div>
	
			<div id="event-buttons">
				<button id="prevBtn" onclick='showPopup((Number(${popupBoxNum}) + 1).toString(), "swipe-in-from-left")' ${
				popupBoxNum === maxNumberOfCards.toString() ? "disabled" : ""
				}>
					<svg class="arrow-btn-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
						<path fill="#ffffff" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
					</svg>
				</button>

				<button id="nextBtn" onclick='showPopup((Number(${popupBoxNum}) - 1).toString(), "swipe-in-from-right");' ${
				popupBoxNum === "1" ? "disabled" : ""
				}>
					<svg class="arrow-btn-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
						<path fill="#ffffff" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
					</svg>
				</button>
			</div>
	
		</div>
		`,
		showCloseButton: true,
		showConfirmButton: false,
		customClass: {
			popup: "custom-swal-popup",
			content: "custom-swal-content",
		},
		showClass: {
			popup: popupAnimation,
		}
	});
}