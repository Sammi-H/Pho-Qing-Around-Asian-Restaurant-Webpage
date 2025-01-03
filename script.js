var prev = document.getElementById("prev");
var next = document.getElementById("next");
var thumbnail = document.getElementsByClassName("thumbnail");

var background = new array (
    "https://www.marionskitchen.com/wp-content/uploads/2021/09/Bun-Bo-Hue8635.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Summer_roll.jpg/640px-Summer_roll.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/8/8c/Banh_Cuon_VN.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Cha_ca_la_vong.jpg/800px-Cha_ca_la_vong.jpg"

);
let i = 0;
next.onclick = function () {
    if (i < 4) {
        hero.style.backgroundImage = 'url("'+backgroundImg[i+1]+'")'
        thumbnail[i+1].classList.add("active");
        thumbnail[i].classList.add("active");
        i++;
    }
}
prev.onclick = function () {
    if (i > 0) {
        hero.style.backgroundImage = 'url("'+backgroundImg[i-1]+'")'
        thumbnail[i-1].classList.add("active");
        thumbnail[i].classList.add("active");
        i--;
    }
}