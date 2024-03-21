import { imgfun } from "./img.js"
import { infofunc } from "./info.js"
import { infofunc2 } from "./info.js"
import { cardfunc } from "./card.js"

let sec1 = document.getElementById('section1')
let sec2 = document.getElementById('section2')

let obj1 = {
    title   : "WELCOME MY FRIEND",
    par     : "By seeping into every aspect of our life, technology has changed the way we behave and operate. From communication and transport to healthcare and connectivity, technology has enhanced our lives for the better. The best part is that it is ever-evolving by facilitating more advanced features.",
    button  : "Elex Rollorata Tahud",
    img     : "images/lex.jpg"
}

const { title, par, button, img } = obj1

let obj2 = {
    image   : "images/lex.jpg",
    desc    : "You have to believe in yourself when no one else does.",
    button1 : "Learn More",
    title2  : "Project Complete"
}

const { image, desc, button1, title2 } = obj2

section1.append(infofunc(title, par, button))
section1.append(imgfun(img))
section3.append(infofunc2(title2))
section2.append(cardfunc(image, desc, button1))
section2.append(cardfunc(image, desc, button1))
section2.append(cardfunc(image, desc, button1))

