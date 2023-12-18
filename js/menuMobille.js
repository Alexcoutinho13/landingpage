window.onload = function () {
    document.querySelector(".menu_mobile").addEventListener("click", function () {
        if (document.querySelector(".menu ul").style.display == 'block') {
            document.querySelector(".menu ul").style.display = 'none';
        } else {
            document.querySelector(".menu ul").style.display = 'flex';
        }
    });
};