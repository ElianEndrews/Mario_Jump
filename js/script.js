const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const over = document.querySelector('.over');
const tryAgain = document.querySelector('.tryAgain');

const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

var pontos = 0;


const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const cloudsPosition = +window.getComputedStyle(clouds).right.replace('px', '');
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    if (pipePosition <= 120 && pipePosition > 0 &&  marioPosition < 80){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        clouds.style.animation = 'none';
        clouds.style.right = `${cloudsPosition}px`;


        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        over.style.visibility = 'inherit';
        tryAgain.style.visibility = 'inherit';

        clearInterval('loop');
    }

    if (pipePosition < 0 && pipePosition > -15){
        pontos = pontos + 1;
        const score = pontos.toLocaleString('en-US',{
            minimumIntegerDigits: 4,
            useGrouping: false
        })
        document.getElementById("score").innerHTML = score;
        console.log(pipePosition);
    }

},17);

function deNovo() {
    window.location.reload(true);
}

document.addEventListener('keydown', jump);
