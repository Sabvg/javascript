// LOGIN:

const login = document.getElementById('myLoginId');

function loginValidate() {
    var acumErroresLogin = 0;

    login.classList.remove('is-invalid');

    var inputEmailLogin = document.getElementById('inputEmailLogin');

    var inputPasswordLogin = document.forms["myLogin"]["inputPasswordLogin"];

    if (inputEmailLogin.value == "") {
        inputEmailLogin.classList.add("is-invalid");
        document.getElementById("errorEmailLogin").textContent = "Debes introducir tu email";
        acumErroresLogin++;
    } else if (!validar_email(inputEmailLogin.value)) {
        inputEmailLogin.classList.add("is-invalid");
        document.getElementById("errorEmailLogin").textContent = "El email no cumple el formato";
        acumErroresLogin++;
    }

    if (inputPasswordLogin.value == "") {
        inputPasswordLogin.classList.add("is-invalid");
        document.getElementById("errorPasswordLogin").textContent = "Debes introducir tu contraseña";
        acumErroresLogin++;
    } else if (!validar_password(inputPasswordLogin.value)) {
        inputPasswordLogin.classList.add("is-invalid");
        document.getElementById("errorPasswordLogin").textContent = "La contraseña debe tener entre 4 y 12 dígitos";
        acumErroresLogin++;
    }

    if (acumErroresLogin > 0) {
        return false;
    } else {
        return true;
    }
}

login.addEventListener('blur', (event) => {
    console.log(event);
    if (event.target.value != '') event.target.classList.remove('is-invalid');
}, true);



// REGISTRO:

const form = document.getElementById('myFormId');

function registerValidate() {
    var acumErrores = 0;

    form.classList.remove('is-invalid');

    var inputEmail = document.getElementById('inputEmail');

    var inputPassword = document.forms["myForm"]["inputPassword"];
    var inputPasswordRepeat = document.forms["myForm"]["inputPasswordRepeat"];
    var inputProvince = document.forms["myForm"]["inputProvince"];
    var inputName = document.forms["myForm"]["inputName"];
    var inputLastname = document.forms["myForm"]["inputLastname"];
    var inputPhone = document.forms["myForm"]["inputPhone"];
    var gridCheck = document.forms["myForm"]["gridCheck"];

    var tel = inputPhone.value;

    if (inputEmail.value == "") {
        inputEmail.classList.add("is-invalid");
        document.getElementById("errorEmail").textContent = "Este campo es obligatorio";
        acumErrores++;
    } else if (!validar_email(inputEmail.value)) {
        inputEmail.classList.add("is-invalid");
        document.getElementById("errorEmail").textContent = "El email no cumple el formato";
        acumErrores++;
    }

    if (inputPassword.value == "") {
        inputPassword.classList.add("is-invalid");
        document.getElementById("errorPassword").textContent = "Este campo es obligatorio";
        acumErrores++;
    } else if (!validar_password(inputPassword.value)) {
        inputPassword.classList.add("is-invalid");
        document.getElementById("errorPassword").textContent = "La contraseña debe tener entre 4 y 12 dígitos";
        acumErrores++;
    }

    if (inputPasswordRepeat.value == "") {
        inputPasswordRepeat.classList.add("is-invalid");
        document.getElementById("errorPasswordRepeat").textContent = "Este campo es obligatorio";
        acumErrores++;
    } else if (inputPassword.value !== inputPasswordRepeat.value) {
        inputPasswordRepeat.classList.add("is-invalid");
        document.getElementById("errorPasswordRepeat").textContent = "Debes repetir tu contraseña";
        acumErrores++;
    }

    if (inputName.value == "") {
        inputName.classList.add("is-invalid");
        document.getElementById("errorName").textContent = "Este campo es obligatorio";
        acumErrores++;
    } else if (!validar_nombre(inputName.value)) {
        inputName.classList.add("is-invalid");
        document.getElementById("errorName").textContent = "El nombre no puede contener números ni caracteres especiales";
        acumErrores++;
    }

    if (inputLastname.value == "") {
        inputLastname.classList.add("is-invalid");
        document.getElementById("errorLastname").textContent = "Este campo es obligatorio";
        acumErrores++;
    } else if (!validar_apellido(inputLastname.value)) {
        inputLastname.classList.add("is-invalid");
        document.getElementById("errorLastname").textContent = "El apellido no puede contener números ni caracteres especiales";
        acumErrores++;
    }

    if (inputProvince.value == "") {
        inputProvince.classList.add("is-invalid");
        document.getElementById("errorProvince").textContent = "Debes seleccionar una provincia";
        acumErrores++;
    }

    if (inputPhone.value == "") {
        inputPhone.classList.add("is-invalid");
        document.getElementById("errorPhone").textContent = "El teléfono es obligatorio";
        acumErrores++;
    } else if (isNaN(inputPhone.value) || tel.length != 9) {
        inputPhone.classList.add("is-invalid");
        document.getElementById("errorPhone").textContent = "El teléfono debe contener 9 números";
        acumErrores++;
    }

    if (!gridCheck.checked) {
        gridCheck.classList.add("is-invalid");
        document.getElementById("errorCheck").textContent = "Debes aceptar la política de privacidad";
        acumErrores++;
    }

    if (acumErrores > 0) {
        return false;
    } else {
        return true;
    }
}


form.addEventListener('blur', (event) => {
    console.log(event);
    if (event.target.value != '') event.target.classList.remove('is-invalid');
}, true);



function validar_email(email) {
    //var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return regex.test(email) ? true : false;
}

function validar_password(password) {
    var valPassword = /^.{4,12}$/; // 4 a 12 digitos
    return valPassword.test(password) ? true : false;
}

function validar_nombre(nombre) {
    var valNombre = /^[a-zA-ZÀ-ÿ]/; // sólo letras
    return valNombre.test(nombre) ? true : false;
}

function validar_apellido(apellido) {
    var valApellido = /^[a-zA-ZÀ-ÿ]/; // sólo letras
    return valApellido.test(apellido) ? true : false;
}


//elimino placeholder cuando el user hace click
inputEmailLogin.onclick = function removePlaceholder() { inputEmailLogin.placeholder = ""; };
inputPasswordLogin.onclick = function removePlaceholder() { inputPasswordLogin.placeholder = ""; };
inputPassword.onclick = function removePlaceholder() { inputPassword.placeholder = ""; };
inputEmail.onclick = function removePlaceholder() { inputEmail.placeholder = ""; };
inputPasswordRepeat.onclick = function removePlaceholder() { inputPasswordRepeat.placeholder = ""; };
inputName.onclick = function removePlaceholder() { inputName.placeholder = ""; };
inputLastname.onclick = function removePlaceholder() { inputLastname.placeholder = ""; };
inputPhone.onclick = function removePlaceholder() { inputPhone.placeholder = ""; };