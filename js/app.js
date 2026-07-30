
document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");

    app.innerHTML = `
        <div id="reel-container">
            <video
                id="reelVideo"
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                autoplay
                muted
                loop
                playsinline
            ></video>

            <div id="overlay">
                <h3>@zingo</h3>
                <p>Welcome to Zingo 🚀</p>
            </div>
        </div>
    `;
});
