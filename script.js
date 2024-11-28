// Christmas-themed gifts
const gifts = [
    "🎅 A Santa Hat!",
    "🎁 A Mystery Box!",
    "🍪 A Plate of Cookies!",
    "🎄 A Mini Christmas Tree!",
    "🧦 A Pair of Cozy Socks!",
    "✨ A String of Fairy Lights!",
    "☕ A Hot Chocolate Mug!",
    "❄️ A Snow Globe!"
];

// Jingle Bell sound effect
const sound = new Audio();
sound.src = "song/christmas-dreams-jingle-bells.mp3"; // Path to your audio file
sound.preload = "auto"; // Preload the audio


// Snowflakes generation
function generateSnowflakes() {
    const snowflakes = document.getElementById("snowflakes");
    for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");
        snowflake.style.left = Math.random() * 100 + "%";
        snowflake.style.animationDuration = Math.random() * 3 + 7 + "s";
        snowflake.style.animationDelay = Math.random() * 5 + "s";
        snowflake.textContent = "❄️";
        snowflakes.appendChild(snowflake);
    }
}

generateSnowflakes();

// Show a random gift
function showGift() {
    const randomIndex = Math.floor(Math.random() * gifts.length);
    const giftElement = document.getElementById('gift');

    giftElement.style.display = 'block';
    giftElement.textContent = gifts[randomIndex];

    // Play sound
    sound.play();

    // Refresh the page after 3 seconds
    setTimeout(() => {
        location.reload();
    }, 3000);
}

// Hover snowflake effect
document.body.addEventListener("mousemove", (e) => {
    createHoverSnowflake(e.pageX, e.pageY);
});

function createHoverSnowflake(x, y) {
    const hoverSnowflake = document.createElement("div");
    hoverSnowflake.classList.add("snowflake");
    hoverSnowflake.style.left = `${x}px`;
    hoverSnowflake.style.top = `${y}px`;
    hoverSnowflake.style.fontSize = `${Math.random() * 10 + 10}px`;
    hoverSnowflake.style.animationDuration = `${Math.random() * 2 + 2}s`;
    document.body.appendChild(hoverSnowflake);

    // Remove the snowflake after animation
    setTimeout(() => {
        hoverSnowflake.remove();
    }, 3000);
}
