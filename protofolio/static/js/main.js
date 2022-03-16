$(document).ready(()=>{
	// Start Header Section
	$("#menu-mob").click(() => {
		$("#menu-mob").toggleClass("uil-times");
		$(".nav-mobile").toggleClass("show");
	});
	$("#close-menu").click(() => {
		$(".nav-mobile").removeClass("show");
	});
	document.querySelectorAll(".nav-mobile a").forEach((el) => {
		el.addEventListener("click", () => {
			$("#menu-mob").removeClass("uil-times");
			$(".nav-mobile").removeClass("show");
		});
	});
	$(window).scroll(()=>{
		if(window.scrollY >= 40){
			$('.header').addClass('box-shadow');
		}else{
			$(".header").removeClass("box-shadow");
		}
	});
	// End Header Section
    // ==============================================
    // Start Section Main
    var typed = new Typed(".typed", {
			strings: ["Front end Devloper.", "Backend Devloper", "Python Devloper"],
			typeSpeed: 40,
			loop: true,
		});
    var typed2 = new Typed(".typed-2", {
			strings: ["Front end Devloper.", "Backend Devloper", "Python Devloper"],
			typeSpeed: 40,
			loop: true,
		});
    // End Section Main

	// Show By Scrolling
	window.addEventListener("scroll", rv);

	function rv() {
		var x = document.querySelectorAll(".rv");
		for (var i = 0; i < x.length; i++) {
			var windowheight = window.innerHeight;
			var rvl = x[i].getBoundingClientRect().top;
			var rvPo = 170;
			// console.log(rvl);
			if (rvl < windowheight - rvPo) {
				x[i].classList.add("act");
			} else {
				x[i].classList.remove("act");
			}
		}
	}

	

	
	//=====================
	
	
	document.querySelectorAll('.panel').forEach(e=>{
		$(e).slideUp();
	});
	
	document.querySelectorAll(".slid-down").forEach(el=>{
		$(el).click(() => {
			$(el).addClass("uil-angle-up");
			$(el.parentElement.nextElementSibling).slideToggle(1000);
			wid();
			if (el.classList="uil-angle-up") {
				
				el.onclick=()=>{
					$(el).removeClass("uil-angle-up");
					$(el).addClass("uil-angle-down");
					
				}
			}else{
				console.log("false")
			}
		});
		// $(el).removeClass("uil-angle-up");

	});

function wid(){
	skills = document.querySelectorAll(".bg");
	skills.forEach((el) => {
		// el.classList.add("width-animate");
		el.style.width = el.dataset.width;
	});
}
 
// ========================================================>
// Start Section Services

$('.btn-front').click(()=>{
	$('.over-lay').addClass('zIndex');
	$('.front').addClass('actives');
});
$('.btn-back').click(()=>{
	$(".over-lay").addClass("zIndex");
	$(".back").addClass("actives");
});
$('.btn-tools').click(()=>{
	$(".over-lay").addClass("zIndex");
	$(".tools").addClass("actives");
});

document.querySelectorAll('.close').forEach(e=>{
	e.addEventListener('click',()=>{
		e.parentElement.classList.remove("actives");
		$(".over-lay").removeClass("zIndex");
	});
});



 var swiper = new Swiper(".mySwiper", {
		cssMode: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: ".swiper-pagination",
		},
		mousewheel: true,
		keyboard: true,
 });



window.onscroll = () => {
	if (window.scrollY >= 1000) {
		document.querySelector(".to-top").style.display = "block";
	} else {
		document.querySelector(".to-top").style.display = "none";
	}
};

// Start Dark Mode
$(".uil-moon").click(() => {
	document.documentElement.style.setProperty("--alt-color", "#4d194b");
	document.documentElement.style.setProperty("--black", "white");
	// document.documentElement.style.setProperty('--main-color' , 'green');
	document.body.style.backgroundColor = "var(--main-color)";
	$(".uil-moon").toggleClass("uil-brightness");
});
$(".uil-brightness").click(() => {
	console.log('ok');
	document.documentElement.style.setProperty("--alt-color", "#4d194b");
	document.documentElement.style.setProperty("--black", "#061313");
	// document.documentElement.style.setProperty('--main-color' , 'green');
	document.body.style.backgroundColor = "var(--white)";
	$(".dark-mode").toggleClass("uil-moon");
});


});











// 








