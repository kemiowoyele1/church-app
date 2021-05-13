const nextBtn = document.querySelector('.next-btn');
const backBtn = document.querySelector('.back-btn');
const back1 = document.querySelector('#cover')
const title = document.querySelector('#title')
const front1 = document.querySelector('#front-text')
const flip = document.querySelector('.flip-cover')

nextBtn.addEventListener('click', ()=>{
    let currentPicture = Math.floor(Math.random()* pictures.length);
    console.log(currentPicture)
     front1.textContent = pictures[currentPicture].detail;
    flip.style.display = 'block';
    flip.style.animation = 'flip 0.6s ease';
     flip.style.backgroundImage = `url(${pictures[currentPicture].image})`;
  
    setTimeout(() =>{
        flip.style.display = 'none';
        back1.style.backgroundImage = `url(${pictures[currentPicture].image})`;
        back1.style.backgroundSize = '100% 100%';  
    }, 500)
})


console.log(pictures.length)