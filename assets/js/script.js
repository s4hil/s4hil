console.log('Hey Devs! Lemme know how it looks.');

$(document).ready( () => {
    $('.preloader').fadeOut();
});

var mybutton = document.getElementById("topBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

function toTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$('#sendBtn').click(function (e) {
    e.preventDefault();

    let name = $('#name').val();
    let email = $('#email').val();
    let msg = $('#message').val();
    let text = encodeURIComponent(msg);

    name = name.replace('<', '');
    name = name.replace('"', '');

    let message = name +" having email: "+ email + " says that => " + text;

    let token = "1724343797:AAGPUhvJlUU0gYrr1mzbnmORsssl_dgndE8";
    let chatID = "1149842523";
    
    let telegramAPI = "https://api.telegram.org/bot" + token + "/sendMessage?chat_id=" + chatID + "&text=" + message;
    
    if (name == "" || email == "" || message == "") {
        alert('All Fields Are Required');
    }
    else {
        let sending = "<i class='fa fa-refresh' id='loading'></i> Sending";
        $('#sendBtn').html(sending);

        $.ajax({
            url: telegramAPI,
            method: 'get',
            responseType: 'json',
            success: function(data) {
                $('#contactForm')[0].reset();
                alert = "<i class='fa fa-check'></i> Message Sent!";
                $('#status').html(alert);
                let sent = "<i class='fa fa-check'></i> Sent";
                $('#sendBtn').html(sent);
            },
            error: function (data) {
                alert = "Failed To Send Message.";
                $('#status').html(alert);
                let failed = "<i class='fa fa-times'></i> Not Sent";
                $('#sendBtn').html(failed);
            },
        });
    }
});


// Theme switch

function lightMode() {
    $(':root').css('--primary-dark', '#999999');
    $(':root').css('--secondary-dark', '#cccccc');
    $(':root').css('--light-color', '#242424');

    $('body').css('color', 'var(--light-color) !important');
    $('.timeline-body').css('color', '#fff !important');
    $('.to-top-btn > *').css('color', '#fff !important');
    $('.theme-switch *').css('color', '#fff !important');
    $('.send-btn').css('color', '#fff !important');
    $('.send-btn i').css('color', '#fff !important');
    $('.about-me *').css('color', '#242424');
}

function darkMode() {
    $(':root').css('--primary-dark', '');
    $(':root').css('--secondary-dark', '');
    $(':root').css('--light-color', '');

    $('body').css('color', '');
    $('.timeline-body').css('color', '');
    $('.to-top-btn > *').css('color', '');
    $('.theme-switch *').css('color', '');
    $('.send-btn').css('color', '');
    $('.send-btn i').css('color', '');
    $('.about-me *').css('color', '');


}


let currentTheme = "dark";

$("#theme-switch-btn").click(()=>{
    if (currentTheme == "dark") {
        lightMode();
        currentTheme = "light";
        $("#theme-switch-btn").html("<i class='fas fa-sun'></i>");
    }
    else {
        darkMode();
        currentTheme = "dark";
        $("#theme-switch-btn").html("<i class='fas fa-moon'></i>");

    }
});
