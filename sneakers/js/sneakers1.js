
let mainImg = document.getElementById("mainImg");
let boxImgFixed = document.getElementById("boxImgFixed");
let iconleft = document.getElementById("iconLeft");
let iconLeft = document.getElementById("iconRight")
let mainImgFixed1 = document.getElementById("mainImg");
let mainImgFixed2 = document.getElementById("iconleft");
let mainImgFixed3 = document.getElementById("iconleft");
let mainImgFixed4 = document.getElementById("iconRight");
let thumb1 = document.getElementById("thumb1");
let thumb2 = document.getElementById("thumb2");
let thumb3 = document.getElementById("thumb3");
let thumb4 = document.getElementById("thumb4");

mainImg.addEventListener("click",function() {
boxImgFixed.classList.remove("box-img-fixed-hidden");
boxImgFixed.classList.add("box-img-fixed");

});

 
iconRight.addEventListener("click", function() {
    if (!mainImgFixed1.classList.contains("img-hidden")) {
        mainImgFixed1.classList.add("img-hidden");
        mainImgFixed2.classList.remove("img-hidden");   
}
else if (!mainImgFixed2.classList.contains("img hidden")) {
   mainImgFixed2.classList.add("img-hidden");
   mainImgFixed3.classList.remove("img-hidden");
}
else if (mainImgFixed2.classList.contains("img-hidden")) {
    mainImgFixed2.classList.add("img-hidden");
    mainImgFixed1.classList.remove("img-hidden");

}
});

iconleft.addEventListener("click", function() {
    if (!mainImgFixed4.classList.contains("img-hidden")) {
        mainImgFixed4.classList.add("img-hidden");
        mainImgFixed3.classList.remove("img-hidden");   
}
else if (!mainImgFixed3.classList.contains("img hidden")) {
   mainImgFixed2.classList.add("img-hidden");
   mainImgFixed1.classList.remove("img-hidden");
}
else if (mainImgFixed1.classList.contains("img-hidden")) {
    mainImgFixed2.classList.add("img-hidden");
    mainImgFixed1.classList.remove("img-hidden");
}
else if (mainImgFixed1.classList.contains("img-hidden")) {
    mainImgFixed1.classList.add("img-hidden");
    mainImgFixed4.classList.remove("img-hidden");
    }
});

thumb1.addEventListener("click", function() {
    mainImg.setAttribute("src"," images/image-product-1.jpg");
    mainImgFixed1.classList.remove("img-hidden");
    mainImgFixed2.classList.add("img-hidden");
    mainImgFixed3.classList.add("img-hidden");
    mainImgFixed4.classList.add("img-hidden");

});
thumb2.addEventListener("click",function() {
    mainImg.setAttribute("src","images/image-product-2.jpg");
    mainImgFixed1.classList.add("img-hidden");
    mainImgFixed2.classList.remove("img-hidden");
    mainImgFixed3.classList.add("img-hidden");
    mainImgFixed4.classList.add("img-hidden");
});
thumb3.addEventListener("click",function() {
    mainImg.setAttribute("src","images/image-product-3.jpg");
    mainImgFixed1.classList.add("img-hidden");
    mainImgFixed2.classList.add("img-hidden");
    mainImgFixed3.classList.remove("img-hidden");
    mainImgFixed4.classList.add("img-hidden");
});
thumb4.addEventListener("click",function() {
    mainImg.setAttribute("src","images/image-product-4.jpg");
    mainImgFixed1.classList.add("img-hidden");
    mainImgFixed2.classList.add("img-hidden");
    mainImgFixed3.classList.add("img-hidden");
    mainImgFixed4.classList.remove("img-hidden");
});
mainImg.addEventListener("click",function() {
    alert("soy la imagen principal");
});
/* Cerrar el cuadro modal*/
botonCerrar.addEventListener("click",function() {

})


