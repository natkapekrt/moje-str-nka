
do{
    var email = prompt("Jaký je mail?(Je to email)");
    var password = prompt("jaký je heslo?(je to heslo)");  
}while(password !=="heslo" && email !=="email"){7
 
    alert("správně")
 
}
const image = document.querySelectorAll(".galerie img");

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function() {
        const modal = document.createElement("div");
        modal.classList.add("modal");
        modal.innerHTML = `<img src="${this.src}" alt="${this.alt}">`;
        document.body.appendChild(modal);

        modal.addEventListener("click", function() {
            modal.parentNode.removeChild(modal);
        });
    });
}
const btnRežim = document.getElementById("režim");

btnRežim.addEventListener("click", function() {
  document.body.classList.toggle("tmavy");
});
const slideshow = document.getElementById("slideshow");
const images = slideshow.querySelectorAll("img");
const btnPredchozi = document.getElementById("predchozi");
const btnDalsi = document.getElementById("dalsi");

let currentImageIndex = 0;

btnDalsi.addEventListener("click", function() {
  currentImageIndex++;

  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }

  showImage(currentImageIndex);
});

btnPredchozi.addEventListener("click", function() {
  currentImageIndex--;

  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }

  showImage(currentImageIndex);
});

function showImage(index) {
  images.forEach(function(img) {
    img.style.opacity = 0;
  });
  images[index].style.opacity = 1;
}