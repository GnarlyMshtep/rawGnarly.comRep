var footerElement = document.createElement("e")
footerElement.innerHTML = `<footer>			<h2 class="newsletter-title">Sign Up for our newsletter!</h2>			<h6 class="newsletter-subtitle">we avoid spamming &#128077;</h6>      <div class="submit-area">      <button class="submit" type="button">submit</button>    		<form>    					<input type="Email" name="email" placeholder="GnarlySpicoli@gmail.com"  class="newsletter-text-input">		    </form>			</div>				<div class="bottom-links">				<a href="https://www.instagram.com/raw_gnarly/" class="fa fa-instagram fa-large" target="_blank" style="color:#8abca7;"></a>				<a style="color:#8abca7;" onclick="navToContact()" class="contact-us">contact us</a>				<a style="color:#8abca7;"class="contact-us jobs" onclick ="navToJobs()" 	>Jobs				</a>			</div>		</footer>`



/*
	console.log("windowLoaded");
	let x= document.getElementsByClassName('hidden-shopify')
	x[0].style.display = "none";
//nav js begins
*/

//extras js begins
function extraInit(){
        console.log("ONLOAD RUNS");
        
        


    var exPage = document.querySelectorAll('.extras-page');
    for (let i = 0, length1 = exPage.length; i < length1; i++) {
        exPage[i].style.display = "none";
    }
    try {
        exPage[0].style.display = "block";
    } catch (e) {
        console.log(e);
    }

    if(window.location.href.split("#")[1]){

        var url = window.location.href.split("#")[1]
        if(url == "jobs"){
            changeExtrasPage(document.getElementById("4"))
        }
        if(url == "contact"){
            changeExtrasPage(document.getElementById("3"))

        }



    }


}
    function changeExtrasPage(button) {
        var exPage = document.querySelectorAll('.extras-page');
        console.log("buttonClick!");
        for (let i = 0, length1 = exPage.length; i < length1; i++) {
            exPage[i].style.display = "none";
        }
        try {
            exPage[button.id].style.display = "block";
        } catch (e) {
            console.log(e);
        }
    }


function toggleNav(){
	console.log("handle clicked")
	var element = document.getElementsByClassName("nav-items")[0];
    element.classList.toggle("nav-items-showing");
    document.getElementsByClassName("nav-handle")[0].classList.toggle("nav-handle-color");
}

//nav js ends

//index js begins



//index js ends
/* OLD SLIDER / IMAGE  carousel CODE!
var carouselSlide = document.querySelector('.carousel-slide');
var carouselImages = document.querySelectorAll(".carousel-slide img");
//alert("l"+carouselImages.length);
var counter = 1;
console.log(document.getElementById("last-clone"))
try {
    var size = carouselImages[0].clientWidth;

    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px";


    setInterval(function () {
        counter++;
        carouselSlide.style.transition = ".5s ease-in-out";
        carouselSlide.style.transform = "translateX(" + (-size * counter) + "px";

    }, 5000);


    carouselSlide.addEventListener('transitionend', function () {
        if (carouselImages[counter].id === 'first-clone') {
            carouselSlide.style.transition = "none";
            counter = carouselImages.length - counter;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
            // statements
        }
    });

} catch (e) {
    console.log(e);
}
document.getElementsByClassName("nav-bar")

*/


function changeMainImg(press){
	let mainImg = document.getElementsByClassName("main-image-img")[0];
	mainImg.src=press.src;
}

//=== New Slider/carousel code
try{
var carouselDiv = null

if(window.innerWidth < 601){
    carouselDiv = document.getElementById('carouselMobile') // Get the div with the images on mobile
}else{
    carouselDiv = document.getElementById('carousel') // Get the div with the images
}


var slides = carouselDiv.children // Get all the images
slides[0].classList.add("active")
}catch(e){

}

//productX js begins
function changeMainProdImg(press){
	let mainImg = document.getElementsByClassName("main-prod-image")[0];
	mainImg.src=press.src;
}

//productX js ends

   


//extras js ends


//footer js
var extrasPage = 0;
function navToJobs(){
    extrasPage = 1;
	window.location.href = "extras.html#jobs";
	console.log(extrasPage)
}
function navToContact(){
    window.location.href = "extras.html#contact";
	console.log(extrasPage)
}





//form js starts
window.onload = function () {
    document.body.appendChild(footerElement)
    let subButs = document.getElementsByClassName("submit");
    console.log(subButs.length)
    for (let i = 0, length1 = subButs.length; i < length1; i++) {
        subButs[i].addEventListener("click", onClickSubmit);

    }
    function onClickSubmit() {
        if (formValid()) {
            alert("form is correct, yet I don't know php")
        }
    }

    function formValid() {
        let fname = document.forms[0].elements[0].value;
        let lname = document.forms[0].elements[1].value;
        let email = document.forms[0].elements[2].value;
        if ((fname == "") || (lname == "") || (email == "")) {
            alert("please complete the form before submission");
            return false;
        }
        return true;
    }

    //slide
  


}//onload
function changeLb(button) {
    let lbNum = button.name;
    let temp = "";
    let lbImages = document.querySelectorAll(".lb-image");

    for (var i = 0; i < lbImages.length; i++) {
        temp = lbImages[i].src;
        temp = temp.replace(temp.slice(temp.lastIndexOf("/") -3, temp.lastIndexOf("/") ), "lb" + lbNum);
        lbImages[i].src = temp;
    }
    changeMainImg(lbImages[0]);
}

