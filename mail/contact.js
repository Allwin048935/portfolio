$(function() {
    $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            $('#success').html("<div class='alert alert-danger'>");
            $('#success > .alert-danger').append("<strong>Please fix the form errors and try again.</strong>");
            $('#success > .alert-danger').append('</div>');
        },
        submitSuccess: function($form, event) {
            event.preventDefault();
            var form = $form[0];
            $.ajax({
                url: form.action,
                type: form.method,
                data: $(form).serialize(),
                cache: false,
                success: function(response) {
                    // Verify Formspree success
                    if (response && (response.ok || response.status === 200)) {
                        $('#success').html("<div class='alert alert-success'>");
                        $('#success > .alert-success').append("<strong>Thank you for your message.</strong>");
                        $('#success > .alert-success').append('</div>');
                        $form[0].reset();
                    } else {
                        $('#success').html("<div class='alert alert-danger'>");
                        $('#success > .alert-danger').append("<strong>Sorry, something went wrong. Please try again later or contact me at lkulandaiyesu@gmail.com.</strong>");
                        $('#success > .alert-danger').append('</div>');
                    }
                },
                error: function() {
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').append("<strong>Sorry, the mail server is not responding. Please try again later or contact me at lkulandaiyesu@gmail.com.</strong>");
                    $('#success > .alert-danger').append('</div>');
                }
            });
        }
    });
});