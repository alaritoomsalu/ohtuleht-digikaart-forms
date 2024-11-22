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
        const googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSfzYImbXeqRSlVG4dbiFI6x0LhnDx5HK50F3ZEPAVcJYmPCEg/formResponse";
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