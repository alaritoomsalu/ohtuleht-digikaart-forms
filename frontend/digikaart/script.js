let userName = "";

// Function to handle the name entry and show the card
function startCard() {
    const nameInput = document.getElementById("name").value;
    if (!nameInput.trim()) {
        alert("Palun sisesta oma nimi!");
        return;
    }

    // Play the background music
    const music = document.getElementById("background-music");
    music.play().catch(error => console.error("Music playback failed:", error));

    userName = nameInput;
    document.querySelector(".name-input-container").classList.add("hidden");
    document.querySelector(".first-card").classList.remove("hidden");

    // Set the name in the first card
    document.getElementById("partner-name").textContent = "Hea " + userName + "!";
}

async function sendWish() {
    // Get the value from the textarea
    const wish = document.querySelector(".input-field").value;

    // Check if the user entered a wish
    if (!wish.trim()) {
        alert("Palun kirjuta oma soov!");
        return;
    }

    alert("Loodame, et su soov täitub!");

    try {
        // Replace with your Google Form's action URL and field name
        const googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLScM2rLGlS38VmuYBa6TmESy7NxFPA9cHeE-TYKh3WPCdJLJtQ/formResponse";
        const formFieldName = "entry.1113432211";

        // Create form data
        const formData = new URLSearchParams();
        formData.append(formFieldName, "soov");

        // Send the data as a POST request
        const response = await fetch(googleFormURL, {
            method: "POST",
            mode: "no-cors",
            body: formData,
        });

        // Clear textarea and switch cards
        document.querySelector(".input-field").value = "";
        document.querySelector(".first-card").classList.add("hidden");
        document.querySelector(".second-card").classList.remove("hidden");

    } catch (error) {
        console.error("Viga soovi saatmisel:", error);
        alert("Serveriga ühendamine ebaõnnestus!");
    }
}