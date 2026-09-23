/* =========================================================
   HAPPY BIRTHDAY MY PRINCE 🤍
   PART 1 — LOADER • MUSIC • SCROLL • LIGHTBOX • ENVELOPES
========================================================= */

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 1000);

    }, 3000);
});




/* ==========================================
   HERO BUTTON SCROLL
========================================== */

const startBtn = document.getElementById("startStory");

startBtn.addEventListener("click", () => {

    document.getElementById("timeline").scrollIntoView({
        behavior: "smooth"
    });

});


/* ==========================================
   SCROLL REVEAL ANIMATION
========================================== */

const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {

    revealElements.forEach((element) => {

        const top = element.getBoundingClientRect().top;
        const trigger = window.innerHeight - 120;

        if (top < trigger) {
            element.classList.add("active");
        }

    });

};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


/* ==========================================
   POLAROID LIGHTBOX
========================================== */

const polaroids = document.querySelectorAll(".polaroid");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");
const closeLightbox = document.querySelector(".close-lightbox");

polaroids.forEach((photo) => {

    photo.addEventListener("click", () => {

        const img = photo.querySelector("img");
        const caption = photo.querySelector("span").textContent;

        lightbox.classList.add("show");
        lightboxImg.src = img.src;
        lightboxCaption.textContent = caption;

    });

});

closeLightbox.addEventListener("click", () => {
    lightbox.classList.remove("show");
});

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {
        lightbox.classList.remove("show");
    }

});


/* ==========================================
   OPEN WHEN ENVELOPES
========================================== */

const envelopes = document.querySelectorAll(".envelope");

envelopes.forEach((envelope) => {

    envelope.addEventListener("click", () => {
        envelope.classList.toggle("open");
    });

});


/* ==========================================
   FLOATING HEARTS
========================================== */

const heartLayer = document.getElementById("floating-hearts");

function createFloatingHeart() {

    const heart = document.createElement("div");

    heart.className = "floating-heart";
    heart.innerHTML = "❤";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.bottom = "-30px";

    heart.style.fontSize = 16 + Math.random() * 18 + "px";

    heart.style.animationDuration = 3 + Math.random() * 3 + "s";

    heartLayer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);

}

setInterval(createFloatingHeart, 1800);


/* ==========================================
   SHOOTING STARS
========================================== */

const shootingLayer = document.getElementById("shooting-stars");

function createShootingStar() {

    const star = document.createElement("div");

    star.className = "shooting-star";

    star.style.top = Math.random() * 300 + "px";
    star.style.left = "-150px";

    shootingLayer.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 2000);

}

setInterval(createShootingStar, 5000);


/* ==========================================
   CURSOR SPARKLE TRAIL
========================================== */

const sparkleLayer = document.getElementById("sparkleLayer");

window.addEventListener("mousemove", (event) => {

    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.style.left = event.clientX + "px";
    sparkle.style.top = event.clientY + "px";

    sparkleLayer.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 900);

});
/* =========================================================
   PART 2 — WISHES • HEART JAR • GIFTS • COUPLE QUIZ
========================================================= */


/* ==========================================
   30 TINY WISHES
========================================== */

const wishStars = document.querySelectorAll(".wish-star");
const wishMessage = document.getElementById("wishMessage");
const wishCount = document.getElementById("wishCount");

let openedWishes = 0;

wishStars.forEach((star) => {

    star.addEventListener("click", () => {

        if (star.classList.contains("opened")) return;

        star.classList.add("opened");

        openedWishes++;

        wishCount.textContent = openedWishes;

        const wish = star.dataset.wish;

        wishMessage.innerHTML = `
            <h3 style="color:#FFD46B;margin-bottom:12px;">✨ Birthday Wish</h3>
            <p>${wish}</p>
        `;

        // Tiny sparkle burst
        for (let i = 0; i < 8; i++) {
            createWishSparkle(star);
        }

    });

});


