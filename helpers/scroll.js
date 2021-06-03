function scrollTop() {
    window.scroll({
        behavior: "smooth",
        top: 0,
    });
}

function scrollTo(elementId) {
    var el = elementId ? document.getElementById(elementId) : window
    window.scroll({
        behavior: "smooth",
        top: el.offsetTop,
    });
}

export { scrollTop, scrollTo }