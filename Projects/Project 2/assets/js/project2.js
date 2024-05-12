$(document).ready(function(){
    
    //Form validation BEGINING
    $.validator.addMethod("phoneBH", function(phone_number, element) {
        console.log("Input:", phone_number);
        phone_number = phone_number.replace(/[^\d]/g, "");;
        console.log("Processed:", phone_number);
        const regEx_phone = /^(?:387|0)\d{8,9}$/;
        return phone_number.match(regEx_phone);
      }, "Please enter a valid Bosnian phone number.");

    // Toggle cosmetic dentistry info
    $("#cosmetic-dentistry-info").click(function(){
        $("#facebookShow").toggle();
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
                // Define a custom method for validating phone numbers
                phoneBH: true,
                required: true,
            },
            name: {
                required: true,
            },
            services: {
                required: true,
            }
        },
        messages: {
            email: {
                email: "Please enter a valid email address.",
                required: "This field is required.",
            },
            phone: {
                phoneBH: "Please enter a valid Bosnian phone number.",
                required: "This field is required.",
            },
            name: {
                required: "This field is required.",
            },
            services: {
                required: "This field is required.",
            },

        },

        submitHandler: function(form){
            form.reset()
        },

    });
    //Form validation END

    //accordion menu START
    $("#accordion-toggle").click(function(){
        let acc = $("#accordion-wrapper");
        if (acc.css("display") == "block"){
            acc.slideUp();
        }
        else {
            acc.slideDown();
        }
    })

    $(".accordion-item").click(function(event){
        event.preventDefault();
        let index = $(this).index();
        let currentItem = $(".accordion-item").eq(index);
        let currentBody = currentItem.find(".accordion-body");

        if(currentBody.css("display") == "block") {
            currentBody.slideUp();
        }
        else {
            $(".accordion-body").slideUp();
            currentBody.slideDown();
        }
        //accordion menu END 

    })

    $("#appointment-form").submit(function(event){
        event.preventDefault();
        let formData = {
            fullName: $("#fullName").val(),
            email: $("#email").val(),
            phone: $("#phone").val(),
            service: $("#service").val(),
            message: $("#message").val()
        }

        $.ajax({
            type: "POST",
            url: "../json/appointments.json",
            data: formData,
            dataType: "json",
            success: function(data) {
                console.log("Data added successfully: " + data);
            },
            error: function (responseTxt, statusTxt, xhr){
                console.log("Error: " + xhr.responseText);
            }
        })
    })

});


