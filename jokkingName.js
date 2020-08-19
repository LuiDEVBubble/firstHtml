//Esta funcion me ayuda a ver si la respuesta del usuario es blank.
checkAddress = (fieldId) =>
{
    let id = document.getElementById(fieldId).value;

    if (id === "")
    {
        alert("email is required.");
    }

}