let btnUp = document.querySelector(".up");


window.onscroll = function () {
    // btn up show
    if (window.scrollY >= 300) {
        btnUp.classList.add("show")
    } else {
        // btn up hidden
        btnUp.classList.remove("show")
    }

    //Show scroller
    let scrollElement = document.querySelector('.scroller');
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollTop = document.documentElement.scrollTop;

    scrollElement.style.width = `${(scrollTop / height) * 100}%`;
}

btnUp.onclick = function () {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
    })
}










