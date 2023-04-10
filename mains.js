window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView();
}

var infoBtn = document.getElementById('infoBtn');
infoBtn.addEventListener('click', function() {
    scrollToSection('home2');
});

var infoBtn = document.getElementById('portfolio');
infoBtn.addEventListener('click', function() {
    scrollToSection('home3');
});

const alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.querySelector("h1").onmouseover=event=>{
    let i=0;

    const interval=setInterval(()=>{
        event.target.innerText=event.target.innerText.split("")
        .map((letter, index) =>{
            if(index<i){
                return event.target.dataset.value[index];
            }
            return alphabet[Math.floor(Math.random()*26)]
        })
        .join("");
        if(i>=event.target.dataset.value.length){
            clearInterval(interval);
        }
        i+=1/4;
    }, 30);

}

var downloadLink = document.getElementById('download-link');
var downloadButton = document.getElementById('download');

downloadButton.addEventListener('click', function() {
  downloadLink.click();
});

var container1 = document.getElementById("container1");
var container2 = document.getElementById("container2");
var container3_1 = document.getElementById("container3-1");
var container3_2 = document.getElementById("container3-2");
var container4_1 = document.getElementById("container4-1");
var container4_2 = document.getElementById("container4-2");
var container4_3 = document.getElementById("container4-3");

function removeClicked() {
  container1.classList.remove("clicked");
  container2.classList.remove("clicked");
  container3_1.classList.remove("clicked");
  container3_2.classList.remove("clicked");
  container4_1.classList.remove("clicked");
  container4_2.classList.remove("clicked");
  container4_3.classList.remove("clicked");
}

container1.addEventListener("click", function () {
  container1.classList.add("clicked");
  container2.classList.remove("clicked");
  container3_1.classList.remove("clicked");
  container3_2.classList.remove("clicked");
  container4_1.classList.remove("clicked");
  container4_2.classList.remove("clicked");
  container4_3.classList.remove("clicked");
});

container2.addEventListener("click", function () {
  container2.classList.add("clicked");
  container1.classList.remove("clicked");
  container3_1.classList.remove("clicked");
  container3_2.classList.remove("clicked");
  container4_1.classList.remove("clicked");
  container4_2.classList.remove("clicked");
  container4_3.classList.remove("clicked");
  });
  
  container3_1.addEventListener("click", function (event) {
  event.stopPropagation();
  container3_1.classList.add("clicked");
  container3_2.classList.remove("clicked");
  });
  
  container3_2.addEventListener("click", function (event) {
  event.stopPropagation();
  container3_2.classList.add("clicked");
  container3_1.classList.remove("clicked");
  });

  container4_1.addEventListener("click", function (event) {
    event.stopPropagation();
    container4_1.classList.add("clicked");
    container4_2.classList.remove("clicked");
    container4_3.classList.remove("clicked");
    });

    container4_2.addEventListener("click", function (event) {
        event.stopPropagation();
        container4_2.classList.add("clicked");
        container4_1.classList.remove("clicked");
        container4_3.classList.remove("clicked");
        });

        container4_3.addEventListener("click", function (event) {
            event.stopPropagation();
            container4_3.classList.add("clicked");
            container4_1.classList.remove("clicked");
            container4_2.classList.remove("clicked");
            });
  


  document.addEventListener("click", function (event) {
  if (!container1.contains(event.target) && !container2.contains(event.target) && !container3_1.contains(event.target) && !container3_2.contains(event.target) && !container4_1.contains(event.target) && !container4_2.contains(event.target) && !container4_3.contains(event.target)) {
  removeClicked();
  }
  });
  
  
  
  
  

