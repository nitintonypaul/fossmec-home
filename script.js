const toggle = document.getElementById('burger-toggle');

toggle.addEventListener('click', () => {
    if (document.getElementById("burger-menu").style.display == "none") {
        document.getElementById("burger-menu").style.display = "block"
    }
    else {
        document.getElementById("burger-menu").style.display = "none";
    }
});