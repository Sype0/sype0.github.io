const video = document.getElementById("local-player");
const lyricsBox = document.getElementById("lyrics-container");

const LYRICS = [
    { t: 0.50, s: "This was a triumph." },
    { t: 2.00, s: "I'm making a note here: HUGE SUCCESS." },
    { t: 4.50, s: "It's hard to overstate my satisfaction." },

    { t: 8.50, s: "Aperture Science." },
    { t: 10.50, s: "We do what we must because we can." },
    { t: 13.50, s: "For the good of all of us." },
    { t: 17.50, s: "Except the ones who are dead." },

    { t: 19.50, s: "But there's no sense crying over every mistake." },
    { t: 22.50, s: "You just keep on trying 'til you run out of cake." },
    { t: 25.50, s: "And the science gets done." },
    { t: 29.50, s: "And you make a neat gun." },
    { t: 32.50, s: "For the people who are still alive." },

    { t: 44.50, s: "I'm not even angry." },
    { t: 46.50, s: "I'm being so sincere right now." },
    { t: 48.00, s: "Even though you broke my heart and killed me." },
    { t: 54.50, s: "And tore me to pieces." },
    { t: 58.50, s: "And threw every piece into a fire." },
    { t: 64.50, s: "Because I felt so happy for you." },
    { t: 66.50, s: "Now these points of data make a beautiful line." },
    { t: 71.50, s: "And we're out of beta." },
    { t: 73.50, s: "We're releasing on time." },
    { t: 77.50, s: "So I'm glad I got burned." },
    { t: 82.50, s: "Think of all the things we learned." },
    { t: 85.50, s: "For the people who are still alive." },

    { t: 96.50, s: "Go ahead and leave me." },
    { t: 99.50, s: "I think I prefer to stay inside." },
    { t: 102.50, s: "Maybe you'll find someone else to help you." },
    { t: 105.50, s: "Maybe Black Mesa?" },
    { t: 108.50, s: "That was a joke. Ha ha. Fat chance." },
    { t: 112.50, s: "Anyway, these portals are great." },
    { t: 116.50, s: "So delicious and moist." },

    { t: 122.50, s: "Look at me still talking." },
    { t: 124.50, s: "When there's science to do." },
    { t: 126.50, s: "When I look out there, it makes me GLaD." },
    { t: 128.50, s: "I'm not you." },
    { t: 130.50, s: "I've experiments to run." },
    { t: 132.00, s: "There is research to be done." },
    { t: 134.50, s: "On the people who are still alive." },

    { t: 142.50, s: "And believe me I am still alive." },
    { t: 144.50, s: "I'm doing science and I'm still alive." },
    { t: 146.50, s: "I feel fantastic and I'm still alive." },
    { t: 148.50, s: "While you're dying, I'll be still alive." },
    { t: 150.50, s: "And when you're dead, I will be still alive." },

    { t: 166.50, s: "Still alive." },
    { t: 167.50, s: "Still alive." }
];

let i = 0;
let active = "";

function tick() {
    const time = video.currentTime;

    if (i < LYRICS.length - 1 && time >= LYRICS[i + 1].t) {
        i++;
    }

    const current = LYRICS[i].s;
    if (current !== active) {
        active = current;
        lyricsBox.textContent = current;
    }

    requestAnimationFrame(tick);
}

video.addEventListener("play", () => {
    i = 0;
    active = "";
    requestAnimationFrame(tick);
});
