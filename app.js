const button= document.getElementById("btn");
const colors = [
    "green",
    "orange",
    "blue",
    "pink",
    "purple",
];

button.addEventListener("click", () => {
document.body.style.backgroundColor =colors[getRandomNumber()];
});
function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}
   
