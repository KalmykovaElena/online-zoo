const animals = [
    {name: 'GIANT PANDAS',
        location: 'Native to Southwest China',
        image: '../../assets/pets/pandas.jpg',
        meal: "../../assets/pets/herbivore.png"},
    {name: 'EAGLES',
        location: 'Native to South America',
        image: '../../assets/pets/eagle.jpg',
        meal: "../../assets/pets/predator.png"},
    {name: 'GORILLAS',
        location: 'Native to Congo',
        image: '../../assets/pets/gorilla.jpg',
        meal: "../../assets/pets/herbivore.png"},
    {name: 'TWO-TOED SLOTH',
        location: 'Mesoamerica, South America',
        image: '../../assets/pets/sloth.jpg',
        meal: "../../assets/pets/herbivore.png"},
    {name: 'CHEETAHS',
        location: 'Native to Africa',
        image: '../../assets/pets/cheetahs.jpg',
        meal: "../../assets/pets/predator.png"},
    {name: 'PENGUINS',
        location: 'Native to Antarctica',
        image: '../../assets/pets/pinguin.jpg',
        meal: "../../assets/pets/predator.png"},
    {name: 'FOX',
        location: 'all of Europe',
        image: '../../assets/pets/fox.jpg',
        meal: "../../assets/pets/predator.png"},
    {name: 'PRZEWALSKI HORSE',
        location: 'western Mongolia',
        image: '../../assets/pets/horse_prj.jpg',
        meal: "../../assets/pets/herbivore.png"},
    {name: 'HYENA',
        location: 'Native to Africa',
        image: '../../assets/pets/hyena.jpg',
        meal: "../../assets/pets/predator.png"},
    {name: 'JERBOA',
        location: 'Asia west',
        image: '../../assets/pets/jerboa.jpg',
        meal: "../../assets/pets/herbivore.png"},
    {name: 'KENGURU',
        location: 'Native to Australia',
        image: '../../assets/pets/kenguru.jpg',
        meal: "../../assets/pets/herbivore.png"},
    {name: 'OWL',
        location: 'Native to Europe',
        image: '../../assets/pets/owl.jpg',
        meal: "../../assets/pets/predator.png"},
    {name: 'PUMA',
        location: 'Native to America',
        image: '../../assets/pets/puma.jpg',
        meal: "../../assets/pets/predator.png"},
    {name: 'ZUBR',
        location: 'Native to Eastern Europe',
        image: '../../assets/pets/zubr.jpg',
        meal: "../../assets/pets/herbivore.png"},
    {name: 'WOLF',
        location: 'Native to Europe',
        image: '../../assets/pets/wolf.jpg',
        meal: "../../assets/pets/predator.png"}
]
const burger = document.querySelector('.burger-list')
const btn_move_right = document.querySelector('#move-right')
const btn_move_left = document.querySelector('#move-left')
const carousel = document.querySelector('#carousel')
const activeSlide = document.querySelector('#item-active')
const leftSlide = document.querySelector('#item-left')
const rightSlide = document.querySelector('#item-right')
const overlay = document.querySelector('.burger-overlay')


document.body.addEventListener('click', (e) => {
    console.log(e.target)
    if (e.target.classList.contains('burger-close') ||
        e.target.classList.contains('burger-menu') ||
        e.target.parentElement.classList.contains('burger-menu')
    ) {
        burger.classList.toggle('burger-open')
        overlayToggle()
    } else if (e.target.classList.contains('burger-item') || e.target.parentElement.classList.contains('burger-item')
        || e.target.classList.contains('burger-overlay')) {
        burger.classList.remove('burger-open')
        overlayToggle()
    }
})

function overlayToggle() {
    console.log(burger)
    if (burger.classList.contains('burger-open')) {
        overlay.classList.add('overlay-open')
    } else {
        overlay.classList.remove('overlay-open')
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

// testimonials________________________________________________________________
//_____________________________________________________________________________



const testimonialsSlider = document.querySelector('.testimonials__wrapper__cards')
document.querySelector('#position_new_post').addEventListener('input',function (){
    testimonialsSlider.style.marginLeft=(
        -(document.querySelector('.testimonials__wrapper__cards>img').getBoundingClientRect().width+30)
        *this.value)+'px'
})

const posts = document.querySelectorAll('.wrapper__post.mobile')
const modal = document.querySelector('.modal-window')

console.log(posts)

posts.forEach(el=>{
    el.addEventListener('click',()=>{
        console.log(el.previousElementSibling)
        let ap=`
         <div class="modal-window-close"><img class="modal-window-close" src="../../assets/x_icon-2.png" alt="#"></div>
            ${el.innerHTML}
            `
           modal.insertAdjacentHTML('beforeend', ap)
        modal.style.opacity = '1'
        overlay.classList.add('overlay-open')
    })
})

document.addEventListener('click',e=>{
if( e.target.classList.contains('modal-window-close') ||
    e.target.classList.contains('burger-overlay')){
    overlay.classList.remove('overlay-open')

modal.textContent=''
    modal.style.opacity = '0'
} if(
    e.target.classList.contains('burger-menu') ||
    e.target.parentElement.classList.contains('burger-menu')){
        modal.textContent=''
    modal.style.opacity = '0'
}
})


// donate________________________________________________________________
//_____________________________________________________________________________


