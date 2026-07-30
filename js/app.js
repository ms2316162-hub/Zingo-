
document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");

    const reels = [
        {
            username: "@zingo",
            caption: "Welcome to Zingo 🚀",
            video: "https://www.w3schools.com/html/mov_bbb.mp4"
        }
    ];

    let current = 0;

    function showReel(index) {
        const reel = reels[index];

        app.innerHTML = `
            <div id="reel-container">
                <video id="reelVideo"
                    src="${reel.video}"
                    autoplay
                    muted
                    loop
                    playsinline>
                </video>

                <div id="overlay">
                    <h3>${reel.username}</h3>
                    <p>${reel.caption}</p>
                </div>
            </div>
        `;
    }

    showReel(current);
});
