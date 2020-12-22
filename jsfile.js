function validate_form() {
    valid = true;
    if (document.contact_form.FSUB.value == "") {
        alert("Please fill the ' SUBJECT ' box.");
        valid = false;
    }
    if (document.contact_form.FID.value == "") {
        alert("Please fill the ' ID ' box.");
        valid = false;
     }
  
    if (document.contact_form.FURL.value == "") {
        alert("Please fill the ' URL ' box.");
        valid = false;
    }
    
    if (document.contact_form.FMAIL.value == "") {
        alert("Please fill the ' E-MAIL ' box.");
        valid = false;
    }
    if (document.contact_form.FMESS.value == "") {
        alert("Please fill the ' MESSAGE ' box.");
        valid = false;
    }

    return valid;
}


function string() {
    var letters = /[0-9]/; number = /[a-zA-Z!-/:-@]/;
    check = true
    if (document.contact_form.FSUB.value.match(letters)) {
        alert("Please check the ' Subject ' box just STRING allow. ");
        check = false
    }
    if (document.contact_form.FMESS.value.match(letters)) {
        alert("Please check the 'MESSAGE ' box just STRING allow. ");
        check = false;
    }
    if (document.contact_form.FID.value.match(number)) {
        alert("Please check the 'ID ' box just NUMBERS allow. ");
        check = false;
    }

    return check
}

function f1() {
var x = document.contact_form.FMAIL.value;
    var y = x.split("");
    var j =y.indexOf('@');
    var m  = y.slice(j+1);
    

    var a = document.contact_form.FURL.value;
    var b = a.split("");
    var t, text = "";
    var r = b.indexOf('/');
    var i = b.indexOf('.');
    for (t = r+2 ; t < i; t++) {
        text += b[t];
    }
    if (!document.contact_form.FMAIL.value == ""){
    alert("the domain of the mail : "+ m.join(""));}
    if (!document.contact_form.FURL.value == "") {
    alert("the username : " + text);}

}