function createWishSparkle(element){

    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";

    const rect = element.getBoundingClientRect();

    sparkle.style.left =
        rect.left + rect.width/2 + (Math.random()*30-15) + "px";

    sparkle.style.top =
        rect.top + rect.height/2 + (Math.random()*30-15) + "px";

    document.getElementById("sparkleLayer").appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 900);

}


/* ==========================================
   HEART JAR
========================================== */

const heartButton = document.getElementById("heartButton");
const jarHearts = document.getElementById("jarHearts");
const heartCounter = document.getElementById("heartCounter");
const glassJar = document.getElementById("glassJar");

let heartsCollected = 0;
const MAX_HEARTS = 143;

heartButton.addEventListener("click", () => {

    if (heartsCollected >= MAX_HEARTS) return;

    heartsCollected++;

    heartCounter.textContent =
        `${heartsCollected} Hearts Collected ❤️`;

    addHeartToJar();

    // Jar full celebration
    if (heartsCollected === MAX_HEARTS) {

        glassJar.classList.add("full");

        createConfettiBurst();

        heartButton.textContent = "Jar Filled With Love 🤍";
        heartButton.disabled = true;

    }

});


function addHeartToJar(){

    const heart = document.createElement("div");

    heart.className = "jar-heart";
    heart.innerHTML = "❤";

    // Random position inside jar
    heart.style.left = Math.random() * 180 + "px";

    heart.style.color =
        ["#ff5e9a","#ff7bb2","#ff97c1","#ff4d88"]
        [Math.floor(Math.random()*4)];

    heart.style.fontSize =
        16 + Math.random()*16 + "px";

    heart.style.animationDuration =
        0.8 + Math.random()*0.8 + "s";

    jarHearts.appendChild(heart);

}


/* ==========================================
   HEART CONFETTI
========================================== */

const confettiLayer =
document.getElementById("confettiContainer");

function createConfettiBurst(){

    for(let i=0;i<120;i++){

        const piece = document.createElement("div");

        piece.className = "confetti-heart";
        piece.innerHTML =
            Math.random() > .4 ? "❤" : "✨";

        piece.style.left =
            Math.random()*100 + "vw";

        piece.style.top =
            "-20px";

        piece.style.animationDuration =
            3 + Math.random()*3 + "s";

        piece.style.fontSize =
            12 + Math.random()*18 + "px";

        piece.style.color =
            ["#FF5E99","#FFD46B","#FF8DBD","#FFFFFF"]
            [Math.floor(Math.random()*4)];

        confettiLayer.appendChild(piece);

        setTimeout(() => piece.remove(),6000);

    }

}


/* ==========================================
   SURPRISE GIFT BOXES
========================================== */

const gifts =
document.querySelectorAll(".gift-box");

gifts.forEach((gift)=>{

    gift.addEventListener("click",()=>{

        if(gift.classList.contains("open")) return;

        gift.classList.add("open");

        // Hearts for Gift 3
        if(gift.dataset.gift==="3"){

            for(let i=0;i<20;i++){
                createFloatingHeart();
            }

        }

    });

});


/* ==========================================
   COUPLE QUIZ
========================================== */

const quizResponses = {

    correct:[
        "Correct. You know us so well. 🤍",
        "Awww... you remembered. 🥹",
        "100 relationship points unlocked. ✨",
        "Obviously! That's our answer. 😂",
        "You're officially the cutest boyfriend. 💛"
    ],

    wrong:[
        "Hehe... try again, Mr. Birthday Boy. 😏",
        "Nope! That's not our story. 🤍",
        "Wrong answer... tiny punishment: one hug owed to me. 🫂",
        "Close... but not quite. 😂",
        "I'll forgive you because it's your birthday. 🎂"
    ]

};

const quizButtons =
document.querySelectorAll(".quiz-option");

