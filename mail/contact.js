$(function() {
    $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // Handle validation errors
        },
        submitSuccess: function($form, event) {
            event.preventDefault();
            var form = $form[0];
            $.ajax({
                url: form.action,
                type: form.method,
                data: $(form).serialize(),
                cache: false,
                success: function() {
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').append("<strong>Your message has been sent.</strong>");
                    $('#success > .alert-success').append('</div>');
                    $form[0].reset();
                },
                error: function() {
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').append("<strong>Sorry, the mail server is not responding. Please try again later or contact me directly at lkulandaiyesu@gmail.com.</strong>");
                    $('#success > .alert-danger').append('</div>');
                }
            });
        }
    });
});