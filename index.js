

const wrapper = document.querySelector('.wrapper')
const repeat = document.querySelector('.repeat')
const warning = document.querySelector('#warning')

let warningLine = 0


const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
            injectRepeat(entry)
        }
    })

}, {})
//function to infinitely repeat road
function injectRepeat(entry){
    observer.unobserve(entry.target)

    const clonedRepeat = repeat.cloneNode(true)
    wrapper.appendChild(clonedRepeat)
    observer.observe(clonedRepeat)


    injectLine()
    
}

function injectLine() {
   warningLine++
   warning.innerText = warningLine;

const newLine1 = document.createElement('div')
newLine1.className = "linetext"
newLine1.innerText = "This road never ends"
newLine1.style.left = 100 + Math.random() * (window.innerWidth - 300) + 'px'
newLine1.style.top = wrapper.offsetHeight - 200 + 'px'
document.body.appendChild(newLine1)

    if (warningLine > 2) {
        newLine1.innerText = "Honestly, there is no end here!"
    }

    if (warningLine > 3) {
        newLine1.innerText = ""
    }

    if (warningLine > 5) {
        newLine1.innerText = "What are you doing?"
    }

    if (warningLine > 6) {
        newLine1.innerText = ""
    }

    if (warningLine > 10) {
        newLine1.innerText = "Why are you still scrolling?"
    }

    if (warningLine > 11) {
        newLine1.innerText = "Look at the title... It is self explanatory"
    }

    if (warningLine > 12) {
        newLine1.innerText = ""
    }

    if (warningLine > 20) {
        newLine1.innerText = "Stop scrolling"
    }

    if (warningLine > 23) {
        newLine1.innerText = ""
    }

    if (warningLine > 30) {
        newLine1.innerText = "There really is no end"
    }

    if (warningLine > 33) {
        newLine1.innerText = ""
    }

    if (warningLine > 40) {
        newLine1.innerText = "This will go on forever"
    }

    if (warningLine > 45) {
        newLine1.innerText = ""
    }

    if (warningLine > 50) {
        newLine1.innerText = "You need to get a life"
    }

    if (warningLine > 51) {
        newLine1.innerText = ""
    }

    if (warningLine > 60) {
        newLine1.innerText = "Read a book"
    }

    if (warningLine > 62) {
        newLine1.innerText = ""
    }

    if (warningLine > 70) {
        newLine1.innerText = "There must be someone you can call"
    }

    if (warningLine > 71) {
        newLine1.innerText = ""
    }

    if (warningLine > 90) {
        newLine1.innerText = "Why"
    }

    if (warningLine > 95) {
        newLine1.innerText = "WHY why why are you still here?"
    }

    if (warningLine > 96) {
        newLine1.innerText = ""
    }

    if (warningLine > 100) {
        newLine1.innerText = "I'm getting tired of explaining this to you"
    }

    if (warningLine > 101) {
        newLine1.innerText = ""
    }

    if (warningLine > 130) {
        newLine1.innerText = "THERE IS NO END"
    }

    if (warningLine > 135) {
        newLine1.innerText = "I feel like i've given you enough warnings"
    }

    if (warningLine > 136) {
        newLine1.innerText = ""
    }

    if (warningLine > 140) {
        newLine1.innerText = "I'm going to stop now"
    }

    if (warningLine > 141) {
        newLine1.innerText = ""
    }

    if (warningLine > 143) {
        newLine1.innerText = "With the warnings, not the road"
    }

    if (warningLine > 144) {
        newLine1.innerText = ""
    }

    if (warningLine > 145) {
        newLine1.innerText = "The road is neverending!"
    }

    if (warningLine > 146) {
        newLine1.innerText = ""
    }
    
    if (warningLine > 250) {
        newLine1.innerText = "OH MY GOD!!!"
    }

    if (warningLine > 251) {
        newLine1.innerText = ""
    }

    if (warningLine > 255) {
        newLine1.innerText = "Ofcourse you're still here"
    }

    if (warningLine > 256) {
        newLine1.innerText = ""
    }

    if (warningLine > 270) {
        newLine1.innerText = "What are you trying to accomplish?"
    }

    if (warningLine > 271) {
        newLine1.innerText = ""
    }

    if (warningLine > 280) {
        newLine1.innerText = "This is ridiculous"
    }

    if (warningLine > 281) {
        newLine1.innerText = ""
    }

    if (warningLine > 290) {
        newLine1.innerText = "Leave this site"
    }

    if (warningLine > 291) {
        newLine1.innerText = "If you don't leave, i'm leaving"
    }

    if (warningLine > 292) {
        newLine1.innerText = ""
    }

    if (warningLine > 300) {
        newLine1.innerText = "Right, that's it"
    }

    if (warningLine > 301) {
        newLine1.innerText = ""
    }

    if (warningLine > 305) {
        newLine1.innerText = "GoodBye!"
    }
    if (warningLine > 306) {
        newLine1.innerText = ""
    }

    if (warningLine > 500) {
        newLine1.innerText = "You deserve a medal for this"
    }

    if (warningLine > 501) {
        newLine1.innerText = ""
    }

    if (warningLine > 700) {
        newLine1.innerText = "You are now the king of this road"
    }

    if (warningLine > 701) {
        newLine1.innerText = ""
    }

    if (warningLine > 1000) {
        newLine1.innerText = "You Win. I QUIT!"
    }

    if (warningLine > 1001) {
        newLine1.innerText = ""
    }





}

observer.observe(repeat)