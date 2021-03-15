function Applied(option) {
    formElement = document.getElementById(option.form)
    option.rules.forEach(function (rule) {
            var input = formElement.querySelector(rule.selector)
            console.log(rule)
            var errElement = input.parentElement.querySelector(".form-message")

            function Check() {
                var isErr = rule.test(input.value)
                if (isErr) {
                    errElement.innerText = isErr
                    errElement.classList.add("invalid")
                } else {
                    errElement.innerText = ""
                    errElement.classList.remove("invalid")
                }
            }

            input.onblur = function () {
                Check(input, rule)

            }
            input.oninput = function () {
                errElement.innerText = " "
            }
            var isPassConfirm = "#password_confirmation"

            // } if (rule.selector == isPassConfirm) {
            // var passWordConfirmElement = formElement.querySelector(isPassConfirm)
            //
            // passWordConfirmElement.onblur = function () {
            //     var pass1 = formElement.querySelector("#password").value
            //     var pass2 = passWordConfirmElement.value
            //     let isErr = rule.check(pass2, pass1)
            //     console.log(isErr)
            //     console.log(pass1)
            //     console.log(pass2)
            //     if (isErr) {
            //         errElement.innerText = isErr
            //         errElement.classList.add("invalid")
            //     } else {
            //         errElement.innerText = ""
            //         errElement.classList.remove("invalid")
            //     }
            // }
        }
    )

}

Applied.isRequired = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : "Vui lòng nhập  lại"
        }

    }
}
Applied.isEmail = function (selector) {
    var x = "@gmail.com"
    return {
        selector: selector,
        test: function (value) {
            return (value.indexOf(x) != -1) ? undefined : "Vui lòng nhập lại"
        }
    }
}
Applied.passWord = function (selector,min) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : "Mật khẩu  phải ít nhất 6 kí tự"
        }
    }
}
Applied.passWord2 = function (selector) {
    return {
        selector: selector,
        test: function (value,password1) {
            return value=== password1() ? undefined : " Không khớp "
        }
    }
}

