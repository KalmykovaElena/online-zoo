const burger = document.querySelector('.burger-list')

document.body.addEventListener('click',(e)=>{
    if( e.target.classList.contains('burger-close')){
        burger.classList.toggle('burger-open')
    }else if(e.target.classList.contains('burger-item') || e.target.parentElement.classList.contains('burger-item')){
        burger.classList.remove('burger-open')
    }
})
