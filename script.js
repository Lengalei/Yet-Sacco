$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggler');
    });



    $(window).on('scroll load', function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if($(window).scrollTop()> 0){
            $('.top').show();
        }else {
            $('.top').hide();
        };
    });

    // smooth scrolling

    $('a[href*="#"]').on('click', function(e){
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        },
            500, 
            'linear'
        )
    })
});


const counterEl = document.querySelector('.counter');
let counterNumber = 0;

const updateCounter = setInterval(function (){
    counterNumber++;
    counterEl.textcontent = counterNumber;

    if (counterNumber >= 20) {
        clearInterval(updateCounter);
        counterEl.style.color = '#2E8B57'
    }
},1)