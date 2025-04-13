var title = document.querySelectorAll('.service2')
var Images = document.querySelectorAll('.service_container .service2 .service_Title img')

title.forEach((elem , index) => {
    elem.addEventListener('mouseover', ()=>{
        Images.forEach((img) => {
            img.classList.remove('image_show')
        })
        var isActive = Images[index].classList.contains('image_show');
        if (!isActive) {
            Images[index].classList.add('image_show')
        }
    })
    elem.addEventListener('mouseleave' ,()=>{
        Images.forEach((img) => {
        img.classList.remove('image.show');
    });
    });
});