window.onload = choosePic;

var myPix = new Array("http://i.imgur.com/RtPsUeF.gifv","http://i.imgur.com/00kmXXS.png","http://i.imgur.com/m0EyHL8.png");

function choosePic() {
	randomNum = Math.floor((Math.random() * myPix.length));
	document.getElementById("myPicture").src = myPix[randomNum];
}
