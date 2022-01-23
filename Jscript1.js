function ch1() {
    email = String(document.getElementById("em1").value);
    pass = String(document.getElementById("ps1").value);
    if (email == "as7490226@gmail.com" || email == "ali0315" && pass == "ali0315") {
        window.alert("شما با موفقیت وارد شدید !")
    } else {
        window.alert("نام کاربری یا رمزعبور اشتباه است !")
    }
}