// GENİŞLEYEN KART

const panels = document.querySelectorAll("#genisleyenkart .panel");

panels.forEach(panel => {
    panel.addEventListener("click", () => {

        removeActive();
        panel.classList.add("active");
    });
})

function removeActive(){
    panels.forEach(panel => {
        panel.classList.remove("active");
    });
}

// İLERLEYEN ADIMLAR STEP WİZARD
const progress = document.getElementById("progress");
const circles = document.querySelectorAll("#ilerleyenadimlar .circle");
const prev = document.getElementById("prev");
const next = document.getElementById("next");


let currentActive = 1;

next.addEventListener("click", () => {
    currentActive++;

    if(currentActive > circles.length){
        currentActive = circles.length
    }

    update();
});

prev.addEventListener("click", () => {
    currentActive--;

    if(currentActive < 1){
        currentActive = 1;
    }

    update();
});

function update(){
    circles.forEach((circle, index) => {
        if(index < currentActive){
            circle.classList.add('point');
        } else{
            circle.classList.remove('point');
        }
    })

    const actives = document.querySelectorAll(".point");

     //console.log(actives.length, circles.length);
     //console.log(actives.length / circles.length);
     //console.log((actives.length / circles.length) *100);
     //console.log((actives.length -1) / (circles.length -1) *100);
     //console.log((actives.length -1) / (circles.length -1) *100 + '%');

    progress.style.width = (actives.length -1) / (circles.length -1) *100 + '%';


    if(currentActive === 1){
        prev.disabled = true;
    } else if(currentActive === circles.length){
        next.disabled = true;
    } else{
        prev.disabled = false;
        next.disabled = false;
    }
}

//Gizli Arama Widget

const search = document.querySelector('#gizliaramawidget .search')
const input = document.querySelector('#gizliaramawidget .input')
const btn = document.querySelector('#gizliaramawidget .btn')

btn.addEventListener('click', () => {
  search.classList.toggle('active')
  //input.focus()
})


//Bulanık Loading Ekranı

const loadText = document.querySelector('#bulanikloading .loading-text')
const bg = document.querySelector('#bulanikloading .bg')

let load = 0

let int = setInterval(bluring, 40)

function bluring() { 
  load++

  if (load > 99) {
    clearInterval(int)
  }
  //console.log(load)

  loadText.innerText = `${load}%`
  loadText.style.opacity = scale(load, 0, 110, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}


