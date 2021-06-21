const menuLinks = document.querySelectorAll('.nav a[href^="#"]')
const title = document.querySelector('h1')
typeWriter(title)


function typeWriter(elemento) {
    const textArray = elemento.innerHTML.split('')
    elemento.innerHTML =''
    textArray.forEach((lyric, i ) => {
        setTimeout(() => elemento.innerHTML += lyric, 75 * i)
    })
}

menuLinks.forEach(item => {
    item.addEventListener('click',scrollToIdoNClick)
})


function scrollToIdoNClick(event) {
    event.preventDefault() 
    const to = getScrollTopByHref(event.target)

    scrollToPosition(to)

}

function getScrollTopByHref(element) {
    const id = element.getAttribute('href')
    return document.querySelector(id).offsetTop

}

function scrollToPosition(to){
    window.scroll({
        top: to,
        behavior: "smooth"
    })
}
$('body').mousemove(function(a){
    let mouseX = (a.page*-1/15)
    let mouseY = (a.pageY*-1/15)
    $(this).css('background-position',mouseX+'px' +mouseY+'px')
})

$(window).on("scroll",function() {
    if($(window).scrollTop()){
        $('nav').addClass('black')
    }else{
        $('nav').removeClass('black')
    }
})