quizButtons.forEach((button)=>{

    button.addEventListener("click",()=>{

        const card = button.parentElement;
        const response = card.querySelector(".quiz-response");

        // Disable remaining buttons
        const options =
        card.querySelectorAll(".quiz-option");

        options.forEach((btn)=>btn.disabled=true);

        if(button.dataset.answer==="correct"){

            button.classList.add("correct");

            response.textContent =
            quizResponses.correct[
                Math.floor(Math.random()*quizResponses.correct.length)
            ];

        }else{

            button.classList.add("wrong");

            response.textContent =
            quizResponses.wrong[
                Math.floor(Math.random()*quizResponses.wrong.length)
            ];

            // Highlight correct answer
            options.forEach((btn)=>{
                if(btn.dataset.answer==="correct"){
                    btn.classList.add("correct");
                }
            });

        }

    });

});


/* ==========================================
   EXTRA RANDOM HEARTS EVERY FEW CLICKS
========================================== */

let clickCount = 0;

document.body.addEventListener("click",()=>{

    clickCount++;

    if(clickCount % 8 === 0){

        for(let i=0;i<5;i++){
            setTimeout(createFloatingHeart,i*150);
        }

    }

});
/* =========================================================
   PART 3 — GALAXY MODE • COUNTDOWN • FIREWORKS • TYPEWRITER
========================================================= */

/* ==========================================
   SECRET GALAXY MODE
========================================== */

const secretStar = document.getElementById("secretStar");
const galaxyMessage = document.getElementById("galaxyMessage");

secretStar.addEventListener("click", () => {

    document.body.classList.toggle("galaxy-mode");
    galaxyMessage.classList.add("show");

    // Star explosion
    for(let i=0;i<80;i++){

        const sparkle = document.createElement("div");

        sparkle.className="sparkle";

        sparkle.style.left =
            window.innerWidth/2 + (Math.random()*300-150)+"px";

        sparkle.style.top =
            window.innerHeight/2 + (Math.random()*300-150)+"px";

        sparkle.style.background =
            ["#FFD46B","#FFFFFF","#FF9FC5","#B39DFF"]
            [Math.floor(Math.random()*4)];

        sparkle.style.width =
            sparkle.style.height =
            3 + Math.random()*5 + "px";

        document.getElementById("sparkleLayer").appendChild(sparkle);

        setTimeout(()=>sparkle.remove(),1000);

    }

});


/* ==========================================
   COUNTDOWN TO MIDNIGHT
========================================== */

const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const birthdayMessage = document.getElementById("birthdayMessage");

function updateCountdown(){

    const now = new Date();

    const midnight = new Date();
    midnight.setHours(24,0,0,0);

    const diff = midnight - now;

    if(diff <= 0){

        document.querySelector(".countdown-container").style.display="none";
        birthdayMessage.classList.add("show");

        startCelebration();
        return;
    }

    const h = Math.floor(diff/1000/60/60);
    const m = Math.floor((diff/1000/60)%60);
    const s = Math.floor((diff/1000)%60);

    hours.textContent = String(h).padStart(2,"0");
    minutes.textContent = String(m).padStart(2,"0");
    seconds.textContent = String(s).padStart(2,"0");

}

setInterval(updateCountdown,1000);
updateCountdown();


/* ==========================================
   BALLOONS
========================================== */

const balloonContainer = document.getElementById("balloons");

function createBalloon(){

    const balloon = document.createElement("div");
    balloon.className="balloon";

    balloon.style.left = Math.random()*100 + "vw";

    balloon.style.background =
        ["#FFD46B","#FF79AA","#8FD4FF","#BFA8FF","#FFB970"]
        [Math.floor(Math.random()*5)];

    balloon.style.animationDuration =
        8 + Math.random()*5 + "s";

    balloonContainer.appendChild(balloon);

    setTimeout(()=>balloon.remove(),14000);

}


/* ==========================================
   FIREWORKS CANVAS
========================================== */

const canvas = document.getElementById("fireworksCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize",()=>{

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});

let fireworks=[];

class Firework{

    constructor(){

        this.x = Math.random()*canvas.width;
        this.y = canvas.height;

        this.targetY =
            Math.random()*canvas.height/2 + 80;

        this.radius = 2;
        this.speed = 6 + Math.random()*3;

        this.color =
            ["#FFD46B","#FF7DAA","#FFFFFF","#BFA8FF"]
            [Math.floor(Math.random()*4)];

        this.exploded=false;
        this.particles=[];

    }

