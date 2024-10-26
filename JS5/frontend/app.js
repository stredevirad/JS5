// Registration Form Submission
document.getElementById("registerForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;

    try {
        const response = await fetch("http://localhost:5000/api/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password })
        });

        const messageEl = document.getElementById("registerMessage");
        if (response.ok) {
            messageEl.style.color = "green";
            messageEl.textContent = "User registered successfully!";
        } else {
            messageEl.style.color = "red";
            const errorMessage = await response.text();
            messageEl.textContent = errorMessage || "Error registering user.";
        }
    } catch (error) {
        console.error("Error:", error);
        document.getElementById("registerMessage").textContent = "An error occurred during registration.";
    }
});

// Login Form Submission
document.getElementById("loginForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    try {
        const response = await fetch("http://localhost:5000/api/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        const messageEl = document.getElementById("loginMessage");
        if (response.ok) {
            const data = await response.json();
            messageEl.style.color = "green";
            messageEl.textContent = "Login successful!";
            console.log("Token:", data.token); // Token received from server
            // You may want to store the token in local storage or use it immediately
            // localStorage.setItem("token", data.token); // Optional
        } else {
            messageEl.style.color = "red";
            const errorMessage = await response.text();
            messageEl.textContent = errorMessage || "Invalid credentials.";
        }
    } catch (error) {
        console.error("Error:", error);
        document.getElementById("loginMessage").textContent = "An error occurred during login.";
    }
});
