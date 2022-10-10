const burger = document.querySelector('.burger-list')
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

const sumValues = document.querySelectorAll('.radioInput')
const sumField = document.querySelector('#changeSum')
console.log(sumValues)
sumValues.forEach(el=>{
    el.addEventListener('input',()=>{

        sumField.value= el.value
    })
})
sumField.value.maxLength = 4;

sumField.addEventListener('focus',()=>{
    sumField.value=''
    sumValues.forEach(el=> {
        el.checked = 'false'
    })
})
sumField.addEventListener('input',()=>{
    if(!sumField.value) sumValues[sumValues.length-1].checked='true'
    if(sumField.value.length>=4)sumField.value = sumField.value.slice(0,4)
    sumValues.forEach(el=>{

        if( el.value==sumField.value){
            el.checked='true'
        }
    })
})