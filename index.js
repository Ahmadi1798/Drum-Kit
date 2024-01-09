
window.addEventListener('keydown', function(e) {
   playAudio(e.key);
 playingAnimition(e.key);
})
const numberOfdivs = document.querySelectorAll('.card').length;
for(var i = 0; i < numberOfdivs; i++){
    document.querySelectorAll('.card')[i].addEventListener('click', function(){
        const key = this.lastElementChild.firstElementChild.innerHTML;
        playAudio(key);
        playingAnimition(key.toLowerCase());
    })
}

function playAudio(key){
    const lowercase = key.toLowerCase();
    switch(lowercase){
        case "a":
            let clap = new Audio('./sounds/clap.wav');
            clap.play();
            break;
        case "s": 
            let hihat = new Audio('./sounds/hihat.wav');
            hihat.play();
            break;
        case "d":
            let kick = new Audio('./sounds/kick.wav');
            kick.play();
            break;
        case "f": 
            let openhat = new Audio('./sounds/openhat.wav');
            openhat.play();
            break;
        case "g":
            let boom = new Audio('./sounds/boom.wav');
            boom.play();
            break;
        case "h": 
            let ride = new Audio('./sounds/ride.wav');
            ride.play();
            break;
        case "j":
            let snare = new Audio('./sounds/snare.wav');
            snare.play();
            break;
        case "k": 
            let tom = new Audio('./sounds/tom.wav');
            tom.play();
            break;
        case "l": 
            let tink = new Audio('./sounds/tink.wav');
            tink.play();
            break;

    }
}
function playingAnimition(currentKey){
    var activeButton = document.querySelector('.'+currentKey);
    activeButton.classList.add('pressed');
    setTimeout(function(){
        activeButton.classList.remove('pressed');
    },100);

}