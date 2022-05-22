const reviews = [
  {
    id: 1,
    name: "John Smith",
    job: "UX Designer",
    img: 
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTMxMjE1NzM&ixlib=rb-1.2.1&q=80",
    text: 
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae sapiente quibusdam quod rem autem, culpa ea omnis cupiditate quia voluptatibus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: 2,
    name: "David Black",
    job: "React Developer",
    img: 
    "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTMxMjQ4NjM&ixlib=rb-1.2.1&q=80",
    text: 
        "Recusandae sapiente quibusdam quod rem autem, culpa ea omnis cupiditate quia voluptatibus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae sapiente quibusdam quod rem autem, culpa ea omnis cupiditate quia voluptatibus.",
  },
  {
    id: 3,
    name: "Sara Conner",
    job: "Python Developer",
    img: 
    "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTMxMjQ3NTE&ixlib=rb-1.2.1&q=80",
    text: 
        "Sapiente quibusdam quod rem autem, culpa ea omnis cupiditate quia voluptatibus.Lorem, ipsum dolor sit amet consectetur adipisicing elit.  sapiente quibusdam quod rem autem, culpa ea omnis cupiditate quia voluptatibus recusandae.",
  },
  {
    id: 4,
    name: "Harry Potter",
    job: "Web Developer",
    img: 
    "https://images.unsplash.com/photo-1527980965255-d3b416303d12?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTMxMjQ3Nzg&ixlib=rb-1.2.1&q=80",
    text: 
        "Quibusdam sapientequod rem autem, culpa ea omnis cupiditate quia voluptatibus recusandae.Sapiente quibusdam quod rem autem, culpa ea omnis cupiditate quia voluptatibus.Lorem, ipsum dolor sit amet consectetur adipisicing elit.   ",
  }
];

//select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//set starting item
let currentItem = 0;

//load initial item
window.addEventListener('DOMContentLoaded', function(){
  showPerson()
})

//show person based on item
function showPerson(){
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

//show next person
nextBtn.addEventListener('click', function(){
  currentItem++;
  if(currentItem > reviews.length - 1){
    currentItem = 0;
  }
  showPerson();
})

//show prev person
prevBtn.addEventListener('click', function(){
  currentItem--;
   if(currentItem < 0){
    currentItem = reviews.length - 1;
  }
  showPerson();
})

//show random person
randomBtn.addEventListener('click', function(){
  currentItem = Math.floor(Math.random() * reviews.length)
  showPerson();
})