// Get the current date and time
var currentDate = new Date();

var year = currentDate.getFullYear();      
var month = currentDate.getMonth() + 1;    
var day = currentDate.getDate();         

document.getElementById("time").innerHTML = year + "-" + month + "-" + day +  " " + "(THU) ~ 16(FRI)"; 


const hamburger = document.querySelector('.hamburger');
const navMenu = document.getElementById('nav-menu');


hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('mobile-nav');
});