
	$(document).ready(function () {
		jQuery.fn.carousel.Constructor.TRANSITION_DURATION = 2000
	});
	$('.carousel').carousel({
		pause: "false"
	})

	if (window.localStorage.getItem("lastVisit") + 120000 < Math.floor(new Date().getTime() / 1000)) {
		setTimeout(function () {
			var time = new Date().getTime()
			window.localStorage.setItem("lastVisit", time)
			$('#newsletter').modal('toggle')


		}, 2000)
	}
	document.getElementById("mobileMenuBtn").addEventListener("click",function(){
		if(document.getElementById("mobileMenuBtn").classList.contains("is-active")){ // close menu
			document.getElementById("mobileMenuBtn").classList.remove("is-active")
			document.getElementById("mobileMenu").style.transform = "translateX(-300px)"
			document.getElementById('logo').style.opacity = "0"
			setTimeout(function(){
				document.getElementById('logo').src ="images/newLogo.png"
				document.getElementById('logo').style.opacity = "1"
			},300)
		
		}else{//open menu
		
			document.getElementById("mobileMenuBtn").classList.add("is-active")
			document.getElementById("mobileMenu").style.transform = "translateX(20px)"
			document.getElementById('logo').style.opacity = "0"
			setTimeout(function(){
				document.getElementById('logo').src ="images/colorLogo2.png"
				document.getElementById('logo').style.opacity = "1"
			},300)
		}
		
	})
	function changeLogo(){
		if(document.getElementById('logo').src.split("/images")[1] == "/newLogo.png"){
			document.getElementById('logo').src ="images/colorLogo2.png"
		}else{
			document.getElementById('logo').src ="images/newLogo.png"
		}

	}
