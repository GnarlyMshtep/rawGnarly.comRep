
console.log("yo");

//index js begins
function animateLetterSpacing() {
  var element = document.getElementsByClassName("main-page-stretched")[0];
    element.classList.remove("main-page-stretched");
    element.classList.add("main-page-normal");
    console.log("did it");
}

//index js ends

document.getElementsByClassName("nav-bar")
function changeMainImg(press){
	let mainImg = document.getElementsByClassName("main-image-img")[0];
	mainImg.src=press.src;
	/*setInterval(function(){for(let i = 1.4,  i >= 1; i-=.01){
	mainImg.style.transform="scale("i")"}, 5);*/
}
//productX js begins
function changeMainProdImg(press){
	let mainImg = document.getElementsByClassName("main-prod-image")[0];
	mainImg.src=press.src;
}

function toggleNav(){
	console.log("handle clicked")
	var element = document.getElementsByClassName("nav-items")[0];
    element.classList.toggle("nav-items-showing");
}

//productX js ends

//extras js begins

exPage = document.getElementsByClassName("extras-page")
for(let i = 0, length1 = exPage.length; i < length1; i++){
	exPage[i].style.display="none";
}
exPage[0].style.display="block";

function changeExtrasPage(button){
	console.log("buttonClick!");
	for(let i = 0, length1 = exPage.length; i < length1; i++){
		exPage[i].style.display="none";
	}
	try {
		exPage[button.id].style.display="block";
	} catch(e) {
		console.log(e);
	}
	}


//extras js ends


//footer js

function alertJobs(str){
	alert(str);
}

var extrasPage = 0;
function navToJobs(){
    extrasPage = 1;
	window.location.href = "extras.html#jobs";
	console.log(extrasPage)
}
