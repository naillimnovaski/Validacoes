// codigo de validacao do email
//----------------------------------
function checarEmail(){
    if(document.forms[0].email.value == "" ||
    document.forms[0].email.value.indexOf("@") == -1 ||
    document.forms[0].email.value.indexOf(".") == -1 ){
    alert("por favor, informe um email valido");
    return false;
}else{
    alert("Email informado");
      document.getElementbyld("email").innerrHTML = document.forms[0].email.value;
}
}

//----------------------------------


//codigo de verificacao do email digitado
//---------------------------------------



//---------------------------------------
