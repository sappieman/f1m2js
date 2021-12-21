const mytitle = document.getElementById('mytitle');
const myimage = document.getElementById('myimage');

let seasons = [
    {
        "titel":"seasons",
        "image":"img/seasons.jpg",
        "background":"gray"
    },   
    {
        "titel":"spring",
        "image":"img/spring.jpg",
        "background":"green"
    },
    {
        "titel":"summer",
        "image":"img/summer.jpg",
        "background":"yellow"
    },
    {
        "titel":"autumn",
        "image":"img/autumn.jpg",
        "background":"brown"
    },
    {
        "titel":"winter",
        "image":"img/winter.jpg",
        "background":"lightblue"

    }
];

// let season = {
//    "titel":"lente",
//    "image":"img/spring.jpg"
// };

function show(index){
mytitle.innerHTML = seasons[index].titel;
myimage.src = seasons[index].image;
document.body.style.backgroundColor = seasons[index].background;
}

