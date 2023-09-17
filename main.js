const header   = document.querySelector('header');
const footer   = document.querySelector('footer');
const path     = document.querySelector('.path');
const loadTime = document.querySelector('.loadTime');

function buildLayout() {
    header.innerHTML = `
        <div class="bodywidth">
            <div class='left'>
                <h1><a href="/" title="home">pickledslugs<span class="cur">_</span></a></h1>
            </div>
            <div class='right'>
                <p>theme 🌓 (WIP)
            </div>
        </div>
    `;
    footer.innerHTML = `
        <div class="bodywidth">
            <div class='left'>
                <p>© pickledslugs '23 (twenty twenty three)
            </div>
            <div class='right'>
                <p id="coords">x = 0, y = 0
            </div>
        </div>
    `;
}

function notFound() {
    path.innerHTML = window.location.href.toString().slice(30);
    window.onload = function() {
        loadTime.innerHTML = (window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart) / 1000;
        document.getElementById('msg').style.display = 'block'
    }
}

function hello() {
    alert('hello');
}

buildLayout();

const trailer = document.getElementById("trailer");
const coords = document.getElementById("coords");

const animateTrailer = e => {
  const x = e.clientX - trailer.offsetWidth / 2,
        y = e.clientY - trailer.offsetHeight / 2;
        coords.innerHTML = `x = ${e.clientX}, y = ${e.clientY}`;
  
  const keyframes = {
    transform: `translate(${x}px, ${y}px)`
  }
  
  trailer.animate(keyframes, { 
    duration: 500, 
    fill: "forwards" 
  });
}

window.onmousemove = e => {animateTrailer(e);}
