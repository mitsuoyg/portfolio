function scrollTop(elementId) {
    var el = elementId ? document.getElementById(elementId) : window
    el.scroll({
        behavior: "smooth",
        top: 0,
    });
}
function scrollBottom(elementId) {
    var el = elementId ? document.getElementById(elementId) : window
    el.scrollTo({
        top: 20000,
        behavior: 'smooth'
    });
}

//
function scrollTo(elementId) {
    var el = elementId ? document.getElementById(elementId) : window
    window.scroll({
        behavior: "smooth",
        top: el.offsetTop,
    });
}

export { scrollTop, scrollBottom, scrollTo }