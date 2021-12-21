const myimage = document.getElementById('myimage');
const mytitle = document.getElementById('mytitle');

let paintings = [
    "img/painting0.jpg",
    "img/painting1.jpg",
    "img/painting2.jpg",
    "img/painting3.jpg",
    "img/painting4.jpg",
    "img/painting5.jpg",
];

let titles = [
    "De schilderijen van van Gogh",
    "De rode wijngaard",
    "De sterrennacht",
    "Sterrennacht boven de Rh�ne",
    "Zonnebloemen",
    "Boerderij in de Provence",
];

function changeimage(index){
    mytitle.innerHTML = titles[index];
    myimage.src = paintings[index];
}