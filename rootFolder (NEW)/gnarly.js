console.log("yo");
/*
	console.log("windowLoaded");
	let x= document.getElementsByClassName('hidden-shopify')
	x[0].style.display = "none";
//nav js begins
*/
function toggleNav(){
	console.log("handle clicked")
	var element = document.getElementsByClassName("nav-items")[0];
    element.classList.toggle("nav-items-showing");
    document.getElementsByClassName("nav-handle")[0].classList.toggle("nav-handle-color");
}

//nav js ends

//index js begins
function animateLetterSpacing() {
	var element = document.getElementsByClassName("main-page-stretched")[0];
    element.classList.remove("main-page-stretched");
    element.classList.add("main-page-normal");
    console.log("did it");
		
}

//index js ends

window.onload = function(){
//alert("window loaded");
}
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
function changeMainImg(press){
	let mainImg = document.getElementsByClassName("main-image-img")[0];
	mainImg.src=press.src;
}
//productX js begins
function changeMainProdImg(press){
	let mainImg = document.getElementsByClassName("main-prod-image")[0];
	mainImg.src=press.src;
}

//productX js ends

//extras js begins
    exPage = document.querySelectorAll('.extras-page');
    for (let i = 0, length1 = exPage.length; i < length1; i++) {
        exPage[i].style.display = "none";
    }
    try {
        exPage[0].style.display = "block";
    } catch (e) {
        console.log(e);
    }
    function changeExtrasPage(button) {
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


//extras js ends


//footer js
var extrasPage = 0;
function navToJobs(){
    extrasPage = 1;
	window.location.href = "extras.html#jobs";
	console.log(extrasPage)
}


//form js starts
window.onload = function(){

let subButs=document.getElementsByClassName("submit");
console.log(subButs.length)
for(let i = 0, length1 = subButs.length; i < length1; i++){
	subButs[i].addEventListener("click", onClickSubmit);

}
function onClickSubmit(){
	if (formValid()){
		alert("form is correct, yet I don't know php")
	}
}

function formValid(){
	let fname = document.forms[0].elements[0].value;
	let lname = document.forms[0].elements[1].value;
	let email = document.forms[0].elements[2].value;
	if ((fname=="")||(lname=="")||(email=="")){
		alert("please complete the form before submission");
		return false;
	}
	return true;
}

//slide


} //onload