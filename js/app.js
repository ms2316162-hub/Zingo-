
document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");

    app.innerHTML = `
        <div id="splash">
            <h1>Zingo</h1>
            <p>Short Video Social Platform</p>
        </div>
    `;

    setTimeout(() => {
        app.innerHTML = `
            <div id="home">
                <h2>🏠 Home Feed</h2>
                <p>Zingo is loading reels...</p>
            </div>
        `;
    }, 3000);
});
