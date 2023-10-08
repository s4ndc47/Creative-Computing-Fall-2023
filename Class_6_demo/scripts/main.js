document.querySelector('.btn').addEventListener('click', function(){

    console.log('yes I clicked');
    document.querySelector('.show-me').style.opacity = "1"; 
});


window.addEventListener('scroll', function(){

    console.log('yes I scroll');
    document.querySelector('.scrolls').style.opacity = "1"; 
   
})

