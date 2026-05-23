const audioCtx = new (window.AudioContext || window.webkitAudioContext)();



function playTone(frequency, duration = 0.5, delay) {
    setTimeout(function() {
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        oscillator.type = 'sine'; // Options: 'sine', 'square', 'sawtooth', 'triangle'
        oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);

        // Smooth out the sound to prevent popping
        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        oscillator.start();
        oscillator.stop(audioCtx.currentTime + duration);
    }, delay)
}

function playSound(src) {
    snd = new Audio(src)
    snd.volume = 1
    snd.currentTime = 0
    snd.play()
}

function startIn() {
    const title = document.getElementById("title")
    const cake = document.getElementById("cakeImg")
    const cb = document.getElementById("callbtn")

    cb.remove()

    cake.style.animationName = "walkto"
    cake.offsetHeight
    title.innerHTML = "&#x266B&#9834&#x266B&#9834&#x266B&#9834"
    
    setTimeout(function() {
        cake.src = "cake_give.webp"
        title.innerHTML = "&#x266B&#9834 Happy Birthday!!! &#x266B&#9834"
        playSound("cheer.mp3")
        cake.style.animationName = ""
        cake.style.transform = "translateX(0)"
        setTimeout(function() {
            document.getElementById("e").id = "p"
            document.getElementById("p").offsetHeight
            // document.body.innerHTML += `        
            // <p>
            //     Wish you all the best vro!, <br>
            //     Semoga segala urusan di lancarkan, <br>
            //     dimudahkan, dan sukses dunia dan akhirat. <br>
            //     Aamiin... :D, <br>
            //     Happy birthday vroooo
            // </p>`
        }, 0)

    }, 12000)
    playTone(392, 0.5, 0)
    playTone(392, 0.5, 350)
    playTone(440, 0.5, 750)
    playTone(392.00, 0.5, 1250)
    playTone(523.25, 0.5, 1750)
    playTone(493.88, 0.5, 2250)
    setTimeout(function() {
        playTone(392, 0.5, 0)
        playTone(392, 0.5, 350)
        playTone(440, 0.5, 750)
        playTone(392.00, 0.5, 1250)
        playTone(587.33, 0.5, 1750)
        playTone(523.25, 0.5, 2250)
    }, 3000)
    setTimeout(function() {
        playTone(392, 0.5, 0)
        playTone(392, 0.5, 350)
        playTone(783.99, 0.5, 600)
        playTone(659.26, 0.5, 1250)
        playTone(523.25, 0.5, 1750)
        playTone(493.88, 0.5, 2250)
        playTone(440.00, 0.5, 2750)
    }, 6000)
    setTimeout(function() {
        playTone(349.23 * 2, 0.5, 0)
        playTone(349.23 * 2, 0.5, 350)
        playTone(329.63 * 2, 0.5, 600)
        playTone(261.63 * 2, 0.5, 1250)
        playTone(293.66 * 2, 0.5, 1750)
        playTone(261.63 * 2, 0.5, 2250)
    }, 9250)    
}