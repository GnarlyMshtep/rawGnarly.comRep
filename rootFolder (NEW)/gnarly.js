console.log("yo");
document.getElementsByClassName("nav-bar")
function changeMainImg(press){
	let mainImg = document.getElementsByClassName("main-image-img")[0];
	mainImg.src=press.src;
	/*setInterval(function(){for(let i = 1.4,  i >= 1; i-=.01){
	mainImg.style.transform="scale("i")"}, 5);*/
}
//products js begins
function changeMainProdImg(press){
	let mainImg = document.getElementsByClassName("main-prod-image")[0];
	mainImg.src=press.src;
}

//products js ends

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
	exPage[button.id].style.display="block";
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