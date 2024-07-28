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
	if (target) {
		// Check if target is not null
		observer.observe(target);
	}
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

// for display of "read more" button when the user hovers over the event image in the events page
function updateEventListeners() {
	// Check if screen width is less than 1024px
	if (window.innerWidth >= 1024) {
		// Add event listeners for desktop mode
		document.querySelectorAll(".image-wrapper").forEach((item) => {
			item.addEventListener("mousemove", (e) => {
				var btn = item.querySelector(".btn");
				var eventImg = item.querySelector(".event-image");
				btn.style.display = "block";
				eventImg.style.opacity = "0.4";
			});

			item.addEventListener("mouseout", (e) => {
				var btn = item.querySelector(".btn");
				var eventImg = item.querySelector(".event-image");
				btn.style.display = "none";
				eventImg.style.opacity = "1";
			});
		});
	} else {
		document.querySelectorAll(".image-wrapper").forEach((item) => {
			item.addEventListener("mousemove", (e) => {
				var btn = item.querySelector(".btn");
				var eventImg = item.querySelector(".event-image");
				btn.style.display = "block";
				btn.style.opacity = "0.85";
				eventImg.style.opacity = "1";
			});
			item.addEventListener("mouseout", (e) => {
				var btn = item.querySelector(".btn");
				var eventImg = item.querySelector(".event-image");
				btn.style.display = "block";
				btn.style.opacity = "0.85";
				eventImg.style.opacity = "1";
			});
		});
	}
}

// Initial update
updateEventListeners();
// Update on window resize
window.addEventListener("resize", updateEventListeners);

let popupBoxTitle, popupBoxText, maxNumberOfCards;

