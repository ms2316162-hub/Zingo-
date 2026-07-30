
document.addEventListener("DOMContentLoaded", () => {
    console.log("Zingo App Started");

    const app = document.getElementById("app");

    if (app) {
        app.innerHTML = `
            <div style="display:flex;justify-content:center;align-items:center;height:100vh;flex-direction:column;">
                <h1 style="font-size:42px;color:#00ff99;">Zingo</h1>
                <p style="font-size:18px;color:white;">Welcome to Zingo 🚀</p>
            </div>
        `;
    }
});
