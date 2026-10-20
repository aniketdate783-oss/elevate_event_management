// Smooth scrolling

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const section = document.querySelector(this.getAttribute("href"));

        section.scrollIntoView({
            behavior:"smooth"
        });

    });

});


// WhatsApp Booking Form

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.querySelector("input[type='text']").value;
    let mobile = document.querySelector("input[type='tel']").value;
    let event = document.querySelectorAll("input[type='text']")[1].value;
    let message = document.querySelector("textarea").value;


    let whatsappMessage =
    `Hello Elevate Event Management,
    
Name: ${name}
Mobile: ${mobile}
Event Type: ${event}
Message: ${message}`;


    let url = "https://wa.me/918149542068?text=" + encodeURIComponent(whatsappMessage);


    window.open(url, "_blank");

});