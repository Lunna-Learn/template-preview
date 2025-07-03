const form = document.getElementById("form");
const status = document.getElementById("form-status");
const btn = document.getElementById("submit-btn");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    form.classList.add("loading");
    status.textContent = "Sending...";
    status.style.display = "block";

    const formData = new FormData(form);

    try {
        const res = await fetch(form.action, {
            method: "POST",
            body: formData,
            headers: { Accept: "application/json" },
        });

        if (res.ok) {
            form.classList.remove("loading");
            form.classList.add("success");
            status.textContent = "Message sent successfully!";
            form.reset();
        } else {
            throw new Error("Network response was not ok");
        }
    } catch (err) {
        form.classList.remove("loading");
        form.classList.add("error");
        status.textContent = "Oops! Something went wrong.";
    }
});
