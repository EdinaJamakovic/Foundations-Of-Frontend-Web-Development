$(document).ready(function(){
    // Toggle cosmetic dentistry info
    $("#cosmetic-dentistry-info").click(function(){
        $("#learn-more-1").toggle();
    });

    // Switch between light and dark theme
    $("#flexSwitchCheckDefault").change(function(){
        var themeLink = $("#theme");
        var currentTheme = themeLink.attr('href');

        if (currentTheme.includes("../assets/css/lightTheme.css")) {
            themeLink.attr('href', "../assets/css/darkTheme.css");
        } else {
            themeLink.attr('href', "../assets/css/lightTheme.css");
        }
    });

    // Validate and handle subscription form
    $("#subscribe-form").validate({
        rules: {
            email: {
                email: true
            }
        },
        messages: {
            email: "Please enter a valid email address."
        },
        errorPlacement: function(error, element){
            error.appendTo("#error-message");
        },
        submitHandler: function(form){
            form.reset();
        }
    });

    // Handle subscription button click
    $("#subscribe-button").click(function(){
        let form = $("#subscribe-form");
        if (form.valid()){
            $("#success-message").show().delay(2000).fadeOut(3000);
        }
    });

    $("#appointment-form").validate({
        rules: {
            email: {
                email: true,
            },

            phone: {
                phone: true,
            },

            "name": {
                required: true,
            },

            "services":{
                required: true,
            }
        },

        messages: {
            email: {
                email: "Please enter a valid email adress.",
            },

            phone: {
                phone: "Please enter a valid phone number",
            },
            "name": {
                required: "This field is required",
            },

            "services": {
                required: "This field is required",
            },
        },


    })

});


