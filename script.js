// Mood to color and quote mapping
const moodColors = {
    happy: {
        color: "#ffb300ff",        // Goldenrod
        quote: "Keep your face always toward the sunshine, and shadows will fall behind you."
    },
    calm: {
        color: "#ffb3a4ff",         // Peach
        quote: "Let your heart be still like water, and you will see clarity."
    },
    focused: {
        color: "#53a788ff",      // Olive Green
        quote: "Stay grounded and bloom where you’re planted."
    },
    excited: {
        color: "#f97b6eff",      // Coral
        quote: "Throw kindness like confetti!"
    },
    creative: {
        color: "#f1b2ffff",     // Magenta
        quote: "The world is but a canvas to our imagination."
    },
    sad: {
        color: "#5c2735ff",          // Burgundy
        quote: "t’s okay to feel what you need to feel, just don’t unpack and live there."
    },
    energetic: {
        color: "#82cff0ff",    // Firebrick Red
        quote: "Sparkle like you mean it!"
    },
    relaxed: {
        color: "#e1bd8dff",      // Warm Beige
        quote: "Take it slow, and breathe easy."
    },
    tired: {
        color: "#c1aaa4ff",         // Soft Taupe
        quote: "Rest your soul; tomorrow needs you at your best."
    }
};

// Function to display the color and quote based on selected mood
function showColor() {
    const mood = document.getElementById('moodSelector').value;
    const { color, quote } = moodColors[mood]; // Get color and quote for selected mood
    
    const panel = document.getElementById('colorPanel');
    panel.style.backgroundColor = color; // Set background color
    panel.style.display = "block"; // Show the panel

    // Set mood name and quote with the desired font color
    panel.innerHTML = `<h2 style="color: #ffdfab;">Your Mood: ${mood.charAt(0).toUpperCase() + mood.slice(1)}</h2><p style="color: #ffdfab;">${quote}</p>`;
}
