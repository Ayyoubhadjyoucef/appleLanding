let body = document.querySelector("body");
let mainPhone = document.querySelector(".mainPhone");

console.log(mainPhone);
function phone(source){
    mainPhone.src = source;
}
function Colors(coleur){
    body.style.backgroundColor = coleur;
}