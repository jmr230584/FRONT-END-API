function validar(){
    const emailValidado = isValidarEmail();
    document.getElementById("recuperar-senha").disable = !emailValidado;
}

function isValidarEmail(){
    const email = document.getElementById("email").value; 
    if(!email){
        return false;
    }
    return validarEmail(email);
}

function validarEmail(email){
    return /\S+@\S+\.\S+/.test(email);
}