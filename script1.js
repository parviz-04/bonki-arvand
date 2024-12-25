const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

//javascript for img slider navigation
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".img-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function(manual){
btns.forEach((btn) => {
    btn.classList.remove("active");
});

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    contents.forEach((content) => {
        content.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});


////////////////////////////faqs///////////////////////////////////////////////



window.addEventListener('sccroll',()=>{
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 100)
})


// show/hide faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
faq.addEventListener('click', () => {
    faq.classList.toggle('open');

    //change icon
    const icon = faq.querySelector('.faq_icon i');
    if(icon.className === 'uil uil-plus') {
        icon.className - "uil uil-minus"
    } else{
        icon.className = "uil uil-plus";
    }

})
})