
function validateEmail() {
    var emailID = document.forma.email.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");

    if (atpos < 1 || (dotpos - atpos < 2)) {
        alert("Niste uneli pravilno email. Pokušajte ponovo.")
        document.forma.email.focus();
        return false;
    }
    return (true);
}

function validateT() {
    if (document.forma.t.value == "" ||
        isNaN(document.forma.t.value) ||
        document.forma.t.value.length != 10)  {
        alert("Niste uneli pravilno telefonski broj");
        document.forma.t.focus();
        return false;
    }
}

function checkPass() {
    var p = document.forma.sifra.value;
    var p2 = document.forma.sifra2.value;
    if (p != p2) {
        document.forma.submit.disabled = true;
        alert("Sifre se ne podudaraju.");
    }
}

function windowOpen() {
    var myWindow = window.open("https://www.instagram.com/happysocks/?hl=sr", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=150,left=500,width=800,height=800");
}

function windowOpen1() {
    var myWindow = window.open("https://www.facebook.com/HappySocks/", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=150,left=500,width=800,height=800");
}