function returnPopupBoxContent(popupBoxNum) {
	if (popupBoxNum === "1") {
		popupBoxTitle =
			"Date: Thursday, April 1st, 2021<br>Time: 7:00pm - 8:30pm MT<br>Location: Zoom (Online)<br><a href='#' class='highlight-link link-closed'>Join here</a>";
		popupBoxText = `Ever wondered what a career path in the non-profit sector is like? Join us and learn about how you can make a larger impact on communities worldwide.`;
	} else if (popupBoxNum === "2") {
		popupBoxTitle =
			"Date: Monday, September 13th, 2021<br>Time: 8:00pm MT<br>Location: Zoom (Online)<br><a href='#' class='highlight-link link-closed'>Join here</a>";
		popupBoxText = `Meet our exec council and learn more about our projects, leadership opportunities and how you can contribute! All faculties are welcome at Project 90. One lucky student will win an Amazon Gift Card! We would love to have you on our team💙💙💙`;
	} else if (popupBoxNum === "3") {
		popupBoxTitle =
			"Date: Frdiay, December 3rd, 2021<br>Time: 6:30pm MT<br>Location: ENGG Lounge<br><a href='#' class='highlight-link link-closed'>Join here</a>";
		popupBoxText = `Come join us at our Charity Paint Night! There are only a limited number of tickets, so register now! Link is in our bio. All proceeds will be donated to Calgary Alzheimer’s society. We’ve got pizza and sparkling apple juice, so you can relax and grab a bite while you paint with your friends and meet new people! Live music is courtesy of Schulich Soundstage @soundstage_uofcalgary 🤩 At the end of the night, feel free to take your painting with you, and grab a film picture of you and your painting at our event.`;
	} else if (popupBoxNum === "4") {
		popupBoxTitle =
			"Date: Wednesday, March 23rd, 2022<br>Time: 5:00pm MT<br>Location: TBD<br><a href='#' class='highlight-link link-closed'>Join here</a>";
		popupBoxText = `Project 90 is hosting a 90’s night!!! This is an opportunity to boost our Project 90 community spirit and build stronger relationships with fellow club members. This event is open to executive and general members across all projects! The theme for this 90’s night is a Musical Night! There will be food, drinks, and games including musical chairs. The night will also consist of a update of our current projects and a presentation from the REDESIGN Project Manager, Kaitlyn! 👉🏻This event is first come, first serve; our maximum capacity is 25. Sign up ASAP if you are interested !!`;
	} else if (popupBoxNum === "5") {
		popupBoxTitle =
			"Date: Wednesday, April 6th, 2022<br>Time: 5:00pm MT<br>Location: ENGG Lounge<br><a href='#' class='highlight-link link-closed'>Join here</a>";
		popupBoxText = `Project90 is hosting another paint night! This is an opportunity to paint and have fun with your friends. There will be food, drinks & live music by provided by Schulich Soundstage.🤩 The paint will be provided and you can take home a piece of art that you made yourself, with a possible film picture of yourself with your painting!🎨🖌 There is a $15 entry fee; all proceeds will be going to the Calgary Alzheimer’s Society. This event is first come, first serve; there are only 30 tickets available. If you are interested, sign up ASAP! Project90 will donate all leftover materials. Please e-transfer project90.finance@gmail.com by April 4th, your spot in the event is only guaranteed after you pay.`;
	} else if (popupBoxNum === "6") {
		popupBoxTitle =
			"Date: Frdiay, November 18th, 2022<br>Time: 5:30pm MT<br>Location: ENGG Lounge<br><a href='#' class='highlight-link link-closed'>Join here</a>";
		popupBoxText = `Join us to learn more about Project90 and our current projects on Friday, November 18th at 5:30pm! Link in bio to sign up! 💙💙💙 This is an opportunity to broaden your network, and as a bonus food and drinks will be provided.`;
	} else if (popupBoxNum === "7") {
		popupBoxTitle =
			"Date: Friday, December 2nd, 2022<br>Time: 5:30pm MT<br>Location: ENGG Lounge<br><a href='#' class='highlight-link link-closed'>Join here</a>";
		popupBoxText = `Looking for a fun way to relax before finals? Come unwind with Project90 at our Charity Paint Night! You don't want to miss this - We've got you covered with the supplies, food, drinks, and music. The best part? You'll be painting for a good cause! All proceeds from this event will be donated to the Calgary Alzheimer's Society. Tickets are $15 and sold on a first come first served basis. Sign up by scanning the QR code!`;
	} else if (popupBoxNum === "8") {
		popupBoxTitle =
			"Date: Friday, March 3rd, 2023<br>Time: 5:00pm MT<br>Location: ENGG Lounge<br><a href='#' class='highlight-link link-closed'>Join here</a>";
		popupBoxText = `Join Project90 for an evening of painting and games after the midterm season. This is an opportunity to unwind with your friends, have a slice of pizza, and create a piece of artwork in the process that you can take home at the end of the night! Entry is FREE and registration is not required. All supplies will be provided by Project90.`;
	} else if (popupBoxNum === "9") {
		popupBoxTitle =
			"Date: Friday, March 24th, 2023<br>Time: 6:00pm - 10:00pm MT<br>Location: Kilkenny Irish Pub, 3630 Brentwood Road NW<br><a href='#' class='highlight-link link-closed'>Join here</a>";
		popupBoxText = `The Help Bolivia: Rooftop Greenhouse Project is organizing a Fundraiser Pub Night! This project aims to create a rooftop greenhouse for a community in Bolivia. Come on down to show your support! Serving pizza and drinks 🍺. Donations payable at door!`;
	} else if (popupBoxNum === "10") {
		popupBoxTitle =
			"Date: Thursday, March 30th, 2023<br>Time: 7:00pm MT<br>Location: HNSC 122<br><a href='#' class='highlight-link link-closed'>Join here</a>";
		popupBoxText = `Join Project 90 for a fun evening of games and Iftar! Make new friends and learn more about our club. Make sure to sign up as spots are limited.`;
	} else if (popupBoxNum === "11") {
		popupBoxTitle =
			"Date: Monday, October 30th, 2023<br>Time: 5:30pm MT<br>Location: HNSC 123<br><a href='#' class='highlight-link link-closed'>Join here</a>";
		popupBoxText = `Looking for a fun way to enjoy Halloween?! Come unwind with Project90 at our Horror Movie Night on October 30th in HNSC 123 at 5:30pm! We’ll be playing the grudge and have $2 pizza slices for the night!! So grab your friends and come on over 🎬✨!`;
	} else if (popupBoxNum === "12") {
		popupBoxTitle =
			"Date: Thursday, November 2nd, 2023<br>Time: 6:00pm-7:30pm MT<br>Location: HNSC 128<br><a href='#' class='highlight-link link-closed'>Join here</a>";
		popupBoxText = `In today's ever-changing business landscape, the expertise of students within the fields of science, technology, engineering, and mathematics has become more in demand as firms strive to gain a competitive advantage in the age of innovation. The unique skills and knowledge that STEM students possess are highly applicable within different areas of consulting! The University of Calgary of Calgary Association (UCCA) in collaboration with the Engineering Student Society (ESS), Project90, the Biology Students Association (BSA) and TechStart, would like to invite you to join us on Thursday, November 2, 2023 from 6:00 – 7:30 PM MT in HNSC 128 for our STEM In Consulting event! This year, UCCA is collaborating with Accenture, IBM, McKinsey and Deloitte to host a panel night to educate both business and STEM students on careers in consulting. Don’t miss out on the opportunity to learn from professionals in consulting with STEM backgrounds and to grow your professional network! This event is open to University of Calgary students from any faculty and any year. To register, please fill out the registration form by Monday, October 31, 2023 at 11:59 PM MT and until spots remain.`;
	} else if (popupBoxNum === "13") {
		popupBoxTitle =
			"Date: Tuesday, March 26th, 2024<br>Time: 5pm - 7pm MT<br>Location: ENGG Lounge<br><a href='#' class='highlight-link link-closed'>Join here</a>";
		popupBoxText = `Join us for an unforgettable evening in the ENGG Lounge! For just $5, dive into a night of vibrant colours at Project90's Charity Paint Night! Come enjoy painting, pizza, and the chance to support a worthy cause! All proceeds will go to Grow Calgary.`;
	}

	maxNumberOfCards = document.getElementsByClassName("event-image").length;
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
