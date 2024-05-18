

$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggler');
    });



    $(window).on('scroll load', function(){
        // $('#menu').removeClass('fa-times');
        // $('header').removeClass('toggle');

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

// login page
// Function to start the counter when it becomes visible
function startCounterWhenVisible(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Start the counter
            const counterspan = entry.target.querySelector('.counter');
            let counterNumber = parseInt(counterspan.textContent);

            const updateCounter = setInterval(function () {
                counterNumber++;
                counterspan.textContent = counterNumber;
                if (counterNumber >= 20) {
                    clearInterval(updateCounter);
                    counterspan.style.color = '#2E8B57';
                }
            }, 100);

            // Stop observing once started
            observer.unobserve(entry.target);
        }
    });
}

// Create a new IntersectionObserver
const observer = new IntersectionObserver(startCounterWhenVisible, { threshold: 0.5 });

// Observe the target element
const counterContainer = document.querySelector('.countercontainer');
observer.observe(counterContainer);

// navbar

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

 menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('show');
}

// services
document.addEventListener("DOMContentLoaded", function() {
    let prevScrollPos = window.pageYOffset;
    const services = document.querySelectorAll(".allservices .service1");
  
    function zoomOut() {
      services.forEach(service => {
        service.classList.remove("zoom-in");
        service.classList.add("zoom-out");
      });
    }
  
    function zoomIn() {
      services.forEach(service => {
        service.classList.remove("zoom-out");
        service.classList.add("zoom-in");
      });
    }
  
    window.onscroll = function() {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        zoomIn();
      } else {
        zoomOut();
      }
      prevScrollPos = currentScrollPos;
    }
  });

  // faq

  function toggleAnswer(element) {
    const faqItem = element.parentElement;
    faqItem.classList.toggle('active');
}

// testimonial
let currentTestimonial = 0;
let intervalId;

function showTestimonial(index) {
    const testimonials = document.querySelectorAll('.testimonial-item');
    if (index >= testimonials.length) {
        currentTestimonial = 0;
    }
    if (index < 0) {
        currentTestimonial = testimonials.length - 1;
    }
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove('active');
        if (i === currentTestimonial) {
            testimonial.classList.add('active');
        }
    });
}

function nextTestimonial() {
    currentTestimonial++;
    showTestimonial(currentTestimonial);
}

function prevTestimonial() {
    currentTestimonial--;
    showTestimonial(currentTestimonial);
}

function startAutoSlide() {
    intervalId = setInterval(nextTestimonial, 3000);
}

function stopAutoSlide() {
    clearInterval(intervalId);
}

// Initialize the first testimonial and start the automatic slide
showTestimonial(currentTestimonial);
startAutoSlide();
