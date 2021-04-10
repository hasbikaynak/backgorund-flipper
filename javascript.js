//we assigned a colors definiton with using arrays. these arrays gonna hold our colors
const colors = ["green","red","rgba(133,122,200)",
"#f15025"];

const btn = document.getElementById('btn') //we get the btn element
const color = document.querySelector('.color') // we get the color text

btn.addEventListener('click', function() { //we create a function to change our label name and background color
    const randomNumber = getRandomNumber(); 
    document.body.style.backgroundColor= colors[randomNumber]; // we changed the background color with giving it the definition of colors`s 
    //randomNumber which is 2. color 
    color.textContent =colors[randomNumber] //we changed the label textContent 
    })
    
    function getRandomNumber(){
    return Math.floor(Math.random()*colors.length)  
    }