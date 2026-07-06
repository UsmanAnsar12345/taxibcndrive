document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
document.getElementById("bookingForm").addEventListener("submit", function(e) {

    e.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let pickup = document.getElementById("pickup").value;
    let destination = document.getElementById("destination").value;
let date = document.getElementById("date").value;
let time = document.getElementById("time").value;
   let message =
`Hello Taxi BCN Drive,

Name: ${name}
Phone: ${phone}
Pickup: ${pickup}
Destination: ${destination}
Date: ${date}
Time: ${time}`;

    let whatsappURL = "https://wa.me/34688396967?text=" + encodeURIComponent(message);

    window.open(whatsappURL, "_blank");

});
