/*locOrientation = screen.lockOrientation || screen.mozLockOrientation || screen.msLockOrientation || screen.orientation.lock;
locOrientation('portrait');*/
console.log("yo");

//nav js begins

function toggleNav(){
	console.log("handle clicked")
	var element = document.getElementsByClassName("nav-items")[0];
    element.classList.toggle("nav-items-showing");}

//nav js ends

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

//productX js ends

//extras js begins

exPage = document.getElementsByClassName("extras-page")
for(let i = 0, length1 = exPage.length; i < length1; i++){
	exPage[i].style.display="none";
}
try{
exPage[0].style.display="block";
}catch(e){
	console.log(e);
}
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
var extrasPage = 0;
function navToJobs(){
    extrasPage = 1;
	window.location.href = "extras.html#jobs";
	console.log(extrasPage)
}


//form js starts

let subButs=document.getElementsByClassName("submit");
console.log(subButs.length)
for(let i = 0, length1 = subButs.length; i < length1; i++){
	subButs[i].addEventListener('click', onClickSubmit());

}
function onClickSubmit(){
	alert("newsletter is currently not active")
}