    update(){

        if(!this.exploded){

            this.y -= this.speed;

            if(this.y <= this.targetY){
                this.explode();
            }

        }else{

            this.particles.forEach((p)=>p.update());

        }

    }

    explode(){

        this.exploded=true;

        for(let i=0;i<40;i++){

            this.particles.push(new Particle(
                this.x,
                this.y,
                this.color
            ));

        }

    }

    draw(){

        if(!this.exploded){

            ctx.beginPath();
            ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
            ctx.fillStyle=this.color;
            ctx.fill();

        }else{

            this.particles.forEach((p)=>p.draw());

        }

    }

}

class Particle{

    constructor(x,y,color){

        this.x=x;
        this.y=y;

        this.color=color;

        this.angle=Math.random()*Math.PI*2;
        this.speed=Math.random()*5+2;

        this.life=100;

    }

    update(){

        this.x += Math.cos(this.angle)*this.speed;
        this.y += Math.sin(this.angle)*this.speed;

        this.life--;

    }

    draw(){

        ctx.beginPath();
        ctx.arc(this.x,this.y,2,0,Math.PI*2);

        ctx.fillStyle=this.color;
        ctx.globalAlpha=this.life/100;
        ctx.fill();

        ctx.globalAlpha=1;

    }

}

function animateFireworks(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    fireworks.forEach((f)=>{

        f.update();
        f.draw();

    });

    fireworks = fireworks.filter((f)=>{

        return !f.exploded ||
            f.particles.some((p)=>p.life>0);

    });

    requestAnimationFrame(animateFireworks);

}

animateFireworks();


/* Launch fireworks every few seconds */

function launchFirework(){

    fireworks.push(new Firework());

}

setInterval(launchFirework,2200);


/* ==========================================
   MIDNIGHT CELEBRATION
========================================== */

let celebrationStarted = false;

function startCelebration(){

    if(celebrationStarted) return;

    celebrationStarted=true;

    // Fireworks
    for(let i=0;i<10;i++){

        setTimeout(()=>{
            fireworks.push(new Firework());
        },i*400);

    }

    // Balloons
    setInterval(createBalloon,700);

    // Confetti Hearts
    setInterval(createConfettiBurst,3500);

}


/* ==========================================
   TYPEWRITER
========================================== */

const lastButton = document.getElementById("lastThingBtn");
const lastMessage = document.getElementById("lastThingMessage");
const typewriter = document.getElementById("typewriterText");

const finalText =
"I love you. Yesterday. Today. Tomorrow. Always. " +
"Thank you for being my safest place, my happiest coincidence, " +
"my favorite notification, and my forever person. 🤍";

let index = 0;
let typing = false;

lastButton.addEventListener("click",()=>{

    if(typing) return;

    typing = true;
    lastMessage.classList.add("show");

    typewriter.innerHTML = "";

    function type(){

        if(index < finalText.length){

            typewriter.innerHTML += finalText.charAt(index);
            index++;

            setTimeout(type,45);

        }

    }

    type();

});


/* ==========================================
   EXTRA SHOOTING STARS IN GALAXY MODE
========================================== */

setInterval(()=>{

    if(document.body.classList.contains("galaxy-mode")){

        createShootingStar();

        if(Math.random() > 0.5){
            createShootingStar();
        }

    }

},3000);


/* ==========================================
   RANDOM TWINKLE SPARKLES
========================================== */

setInterval(()=>{

    const sparkle = document.createElement("div");

    sparkle.className="sparkle";

    sparkle.style.left=Math.random()*window.innerWidth+"px";
    sparkle.style.top=Math.random()*window.innerHeight+"px";

    sparkle.style.background =
        ["#FFD46B","#FFFFFF","#FFEAA7"]
        [Math.floor(Math.random()*3)];

    document.getElementById("sparkleLayer").appendChild(sparkle);

    setTimeout(()=>sparkle.remove(),1200);

},800);