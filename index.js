 var productImg = document.getElementById("productimg");
 var smallimg = document.getElementsByClassName("small-img");

 smallimg[0].onclick = function () {
   productImg.src = smallimg[0].src;
 }
 smallimg[1].onclick = function () {
   productImg.src = smallimg[1].src;
 }
 smallimg[2].onclick = function () {
   productImg.src = smallimg[2].src;
 }
 smallimg[3].onclick = function () {
   productImg.src = smallimg[3].src;
 }