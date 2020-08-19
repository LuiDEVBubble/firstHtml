//Esta funcion me ayuda a ver si la respuesta del usuario es blank.
checkAddress = (fieldId) =>
{
    let id = document.getElementById(fieldId).value;

    if (id === "")
    {
        alert("email is required.");
    }

}

fillCity = () => 
{
    let cityName;
    let zipEntered = document.getElementById("zip").value;

    switch(zipEntered)
    {
        case "60608":
            cityName = "Chicago";
            break;
        
        case "68114":
            cityName = "Ohoma";
            break;
        case "27704":
            cityName = "Durham";
            break;
    }

    document.getElementById("city").value = cityName;
}