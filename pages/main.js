const burger = document.querySelector('.burger-list')

document.body.addEventListener('click',(e)=>{
    console.log(e.target)
    if( e.target.classList.contains('burger-close')){
        burger.classList.toggle('burger-open')
        overlayToggle()
    }else if(e.target.classList.contains('burger-item') || e.target.parentElement.classList.contains('burger-item')
    || e.target.classList.contains('burger-overlay')){
        burger.classList.remove('burger-open')
        overlayToggle()
    }
})
function overlayToggle(){
    if( burger.classList.contains('burger-open')){
        document.querySelector('.burger-overlay').style.opacity='0.5'
    }else{
        document.querySelector('.burger-overlay').style.opacity='0'
    }
}