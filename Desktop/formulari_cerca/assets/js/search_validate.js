//BUSCADOR:
const search = document.getElementById('mySearchId');

function searchValidate() {

    var acumErroresSearch = 0;

    search.classList.remove('is-invalid');

    var inputSearch = document.getElementById('inputSearch');



    if (inputSearch.value == "") {
        inputSearch.classList.add("is-invalid");
        document.getElementById("errorSearch").textContent = "Debes introducir una búsqueda";
        acumErroresSearch++;

    } else if (inputSearch.value.length < 3 && inputSearch.value.length >= 1) {
        inputSearch.classList.add("is-invalid");
        document.getElementById("errorSearch").textContent = "La búsqueda debe contener más de 3 letras";
        acumErroresSearch++;
    }

    if (acumErroresSearch > 0) {
        return false;
    } else {
        return true;
    }
}

//elimino placeholder cuando el user hace click
inputSearch.onclick = function() { removePlaceholder() };

function removePlaceholder() {

    inputSearch.placeholder = "";
}