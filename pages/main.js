const burger = document.querySelector('.burger-list')
const btn_move_right = document.querySelector('#move-right')
const btn_move_left = document.querySelector('#move-left')
const carousel = document.querySelector('#carousel')
const activeSlide = document.querySelector('#item-active')
const leftSlide = document.querySelector('#item-left')
const rightSlide = document.querySelector('#item-right')

import animals from "./animals.js";

document.body.addEventListener('click', (e) => {
    console.log(e.target)
    if (e.target.classList.contains('burger-close')) {
        burger.classList.toggle('burger-open')
        overlayToggle()
    } else if (e.target.classList.contains('burger-item') || e.target.parentElement.classList.contains('burger-item')
        || e.target.classList.contains('burger-overlay')) {
        burger.classList.remove('burger-open')
        overlayToggle()
    }
})

function overlayToggle() {
    if (burger.classList.contains('burger-open')) {
        document.querySelector('.burger-overlay').style.opacity = '0.5'
    } else {
        document.querySelector('.burger-overlay').style.opacity = '0'
    }
}

leftSlide.innerHTML = createPetsNumber(6).map(e=>{
    return  createCard(e)
}).join('')
rightSlide.innerHTML = createPetsNumber(6).map(e=>{
    return  createCard(e)
}).join('')
btn_move_right.addEventListener('click', moveRight)
btn_move_left.addEventListener('click', moveLeft)

function moveRight(e) {
    console.log(e.target)
    carousel.classList.add('transition-right')
    btn_move_right.removeEventListener('click', moveRight)
}
function moveLeft(e) {
    console.log(e.target)
    carousel.classList.add('transition-left')
    btn_move_left.removeEventListener('click', moveLeft)
}

carousel.addEventListener('animationend', (e) => {
    if (e.animationName === 'move-right') {
        carousel.classList.remove('transition-right')
        activeSlide.innerHTML = leftSlide.innerHTML
        leftSlide.innerHTML = createPetsNumber(6).map(e=>{
            return  createCard(e)
        }).join('')
    }else{
        carousel.classList.remove('transition-left')
        activeSlide.innerHTML = rightSlide.innerHTML
        rightSlide.innerHTML = createPetsNumber(6).map(e=>{
            return  createCard(e)
        }).join('')
    }
    btn_move_right.addEventListener('click', moveRight)
    btn_move_left.addEventListener('click', moveLeft)

})

function createCard(num) {
    return `
<div class="mainContent__pets-card">
<img src="${animals[num].image}" class="mainContent__pets-card-photo" alt="image">
                        <div class="mainContent__pets-card-mask">
                            <div class="mainContent__pets-photo-mask-name">${animals[num].name}</div>
                            <div class="mainContent__pets-photo-mask-description">${animals[num].location}</div>
                        </div>
                        <div class="mainContent__pets-card-info">
                            <div>
                                <div class="mainContent__pets__info-name">${animals[num].name}</div>
                                <div class="mainContent__pets__info-description">${animals[num].location}</div>
                            </div>
                            <img src="${animals[num].meal}" alt="meal">
                            </div>
                            </div>
`
}
function createPetsNumber(count){
    let arr=[]
    while(arr.length<count){
        let n=Math.floor(Math.random()*15)
        if(!arr.includes(n))arr.push(n)
    }
    return arr
}
