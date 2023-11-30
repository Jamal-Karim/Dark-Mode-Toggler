//import anime from '/node_modules/animejs/lib/anime.es.js';

const moonPath = "M14.5 27C14.5 42.1878 27.5 55.5 27.5 55.5C12.3122 55.5 0 43.1878 0 28C0 12.8122 12.3122 0.5 27.5 0.5C28.5501 0.5 14.5 11.8122 14.5 27Z";

const sunPath = "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z"

const darkMode = document.querySelector(".dark_mode");

let toggle = false;

let title = document.querySelector("h1");

darkMode.addEventListener("click", () => {
    console.log("sun got clicked");

    const timeline = anime.timeline({
        duration : 750,
        easing : 'easeOutExpo'
    })

    timeline.add({
        targets : ".sun",
        d : [
            {value : toggle ? sunPath : moonPath}
        ]
    })
    .add({
        targets : ".dark_mode",
        rotate : toggle ? 0 : 320
    }, "-=500")
    .add({
        targets : "section",
        backgroundColor : toggle ? "rgb(199,199,199)" : "rgb(22,22,22)",
        color : toggle ? "rgb(22, 22, 22)" : "rgb(199,199,199)"
    }, "-=700")
    .add({
        complete: function(){
            title.innerText = toggle ? "Dark Mode" : "Light Mode";
        }
    }, "-=1500")

    if(!toggle){
        toggle = true;
    }
    else{
        toggle = false;
    }
})