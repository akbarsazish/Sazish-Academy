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

// speaker section data

const speakerData = [
  {
    id: '1',
    name: 'Frontend Developer',
    title: 'Full-Stack Developer',
    bio: 'pecializes in creating user interfaces and experiences using HTML, CSS, JavaScript, and various front-end frameworks.',
    img: 'assets/images/ali.jpg',
  },
  {
    id: '2',
    name: 'Abdul Ali Noori',
    title: 'Backed Developer',
    bio: 'Focuses on server-side development, dealing with databases, APIs, and business logic to ensure the smooth functioning of applications.',
    img: 'assets/images/nori.jpg',
  },
  {
    id: '3',
    name: 'Jawad Alizadeh',
    title: 'Full-Stack Developer',
    bio: 'Proficient in both front-end and back-end development, capable of working with both client-side and server-side technologies.',
    img: 'assets/images/jawad.jpg',
  },
  {
    id: '4',
    name: 'Gholam Rasoli',
    title: 'DevOps Engineer',
    bio: 'Responsible for designing, coding, testing, and maintaining software applications and systems.',
    img: 'assets/images/rasoli.jpg',
  },
  {
    id: '5',
    name: 'Jawad Royesh',
    title: 'Mobile App Developer',
    bio: 'Specializes in developing applications for mobile devices, such as Android, using programming languages like Java or Kotlin.',
    img: 'assets/images/royesh.jpg',
  },
  {
    id: '6',
    name: 'Eshaq Newton',
    title: 'Data Scientist',
    bio: 'Analyzes and interprets complex data sets to extract insights and drive decision-making through statistical analysis, and data visualization techniques.',
    img: 'assets/images/fahimi.jpg',
  },
];


const speakerContainer = document.getElementById('speaker-container');
function generateSpeakerCard() {

 

  speakerContainer.innerHTML = speakerData.map((speakerObj) => {



    return `
        <div class="speaker-items" id="${speakerObj.id}">
            <div class="speak-img">
                  <img class="speaker-image" src="${speakerObj.img}" alt="">
            </div>
            <div class="speaker-info">
                <h3>${speakerObj.name}</h3>
                <span class="position">${speakerObj.title}</span>
                <div class="line-container"></div>
                <p class="speaker-bio">${speakerObj.bio}</p>
            </div>
        </div>
        `;
  }).join('');
}



generateSpeakerCard();
