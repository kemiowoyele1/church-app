
        const hamburgers =  document.querySelector('.hamburger');
        const navLinks =  document.querySelector('.nav-links');      
        const links = document.querySelectorAll(' .nav-links li' )
        const lines = document.querySelectorAll('.line' )
        const container = document.querySelector('.container');
        const video1 = document.querySelector("#video1");
        const cookies1 = document.querySelector(".cookies");
        const acceptCookies = document.querySelector(".accept-cookies");
        const date1 = document.querySelector(".time-keeper");
        let cookiesInterval;
       
       
        hamburgers.addEventListener('click', () => {
        
            navLinks.classList.toggle("nav-link-open");
            links.forEach(link => {
                link.classList.toggle('fade');
            })
            lines.forEach(line => {
                line.classList.toggle('hamburger-color');
            })
        })
        container.addEventListener('click', () => {
            video1.play();

        })
        function dateBuilder (d) {
    let months = ['January', 'February', 'March', 'April', 
                'May', 'June', 'July', 'August', 
                'September','October', 'November' ,'December'];
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 
                'Thursday', 'Friday', 'Saturday'];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month}, ${year}`
  }
  function displayDate() {
       
        let now = new Date();
        date1.innerText = dateBuilder(now); 
    
    }
    displayDate();
    cookiesInterval = setInterval(() => {
        cookies1.style.display = "grid";
     
    }, 2000)
    acceptCookies.addEventListener("click", () => {
        clearInterval(cookiesInterval);
        cookies1.style.display = "none"
   
    })

    fetch('http://localhost:3000/posts')
    .then(result => {
        console.log(result);
    }) .catch (err => {
        console.log(err)
    })