
        $.validator.setDefaults({
            highlight: function (element) {
                $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
            },
            success: function (element) {
                element.closest('.form-group').removeClass('has-error').addClass('has-success');
            },
            errorElement: "span",
            errorPlacement: function (error, element) {
                if (element.is(":radio") || element.is(":checkbox")) {
                    error.appendTo(element.parent().parent().parent());
                } else {
                    error.appendTo(element.parent());
                }
            },
            errorClass: "help-block m-b-none",
            validClass: "help-block m-b-none"


        });


        $().ready(function () {

            // validate signup form on keyup and submit
            var icon = "<i class='fa fa-times-circle'></i> ";
            $("#signupForm").validate({
                rules: {

                    mail_address: {
                        required: true,
                        email: true
                    },
                    user_Id: {
                        required: true,
                        minlength: 18,
                        maxlength: 18
                    }
                },
                messages: {

                    user_Id: {
                        required: icon + "请输入您的身份Id",
                        minlength: icon + "Id必须18个字符,当前少于18字符",
                        maxlength: icon + "Id必须18个字符,当前超过18字符"
                    },

                    mail_address: icon + "请输入正确邮箱格式",

                }
            });


        });
