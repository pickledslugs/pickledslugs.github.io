const header   = document.querySelector('header');
const footer   = document.querySelector('footer');
const path     = document.querySelector('.path');
const loadTime = document.querySelector('.loadTime');

function buildLayout() {
    header.innerHTML = `
        <div class="bodywidth">
        <h1><a href="/" title="home">pickledslugs<span class="cur">_</span></a></h1>
        </div>
    `;
    
    footer.innerHTML = `
        <div class="bodywidth">
        <p>© pickledslugs '22 (twenty twenty two)
        </div>
    `;
}

function errPage() {
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