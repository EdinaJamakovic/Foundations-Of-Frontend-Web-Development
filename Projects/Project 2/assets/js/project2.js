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

        if (currentTheme.includes("./assets/css/lightTheme.css")) {
            themeLink.attr('href', "./assets/css/darkTheme.css");
        } else {
            themeLink.attr('href', "./assets/css/lightTheme.css");
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
                required: true,
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
            $.blockUI({
                message: '<h1><i class="fa fa-spinner fa-spin"></i>Processing...</h1>',
                overlayCSS: {
                    backgroundColor: '#fff',
                    opacity: 0.8,
                    cursor: 'wait'
                }
            });

                let formData = {
                    fullName: $("#fullName").val(),
                    email: $("#email").val(),
                    phone: $("#phone").val(),
                    service: $("#service").val(),
                    message: $("#message").val()
                }
        
                $.ajax({
                    type: "POST",
                    url: "http://localhost/Foundations-Of-Frontend-Web-Development/Projects/Project%202/assets/json/logs.json",
                    data: JSON.stringify(formData)  ,
                    dataType: "json",
                    success: function(data) {
                        console.log("Data added successfully: " + data);
                        toastr.success("Successful!");
                        $.unblockUI();
                        
                    },
                    error: function (xhr, status, error){
                        console.log(formData);
                        console.log("Status: " + status);
                        console.log("Error: " + error);
                        console.log("Response Text: " + xhr.responseText);
                        toastr.error("Something went wrong.");
                        $.unblockUI();
                    }
                    
                });

            //window.location.replace("#appointments");
           // form.reset()
        },

    });
    //Form validation END

    //accordion menu START
    $("#accordion-toggle").click(function(){
        console.log("clicked!!!")
        let acc = $("#accordion-wrapper");
        acc.slideDown();
    })

    $(".accordion-item1").click(function(event){
        let index = $(this).index();
        let currentItem = $(".accordion-item1").eq(index);
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

    
    //appointments table
    function getAppointments(){
        $.ajax({
            url: "http://localhost/Foundations-Of-Frontend-Web-Development/Projects/Project%202/assets/json/appointments.json",
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                console.log(data);
                $("table#appointments").DataTable({
                    data: data, 
                    columns: [
                        { data: 'date', title: 'Date' },
                        { data: 'time', title: 'Time' }, 
                        { data: 'is_booked', title: 'Booked' },
                        {
                        title: 'Book Appointment',
                            render: function (data, type, row, meta) {
                                if (!row.is_booked) {
                                    return `<button class="btn btn-primary book-btn">Book</button>`;
                                } else {
                                    return 'Already Booked';
                                }
                            }
                        }
                    ],

                });
                
            }
        })
    };

    getAppointments();

    $("#appointments").on("click", ".book-btn", function(){
        let row = $(this).closest("tr");
        let booked_column = row.find("td").eq(2);
        $(this).html("Cancel").css({"background-color": "#50C878", "border-color":"#00A36C"}).removeClass("book-btn").addClass("cancel-btn");
        row.css("background-color", "#AFE1AF");
        booked_column.html("true");
        toastr.success("Appointment booked successfully!")
    });
    $("#appointments").on("click", ".book-btn", function(){
        let index = $(this).index();

    });

    $("#appointments").on("click", ".cancel-btn", function(){
        let row = $(this).closest("tr");
        let booked_column = row.find("td").eq(2);
        $(this).html("Book").removeAttr("style").removeClass("cancel-btn").addClass("book-btn");
        row.removeAttr("style");
        booked_column.html("false");
        toastr.info("Appointment canceled successfully!");
    });

});


