function pageSwitch(selectedPage) {
    // Functions to switch the active page
    const workBtn = document.getElementById("workBtn");
    const playBtn = document.getElementById("playBtn");
    const workPage = document.getElementById("workPage");
    const playPage = document.getElementById("playPage");

    function fadeOut(element) {
        element.style.opacity = 0;
        setTimeout(() => {
            element.style.display = "none";
        }, 300);
    }

    function fadeIn(element) {
        element.style.opacity = 0;
        element.style.display = "block";
        setTimeout(() => {
            element.style.opacity = 1;
        }, 10);
    }

    function switchPage(page) {
        if (page === "work") {
        workBtn.classList.add("active");
        playBtn.classList.remove("active");
            fadeOut(playPage);
            setTimeout(() => {
                fadeIn(workPage);
            }, 300);
        } else if (page === "play") {
            playBtn.classList.add("active");
            workBtn.classList.remove("active");
            fadeOut(workPage);
            setTimeout(() => {
                fadeIn(playPage);
            }, 300);
        }
    }

    // Initially, display the "work" page content
    switchPage(selectedPage);
}

export default pageSwitch;